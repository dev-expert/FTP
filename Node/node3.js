/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://him:him@cluster1.nq5zu.mongodb.net/demoData?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
if (err) throw err;
console.log("Database created!");

var dbo = db.db("demoData");
dbo.collection("try").find().toArray(function(err,result)
{
    if (err) throw err;

    console.log(result);
    db.close();
});
});
*/
/*
const express = require('express');
const app = express();

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://him:him@cluster1.nq5zu.mongodb.net/demoData?retryWrites=true&w=majority";

app.get('/', function (req, res) {
MongoClient.connect(url, function (err, db) {
if (err) throw err;
var dbo = db.db("demoData");
dbo.collection("try").find().toArray(function (err, result) {
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
*/
/*
const express = require("express");
const app  = express();
app.use(express.json());
app.post("/",function(req,res){
    //let a = request.body.a;
    //let b = request.body.b;


    //let c = parseInt(a) + parseInt(b);
    //res.send('Result : '+c);
    //console.log('Result : '+c);
    res.send("Post is working :"+ req.body.name);
});

app.listen(3000,function(req,res)
{
    console.log("Working");
});

app.get("/him",function(req,res){
    res.send("get is working");
});

*/