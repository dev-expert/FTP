const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user:pass@mahi.bsizi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var dbo;
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    dbo = db.db("React");
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

    // console.log("Post is working :" + q);


    dbo.collection("Bank-data").insertOne(q, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    })

});

app.get('/get',function(req,res){
    // var query = { email : "mahendragudipadu@gmail.com" };
    dbo.collection("Bank-data").find({}).toArray( function(err, result) {

        // dbo.collection("Signupform").find.toArray(function(err, result) {

        //       old = result;

        data = result.reverse();
        res.send(data);
        // console.log("Hii");
        

      }); 
    }
    );

    app.listen(5555, () => {
        console.log('server is listening on port 5555');
    });
    