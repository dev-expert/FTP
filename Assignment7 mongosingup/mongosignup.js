const express = require("express");
const app = express();

const cors = require("cors");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sant:1234@cluster0.cwwxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


app.use(cors());
app.use(express.json());
var dbo;
MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    
    console.log("Database connected");
    dbo = db.db("signup");
    
});



app.listen(8091, function (req, res) {
    console.log("Running");
})


app.post("/register", function (req, res) {
    var q = req.body;
    console.log("Post is working :" + q);


    dbo.collection("users").insertOne(q, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    })

});


app.get("/login", async function (req, res) {
   await dbo.collection("users").find().toArray((err, result) => {
        if (err) throw err;

        console.log(result);

        res.send(result);
        // res.json(result);
    })
})
