const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://Amigo:123@democluster.4unbc.mongodb.net/demoDataBase?retryWrites=true&w=majority";
const DATABASE_NAME = "demoDataBase";


var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var database, collection1, collection2;

//CONNECTION START FOR BOTH SIGNIN SIGN UP AND RESUME
app.listen(1000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection1 = database.collection("demoResume");
        console.log("Connected to `" + DATABASE_NAME + "`!");

        collection2 = database.collection("demoSignINSignUP");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

// DATA EXPORT FOR SIGN IN SIGN UP
app.post("/regis", (request, response) => {
    collection2.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        console.log("Data Sent");
        response.json(true);
    });
});


// DATA IMPORT
// app.get("/getlist", (request, response) => {
// collection.find({}).toArray((error, result) => {
// if(error) {
// return response.status(500).send(error);
// }
// response.send(result);
// });
// });

//  DATA IMPORT FOR SIGN IN/SIGN UP
app.get("/signin", (request, response) => {
    collection2.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


// DATA EXPORT FOR RESUME
app.post("/register", (request, response) => {
    collection1.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        console.log("Data Sent");
        response.json(true);
    });
});


// DATA IMPORT FOR RESUME
app.get("/getresume", (request, response) => {
    collection1.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});