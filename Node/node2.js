

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://him:him@cluster1.nq5zu.mongodb.net/demoData?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
if (err) throw err;
console.log("Database created!");
var myobj = { name: "qwe", address: "abc" };
var dbo = db.db("demoData");
dbo.collection("try").insertOne(myobj,function(err,res)
{
    if (err) throw err;
    console.log("1 document inserted");
})
db.close();
});