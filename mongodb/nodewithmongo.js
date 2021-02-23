const express=require('express');
const app=express(); 

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sant:1234@cluster0.cwwxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get('/', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("customers").find().toArray(function (err, result) {
            if (err) throw err;
            console.log("Running");
            res.send(result);
            db.close();
        });
    });
})

app.listen(9000, function (req, res) {
    console.log('Running..')
})