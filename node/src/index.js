const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJsDoc = require('swagger-jsdoc')

const { SERVER_PORT } = process.env

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node API Example",
            version: "1.0",
            description: "Rocketseat Node API Example"
        }
    }
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require('./app/controllers/index')(app);

app.listen(SERVER_PORT);
console.log('Server listening at port:', SERVER_PORT)
