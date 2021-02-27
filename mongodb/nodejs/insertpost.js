
const express = require("express");
const app  = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sant:1234@cluster0.cwwxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(express.json());

app.post("/",function(req,res){
 
    res.send("Post is working :"+ req.body.name);
    console.log("Working.");

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = { name: req.body.name , address: "Highway 37" };
        dbo.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });

});

app.listen(5000,function(req,res)
{
    console.log("Working");
});