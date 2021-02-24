const express = require('express');
const app = express();

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Saim:123@democluster.okr1g.mongodb.net/mydb?retryWrites=true&w=majority";


let x = function (callback) {

MongoClient.connect(url, function (err, db) {
if (err) throw err;
var dbo = db.db("mydb");
var myobj = { name: "Saim", address: "ZILA BIHAR" };
dbo.collection("Details").insertOne(myobj, function (err, res) {
if (err) throw err;
console.log("1 document inserted");
callback(dbo, z)
// db.close();
});
});

}

let y = function (dbo, callback) {

// app.get('/', (req, res) => {


MongoClient.connect(url, function (err, db) {
if (err) throw err;

var dbo = db.db("mydb");
dbo.collection("Details").find().toArray(function (err, result) {
if (err) throw err;
console.log("Console Running");
// res.send(result);
console.log(result);
// db.close();
callback(dbo);
});

});

}


let z = function (dbo) {

MongoClient.connect(url, function (err, db) {
if (err) throw err;
var dbo = db.db("mydb");
dbo.collection("Details").drop(function (err, delOK) {
if (err) throw err;
if (delOK) console.log("Collection deleted");
db.close();

});
});

}

x(y);
// function1(() => {
// function2(() => {
// function3();
// });
// });



// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));