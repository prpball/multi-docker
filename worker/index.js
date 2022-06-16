const connectionKeys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: connectionKeys.redisHost,
  port: connectionKeys.redisPort,
  retry_strategy: () => 1000,  //once per 1000 seconds the client will attempt to reconnect to redis if it is disconnected
});
const sub = redisClient.duplicate();

function fib(index) {
  if (index < 2) {
    return 1;  
  } 
  return fib(index - 1) + fib(index - 2);
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
