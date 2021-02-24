const express = require('express');
const app = express();

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SageSujata:Sujata1@@testcluster1.nl7lf.mongodb.net/demo?retryWrites=true&w=majority";

app.get('/', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Demo");
        dbo.collection("Demo").find().toArray(function (err, result) {
            if (err) throw err;
            console.log("Running");
            res.send(result);
            db.close();
        });
    });

})
app.post



app.listen(9000, function (req, res) {
    console.log('Running..')
})