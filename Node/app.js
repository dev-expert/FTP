// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://merk:man@cluster0.sb2hq.mongodb.net/demo?retryWrites=true&w=majority";

// MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// //var MongoClient = require('mongodb').MongoClient;

// //   Creating collection.....
// var url = "mongodb+srv://merk:man@cluster0.sb2hq.mongodb.net/demo?retryWrites=true&w=majority";

// const insertInCollection = function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj1 = { name: "Company Inc1", address: "Highway 37" };
//     var myobj2 = { name: "Company Inc2", address: "Highway 38" };
//     dbo.collection("customers").insertMany([myobj1,myobj2], function(err, res) {
//       if (err) throw err;
//       console.log("2 document inserted");
//       db.close();
//     });
//   }

// const createCollection = function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("customers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       insertInCollection();
//       db.close();
//     });
// }

// MongoClient.connect(url,{useUnifiedTopology:true}, createCollection);

// //   Inserting array of objects in the collections


  
// //  Deleting the object from the collection...
//   MongoClient.connect(url, {useUnifiedTopology:true}, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myquery = { address: "Highway 37" };
//     dbo.collection("customers").deleteOne(myquery, function(err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//       db.close();
//     });
//   });

// //  Show all the collection datas on the mongodb ..
//   MongoClient.connect(url, {useUnifiedTopology:true},function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
   
//     dbo.collection("customers").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log("Hello World");
//       db.close();
//     });
//   });
  
// //  Showing all the data on the local host..
  


// // app.get('/', function (req, res) {
// //     MongoClient.connect(url, function (err, db) {
// //         if (err) throw err;
// //         var dbo = db.db("mydb");
// //         //dbo.collection("customers").findOne({}, function (err, result)
// //         dbo.collection("customers").find({}).toArray(function(err, result) {
// //             if (err) throw err;
// //             console.log(result.name);
// //             res.send(result)
// //             db.close();
       
// //         });
// //     });

// // })
const express = require('express');
const app = express();
app.get('/',function(req,res)
{
  res.send('Running..')
});
app.listen(5000, function (req, res) {
    console.log("Now Running!!");
});