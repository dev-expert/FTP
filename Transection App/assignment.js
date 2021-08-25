const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://Amigo:123@democluster.4unbc.mongodb.net/demoDataBase?retryWrites=true&w=majority";
const DATABASE_NAME = "demoDataBase";
const COLLECTION_NAME = "transectionApp";


var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var database, collection1;

//CONNECTION ESTABLISHMENT
MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection1 = database.collection(COLLECTION_NAME);
    console.log("Connected to `" + DATABASE_NAME + "`!");
    console.log("Connected to `" + COLLECTION_NAME + "`!");
});

// DATA EXPORT
app.post("/addTransection", (request, response) => {
    collection1.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        console.log("Data Sent");
        response.json(true);
    });
});
app.listen(1000);

// DATA IMPORT
app.get("/getL", (request, response) => {
    console.log("getL")
    collection1.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});