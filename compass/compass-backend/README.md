# compass-backend

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Backend project in nodejs for a simple social media network.

## Features

- Simple server running at customizable port
- Integration with mongodb and mongodb-express
- Containerized using docker-compose tool
- User validation using token method (JWT)

## Tech

Technologies used:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework 
- [docker] - containerization tool
- [mongodb] - non-relational database

## Installation

compass-backend project requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies.

```sh
cd compass-backend
npm install
```


## Docker

After installing the dependencies, and start the server using the docker compose method (version 2.0.1):

```sh
cd compass-backend
docker compose up -d
```

By default, the Docker will expose port 3001, so change this within the
.env or docker-compose file if necessary. 

Verify the deployment using the docker ps command in bash.

```sh
docker ps -a
```

Then, you can register some users in mongodb database and test if everything works as expected sending
HTTP requests to the following endpoints, fron http://localhost:3001:

```sh
    "/api": "api docs",
    "/api/signup": "signup",
    "/api/signin": "signin",
    "/api/signout": "signout",
    "/api/users": "get all users",
    "/api/user/:userId": "get/update/delete user",
    "/api/posts": "get all posts",
    "/api/post/new/:userId": "create new post",
    "/api/posts/by/:userId": "get posts by user",
    "/api/post/:postId": "update/delete post"
```


