const express = require('express');
const apiRoutes = require('./src/routes/api');
const database = require('./src/core/database');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const socketIo = require("socket.io");
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Api works! :D');
});

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

let server; 

database.connect().then(client => {
    server = app.listen(port, () => {
        console.log('App is listening on port ' + port)
    });

    const io = socketIo(server, {
        cors: {
            origin: 'http://localhost:4200',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
        }
    });
    
    io.on('connection', socket => {
        console.log('Alguien se conectó!')
        
        socket.on('newMessage', data => {
            console.log('Hay nuevo mensaje', data);

            socket.broadcast.emit('recieveMessage', data);
        });
    });

});
