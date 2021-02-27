const express = require("express");
const app = express();

const cors = require("cors");

var MongoClient = require('mongodb').MongoClient;
const { response } = require("express");
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

app.listen(8090, function (req, res) {
    console.log("Running");
})

app.get("/", function (req, res) {
    res.json({
        message: 'Helloredtfgu World'
    });
})

app.post("/signup", function (req, res) {
    var q = req.body;
    console.log("Post is working :" + q);


    dbo.collection("user_data").insertOne(q, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    })

    res.send(q);
});



app.post("/login", (req, response) => {

    var q = req.body;
    console.log(q);
    //.toArray(
    dbo.collection("user_data").findOne(q, function (err, result) {
        if (err) throw err;

        console.log(result);

        //res.send

        //res.end("my result");
        response.json(result);
    })
})


app.get("/admin", function (req, res) {

    dbo.collection("user_data").find().toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
        res.json(result);
    })

})

