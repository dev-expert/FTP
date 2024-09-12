const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Amigo:123@democluster.4unbc.mongodb.net/demoDataBase?retryWrites=true&w=majority";

app.listen(8080, function (req, res) {
    console.log('Running Server');
});

// DISPLAYING CONNECTION ESTABLISHMENT
function connect(callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("demoDataBase");
        console.log("Connected");
        callback(dbo, insert);
    });
}


// DISPLAYING DOCUMENTS OF COLLECTION
function display(dbo, callback) {
    dbo.collection("demoCollection").find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        callback(dbo, remove);
    });
}


// INSERTING DOCUMENT IN COLLECTION
function insert(dbo, callback) {
    var myobj = { name: "Shubham_Sharma", id: "2", age: "19" };
    dbo.collection("demoCollection").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 Document Inserted");
        callback(dbo);
    })
}


// DELETING DOCUMENT FROM THE COLLECTION
function remove(dbo) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("demoDataBase");
        /*Delete the first Document with the Name: "Shubham_Sharma"*/
        var myquery = { name: 'Himanshu_Singh' };
        dbo.collection("demoCollection").deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log("1 Document Deleted");
            //db.close();
        });
    });
}


app.get('/callback', function (req, res) {
    connect(display);
    res.send("Heyyyy......");
})


app.get('/', function (req, res) {
    res.send("Working Site");
})