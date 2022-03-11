const express = require('express');
const apiRoutes = require('./src/routes/api');
const database = require('./src/core/database');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('Api works! :D');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;

const swaggerOptions = {
    swaggerDefinition: {
        swagger: '2.0',
        info: {
            title: 'Chat-API',
            description: 'API for a Chat application',
            version: '1.0.0',
            servers: ['http://localhost:'+port],
        }
    },
    apis: ['./src/models/**/*.routes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

database.connect().then(client => {
    app.listen(port, () => {
        console.log('App is listening on port ' + port)
    });
});

