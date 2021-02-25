var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user:pass@mahi.bsizi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const express = require('express')
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

function connect(callback){
    MongoClient.connect(url, function (err, db) {

        if (err) throw err;
        
        var dbo = db.db("data");
        console.log("Cloud data is connected ");
        
        callback(dbo,insert);
        
        });
}
function insert(dbo,callback){
    
  
    var myobj = { name: "Mahi2", address: "Appwrk" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    
      callback(dbo,show);
    

    });
  };


function show(dbo){
          dbo.collection("customers").find().toArray(function(err, result) {
            if (err) throw err;
            console.log(result);

        
        })}
        
        

connect(insert);