const express = require("express");
const app = express();

const cors = require("cors");

var MongoClient = require("mongodb").MongoClient;

var url = "mongodb+srv://him:him@cluster1.nq5zu.mongodb.net/demoData?retryWrites=true&w=majority";

var dbo;

MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    console.log("Database connected");
    dbo = db.db("demoData");
});

app.use(cors());
app.use(express.json());

app.listen(9090, function (req, res) {
    console.log("Running");
})

app.get("/", function (req, res) {
    res.json({
        message: 'Helloredtfgu World'
    });
})

app.post("/form", function (req, res) {
    var q = req.body;
    console.log("Post is working :" + q);


    dbo.collection("cv").insertOne(q, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    })

    res.send(q);
});


app.get("/cv", function (req, res) {

    dbo.collection("cv").find().toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
        res.json(result);
    })

})
/*
app.post("/skill", function (req, res) {
    var q = req.body;
    console.log("Post is working :" + q);


    dbo.collection("skill").insertOne(q, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    })

    res.send(q);
});

app.get("/skills", function (req, res) {

    dbo.collection("skill").find().toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
        res.json(result);
    })

})
*/


