const express = require('express');
const app = express();

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Saim:123@democluster.okr1g.mongodb.net/singh?retryWrites=true&w=majority";

app.get('/', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("Details").find().toArray(function (err, result) {
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
app.post(

)