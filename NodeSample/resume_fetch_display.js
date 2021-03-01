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
var database, collection;

//CONNECTION START
app.listen(1000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("demoResume");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

// DATA EXPORT
app.post("/register", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        console.log("Data Sent");
        response.json(true);
    });
});

// DATA IMPORT
app.get("/getresume", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});