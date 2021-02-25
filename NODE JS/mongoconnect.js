const express=require('express');
const app=express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shubham_shay:shubham@cluster0.dlgr8.mongodb.net/demodatabase?retryWrites=true&w=majority";

app.get('/', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("demodatabase");
        dbo.collection("demo").find().toArray(function (err, result) {
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