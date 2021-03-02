const express = require('express')
const app = express()


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://new-user:user@cluster1.sioak.mongodb.net/madhav.madhav1?retryWrites=true&w=majority";

// TO INSERT THE DATA
function connect(callback){


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    console.log("data connected ")
    callback(dbo,Show);


    
  });
}

function insert(dbo,callb){
    
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      // res.send(myobj);
      callback(dbo,post);
    });

}
  
  


// TO FIND THE DATA 
function Show(dbo,callback){
    console.log("in show fn");
// app.get('/', function (req, res) {
    // MongoClient.connect(url, function (err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
        dbo.collection("customers").find().toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            callback(dbo,deleteone)
            // res.send(result);
            // db.close();
        });
    // });

    
}

// TO POST THE DATA
function post(dbo,callback){


// app.use(express.json());
// app.post("/",function(req,res){
 
    // res.send("Post is working :"+ req.body.name);
    console.log("Working.");
    // MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
        /*var myobj = { name: req.body.name, address: "Highway 37" };
        dbo.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          */
          callback(dbo);
        //   db.close();
        // });
    //   });

}

// TO DELETE THE DATA
function deleteone(dbo){

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
  var myquery = { name :"Company Inc" };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    // db.close();
  });

}

app.listen(3030,function(req,res)
{
    console.log("Working");
});

connect(insert);


// app.post('/',(res,req)=>{

// })




// })



