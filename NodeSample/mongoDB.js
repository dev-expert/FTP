const express = require('express');
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "";

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
// var url = "";

// DISPLAYING COLLECTION
app.get('/mongoDB2', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("DemoDataBase");
        //Find all documents in DemoData Collection:
        dbo.collection("DemoData").find({}).toArray(function (err, result) {
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
        var dbo = db.db("DemoDataBase");
        var myobj = { id: "4", name: "Rohit_Kumar_Shrivasta", age: "22" };
        dbo.collection("DemoData").insertOne(myobj, function (err, result) {
            if (err) throw err;
            res.send(result);
            console.log("1 Document Inserted");
            db.close();
        });
    });
})

app.listen(8082, function (req, res) {
    console.log('Running Server')
});
