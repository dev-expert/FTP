
var mongo= require('mongodb')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://viswanath:Viswanath@1@jaxx.yefjp.mongodb.net/pep?retryWrites=true&w=majority";

function connect(callback)
{
MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db){
if (err) throw err;
console.log("Database created!");
callback(show);
//db.close();
});
}



// Inserting array of objects in the collections
function insert(callback)
{
MongoClient.connect(url, {useUnifiedTopology:true},function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");
var myobj1 = { name: "Company Inc1", address: "Highway 37" };
var myobj2 = { name: "Company Inc2", address: "Highway 38" };
dbo.collection("customers").insertMany([myobj1,myobj2], function(err, res) {
if (err) throw err;
console.log("2 document inserted");
callback(rem);
//db.close();
});
})};


// Deleting the object from the collection...
function rem()
{

MongoClient.connect(url, {useUnifiedTopology:true},function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");
var myquery = { address: "Highway 37" };
dbo.collection("customers").deleteOne(myquery, function(err, obj) {
if (err) throw err;
console.log("1 document deleted");
//db.close();
});
})};

// Show all the collection datas on the mongodb ..
function show(callback)
{
MongoClient.connect(url, {useUnifiedTopology:true},function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");

dbo.collection("customers").find({}).toArray(function(err, result) {
if (err) throw err;
console.log("Hello World");
callback();
//db.close();
});
})};


connect(insert);