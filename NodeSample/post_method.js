var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Amigo:123@democluster.4unbc.mongodb.net/demoDataBase?retryWrites=true&w=majority";
const express = require("express");
const app = express();
app.use(express.json());
app.post("/", function (req, res) {
    res.send("Post is working :" + req.body.name  + "id:" + req.body.id + " age: " + req.body.age);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("demoDataBase");
        var myobj = { name: req.body.name,id:req.body.id, age: req.body.age };
        dbo.collection("demoCollection").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 Document Inserted");
            //   db.close();
        });
    });
})

app.listen(3000, function (req, res) {
    console.log("Working Post Method");
});

