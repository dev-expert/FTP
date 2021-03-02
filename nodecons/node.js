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

app.listen(2030, () => {
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
app.get('/getuserdata', async(req, response) => {
    await dbo.collection('customers').find().toArray((error, result) => {
    if (error) {
    return response.status(500).send(error);
    }
    console.log(result);
    response.send(result);
    });
    })