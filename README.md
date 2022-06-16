This project is a Fibonacci Calculator.  The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding numbers.  It starts from 0.  The sequence is given by 0, 1, 1, 2, 3, 5, 8, etc.  You will enter the index of the number you'd like to have calculated.  For example, an index of 2 would return the value of 2 because the previous two numbers 1 + 1 = 2.

## Application Architecture
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It utilizes a React-Native front end, nginx server to serve up the react project, an nginx server to manage the routing of requests, Redis cache for short term memory storage and postgres for long term storage.

## Additional Information
It's based out of a Udemy course by Stephen Grider called Docker and Kubernestes: The Complete Guide.  THe course takes you through many examples on how to build, test and deploy Docker applications with Kubernestes while also learning how to productionize the workflows.

Course Reference: [Docker and Kubernetes: The Complete Guide](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/)