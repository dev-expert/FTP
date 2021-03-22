const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://shubham_shay:shubham@cluster0.dlgr8.mongodb.net/demodatabase?retryWrites=true&w=majority";
const DATABASE_NAME = "shubham";


var app = Express();
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

//connection start
app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("personnel");
        collection_resume = database.collection("resume");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

// export data 
app.post("/exportdata", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        console.log("Data Sent");
        response.json(result);
    });
});

app.post("/checkdata", (request, response) => {
    var Credentials = request.body;
    collection.findOne(Credentials, function (err, result) {
        if (err) throw err;
        console.log(result);
        response.json(result);
    })
});


app.post("/resumedata", (request, response) => {
    collection_resume.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        console.log("Data Sent");
        response.json(result);
    });
});


// import data
app.get("/importdata", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/getresumedata", (request, response) => {
    collection_resume.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});