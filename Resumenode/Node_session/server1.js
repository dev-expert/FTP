const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://dbajay:singh@cluster0.kibfk.mongodb.net/ajaysinghdb?retryWrites=true&w=majority";
const DATABASE_NAME = "ajaysinghdb";


var app = Express();
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection, collection1;

//connection start
app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection1 = database.collection("Resumedata");
        collection = database.collection("login");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

//export data

app.post("/exportdata", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        console.log("Data Sent");
        response.json(result);
    });
});


// import data
app.get("/importdata", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


// resume store api

app.post("/resumedata", (request, response) => {

    collection1.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        console.log("Data Sent scuss");
        response.json(result);
    });
});


app.get("/resumeshow", (request, response) => {
    collection1.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});