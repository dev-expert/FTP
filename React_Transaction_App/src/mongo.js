const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Amigo:123@democluster.4unbc.mongodb.net/demoDataBase?retryWrites=true&w=majority";
var dbo;
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    dbo = db.db("demoDataBase");
    console.log("Connected")
});

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

app.post("/post", function (req, res) {
    console.log("Hello")
    var q = req.body;
    dbo.collection("ReactTransactionApp").insertOne(q, function (err, res) {
        if (err) throw err;
        console.log("1 Transaction Inserted");
    })

});

app.get('/get',function(req,res){
    dbo.collection("ReactTransactionApp").find({}).toArray( function(err, result) {
        res.send(result);
        // console.log(result);
        console.log("Exported Transactions");
      }); 
    }
);

app.listen(5555, () => {
    console.log('server is listening on port 5555');
});