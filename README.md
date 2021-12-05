# docker example project

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Simple example of how to setup nodejs using docker-compose.

Docker is ✨Magic ✨

## Features

- Simple server running at customizable port
- Integration with mongodb and mongodb-express
- Containerized using docker-compose tool

## Tech

Technologies used:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework 
- [docker] - containerization tool
- [mongodb] - non-relational database

## Installation

docker project requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server using the provided Makefile script.

```sh
cd docker
npm install
make up
```


## Docker

After installing the dependencies, there is a Makefile that could be used to setup docker container:

```sh
cd docker
make up
```

By default, the Docker will expose port 3001, so change this within the
.env or Dockerfile if necessary. 

Verify the deployment using the docker ps command in bash.

```sh
docker ps -a
```

Then, you can register some users in mongodb database and test if everything works as expected sending
GET request to:

```sh
localhost:3001/users
```

This should return the registered users.


