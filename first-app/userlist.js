const express = require('express')
const app = express()


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://new-user:user@cluster1.sioak.mongodb.net/madhav.madhav1?retryWrites=true&w=majority";

// TO INSERT THE DATA

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    console.log("data connected ")
    db.close();

  });
  app.get("/",function(req,res){
    res.json({
        message: 'Hello World'
    });
})
app.listen(9000, function (req, res) {
console.log('Running..')

})