// const epress = require("express");
// const app = epress()
// app.listen(6000,function(req,res)
// {
//     console.log("Running");
// });


// var connect =  app.get("/",function(req,res){
// })
// var insert = app.get("")

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://him:him@cluster1.nq5zu.mongodb.net/demoData?retryWrites=true&w=majority";


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

var obj = { name: "Himanshu Singh" };


function deleteData(dbo) {
    dbo.collection("try").deleteOne(obj, function (err, ob) {
        if (err) throw err;
        console.log(ob.name + " document deleted");
    });
    //callback()
}


connectData(insertData);


//deleteData(showData(insertData(connectData())));
