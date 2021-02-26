const express = require('express')
const app = express()


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://new-user:user@cluster1.sioak.mongodb.net/madhav.madhav1?retryWrites=true&w=majority";

// TO INSERT THE DATA

function connect(){

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    console.log("data connected ")
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
  });
  var data = JSON.parse(localStorage.getItem(obj));
  res.send(data);
}


connect(localStorage.getItem(obj));