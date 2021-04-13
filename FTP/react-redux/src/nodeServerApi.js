const express = require("express");
var BodyParser = require('body-parser')
const app = express();
const cors = require("cors");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Simar:January@2021@cluster0.diinx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/registered_users";

var dbo;
//console.log("hello");

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database connected");
    dbo = db.db("TODO-LIST");
});

app.use(cors());
app.use(express.json());
app.use(BodyParser.json());

app.listen(3000, function (req, res) {
    console.log("Running");
})



app.get("/List", function (req, res) {
    dbo.collection("LIST").find({}).toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
       
    })
    })




app.post("/AddToList", function (req, res) {
    var q = req.body;
   
    dbo.collection("LIST").insertOne(q, function (re, err) {
   
        res.json({ saved: true });
        if (err) throw err;
    })
})


app.get("/DeleteList/:id", async function (req, res) {
   const item = {item:req.params.id}
    dbo.collection("LIST").deleteOne(item, function (re, err) {
   
        res.json({ saved: true });
        if (err) throw err;
    })
//    dbo.collection("LIST").delete({})
//     // dbo.collection("LIST").delete({_id:q}, function (re, err) {
//     //     console.log("Data deleted:)");
//     //     res.json({ saved: true });
//     //     if (err) throw err;
 })
 
app.post("/DeleteList", async function (req, res) {
    const item =req.body
    console.log(item);
     dbo.collection("LIST").deleteMany({item:{$in:item}}, function (re, err) {
    
         res.json({ saved: true });
         if (err) throw err;
     })
 
    })
