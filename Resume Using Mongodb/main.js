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



app.listen(2020, () => {
    console.log('server is listening on port 2020');
});



var abc = [];
var result;
app.get('/main',function(req,res){
    var query = { fn : "Mahendra" };

        dbo.collection("customers").find(query).toArray(function(err, result) {

              old = result;
        res.send(result);
        // console.log(result);

      });
    }
    );

