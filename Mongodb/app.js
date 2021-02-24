const express = require('express');
const app = express();

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Anik:123@cluster0.hbbhk.mongodb.net/Demo?retryWrites=true&w=majority";


app.get('/', function (req, res) {
    res.send('Running');
});

app.get('/result', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Demo");
        dbo.collection("Demo").find().toArray(function (err, result) {
            if (err) throw err;
            console.log("Find");
            res.send(result);
            db.close();
        });
    });


})


app.listen(9000, function (req, res) {
    console.log('Localhost Started..')
})