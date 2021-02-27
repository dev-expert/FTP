const express = require('express');
var cors = require('cors');
const app = express();
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Anik:123@cluster0.hbbhk.mongodb.net/Demo?retryWrites=true&w=majority";

app.use(cors());

app.get("/", function(req, res){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Demo");
        dbo.collection("Demo").find().toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
})

app.listen(8082, function(err){ 
    if (err) console.log("Error in server setup")
})