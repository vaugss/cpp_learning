# rocketseat nodejs

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Rocketseat nodejs material found on Youtube at this [Link](https://www.youtube.com/watch?v=BN_8bCfVp88&list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp&index=1&ab_channel=Rocketseat).

It's a simple API to register and authenticate users.

## Features

- Account creation using unique e-mail address
- Token authentication using JWT
- Documentation uses Swagger, can be accessed through the endpoint /api-docs 
- HTTP requests collection ready to import in VS Code's Thunder-Client extension
- Docker containerization of mongodb and mongodb-express

## Tech

Technologies used:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [docker] - containerization tool
- [mongodb] - non-relational database
- [yarn] - node package manager

## Installation

rocketseat nodejs project requires [Node JS](https://nodejs.org/en/) to run.

Install the dependencies and devDependencies.

```sh
cd node
yarn install
```
## Docker

Run the docker containers using docker compose command (I'm using the version 2.0.1).

```sh
cd node
docker compose up -d
```

## Running

After installing the dependencies and setting up the container, open the folder in a bash terminal
and start the application:

```sh
cd node
yarn run dev
```

The API will be available at:

```sh
http://localhost:3001/api-docs
```
