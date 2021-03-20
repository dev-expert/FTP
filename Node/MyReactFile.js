const express = require("express");
var BodyParser = require('body-parser')
const app = express();
const cors = require("cors");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://him:him@cluster1.nq5zu.mongodb.net/demoData?retryWrites=true&w=majority";

var dbo;


MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    //var myobj = { name: "qwe", address: "abc" };
    console.log("Database connected");
    dbo = db.db("demoData");
});

app.use(cors());
app.use(express.json());
app.use(BodyParser.json());

app.listen(8080, function (req, res) {
    console.log("Running");
})

app.get("/", function (req, res) {
    res.json({
        message: 'Helloredtfgu World'
    });
})

app.post("/getD",function(req,res){
    var q = req.body;
    console.log("q = ", req.body);
    dbo.collection("Tran").insertOne(q,function(err,re){
        if(err) throw err;
        console.log("Data inserted :)");
        res.json(re);
    })
})

app.get("/allT",function (req,res)
{
    dbo.collection("Tran").find().toArray(function (err,result){
        if(err) throw err;
        console.log("Data Send");
        res.json(result);
    })
})


