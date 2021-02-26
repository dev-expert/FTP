const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://new-user:user@cluster1.sioak.mongodb.net/madhav.madhav1?retryWrites=true&w=majority";
var dbo;
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    dbo = db.db("mydb");
    console.log("data connected ")
});

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get('/:name', (req, res) => {
    let name = req.params.name;

    res.json({
        message: `Hello ${name}`
    });
});

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});


app.post("/resume", function (req, res) {
    var q = req.body;
    console.log("Post is working :" + q);


    dbo.collection("customers").insertOne(q, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    })

});