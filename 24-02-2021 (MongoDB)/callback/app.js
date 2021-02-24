var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Anik:123@cluster0.hbbhk.mongodb.net/Demo?retryWrites=true&w=majority";

function connect(callback){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Demo");
        console.log("Connected");
        callback(dbo, find);
    });   
}

function find(dbo2){        
    dbo2.collection("Demo").find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        //db.close();
    });
}

function insert(dbo1, callback1){
    var myobj = { Name: "Matt", Id: "5", Age: "20" };
    dbo1.collection("Demo").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        callback1(dbo1);
    })
}

var res = connect(insert);