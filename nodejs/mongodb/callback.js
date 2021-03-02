const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://sant:1234@cluster0.cwwxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


function connectData(callback) {
MongoClient.connect(url, function (err, db) {

if (err) throw err;

var dbo = db.db("demoData");
console.log("Mongodb is connected ");

callback(dbo,showData);

});

}

var myobj = { name: "newPerson", address: "Earth" };

function insertData(dbo,callback) {
dbo.collection("try").insertOne(myobj, function (err, res) {
if (err) throw err;
console.log("Inserted");

callback(dbo,deleteData);
});
}

function showData(dbo, callback) {
dbo.collection("try").find().toArray(function (err, result) {
if (err) throw err;
console.log(result);
});
callback(dbo);
}

var obj = { name: "newPerson" };


function deleteData(dbo) {
dbo.collection("try").deleteOne(obj, function (err, ob) {
if (err) throw err;
console.log(obj.name + " document deleted");
});
//callback()
}


connectData(insertData);


//deleteData(showData(insertData(connectData())));