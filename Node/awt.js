//var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://merk:man@cluster0.sb2hq.mongodb.net/demo?retryWrites=true&w=majority";

function connect() {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, res) {

        console.log("Database created!");
        //callback(show);
        //db.close();


    });
}
// function secondFn(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             a = 5;
//             console.log("second",a); //5
//             resolve();
//           }, 2000);
//     })

// }
//var MongoClient = require('mongodb').MongoClient;

// Creating collection.....
//var url = "mongodb+srv://merk:man@cluster0.sb2hq.mongodb.net/demo?retryWrites=true&w=majority";

// MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db) {
// if (err) throw err;
// var dbo = db.db("mydb");
// dbo.createCollection("customers", function(err, res) {
// if (err) throw err;
// console.log("Collection created!");

// });
// });

// Inserting array of objects in the collections
async function insert() {
    await connect();
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj1 = { name: "Company Inc1", address: "Highway 37" };
        var myobj2 = { name: "Company Inc2", address: "Highway 38" };
        dbo.collection("customers").insertMany([myobj1, myobj2], function (err, res) {
            
            if (err) throw err;

            console.log("2 document inserted");
            //callback(rem);
            //db.close();
        });
    })
};


// Deleting the object from the collection...
async function rem() {
    await insert();
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myquery = { address: "Highway 37" };
        dbo.collection("customers").deleteOne(myquery,  function (err, obj) {
            if (err) throw err;
            //await show();
            console.log("1 document deleted");

            //db.close();
        });
    })
};

// Show all the collection datas on the mongodb ..
async function show() {
    await rem();
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        dbo.collection("customers").find({}).toArray( function (err, result) {
            if (err) throw err;
    
            console.log("Hello World");

            //callback();
            //db.close();
        });
    })
};

show();
// Showing all the data on the local host..
// const express = require('express');
// const app = express();


// app.get('/', function (req, res) {
// MongoClient.connect(url, function (err, db) {
// if (err) throw err;
// var dbo = db.db("mydb");
// //dbo.collection("customers").findOne({}, function (err, result)
// dbo.collection("customers").find({}).toArray(function(err, result) {
// if (err) throw err;
// console.log(result.name);
// res.send(result)
// //db.close();

// });
// });

// })
// app.listen(9000, function (req, res) {
// console.log('Running..')
// })

