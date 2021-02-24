const express = require('express');
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Amigo:123@democluster.4unbc.mongodb.net/demoDataBase?retryWrites=true&w=majority";

app.get('/mongoDB1', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });
})

// const express = require('express');
// const app = express();
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://Amigo:123@cluster0.4unbc.mongodb.net/DemoData?retryWrites=true&w=majority";

// DISPLAYING COLLECTION
app.get('/mongoDB2', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("demoDataBase");
        //Find all documents in DemoData Collection:
        dbo.collection("demoCollection").find({}).toArray(function (err, result) {
            if (err) throw err;
            //console.log(result);
            res.send(result);
            db.close();
        });
    });
})


// APPENDING OBJECT TO THE COLLECTION
app.get('/mongoDB3', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("demoDataBase");
        var myobj = { id: "4", name: "Rohit_Kumar_Shrivasta", age: "22" };
        dbo.collection("demoCollection").insertOne(myobj, function (err, result) {
            if (err) throw err;
            res.send(result);
            console.log("1 Document Inserted");
            db.close();
        });
    });
})


// DELETEING OBJECT FROM THE COLLECTION
app.get('/mongoDB4', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("demoDataBase");
        /*Delete the first customers with the Name: "Rohit_Kumar_Shrivasta":*/
        var myquery = { name: 'Rohit_Kumar_Shrivasta' };
        dbo.collection("demoCollection").deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log("1 Document Deleted");
            db.close();
        });
    });
})

app.listen(9000, function (req, res) {
    console.log('Running Server');
});