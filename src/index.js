//main purpose of this file is to booot up the server
const express = require('express');
//body-parser is an npm module used to process data sent in an HTTP request body. It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body. Before the target controller receives an incoming request, these middleware routines handle it.
const bodyparser = require("body-parser");


const {PORT} = require('./config/serverConfig');


const setupAndStartServer = async () => {
    //create express object
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));

    
    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`); //STRING INTERPOLATION
        //console.log(process.env);
    });

}
 
setupAndStartServer();