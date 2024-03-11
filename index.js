const express = require('express'); // Importing the express module

const app = express();// Creating an instance of the express application

const connectMongoDb  = require('./connection')

const router = require('./routes/user');// Importing the user router

const  logReqRes  = require('./middlewares')

const PORT = 8080;

// connection 
    connectMongoDb('mongodb://localhost:27017/userDB');
    //mongodb://localhost:27017/

// middleware - Plugin
app.use(express.urlencoded({ extended: false })); // Using the express.urlencoded middleware to parse the request body
app.use(logReqRes("log.txt"));

// Routes
app.use('/user', router); // Using the user router for requests to the '/user' path

app.listen(PORT, () => console.log(`Server is running http://127.0.0.1:${PORT}`)); // Logging a message when the server starts listening 