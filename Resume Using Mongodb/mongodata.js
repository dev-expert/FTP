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
    dbo = db.db("mydb");
    console.log("data connected ")
});

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});


app.listen(2020, () => {
    console.log('server is listening on port 2020');
});


// app.post("/resume", function (req, res) {
//     console.log("Hello")
//     var q = req.body;

//     console.log("Post is working :" + q);


//     dbo.collection("customers").insertOne(q, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//     })

// });
var abc = [];
var result;
app.get('/resume',function(req,res){
   
      var query = { fn : "Mahendra" };
        dbo.collection("customers").find(query).toArray(function(err, result) {

        if (err) throw err;
        console.log("runningg.......")
         abc = result;
         module.exports = abc;
        res.send(result);
        console.log(result);

      });
    }
    );

    // module.exports = "Mahi";
    // module.exports = abc;
    