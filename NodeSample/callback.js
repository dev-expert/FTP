var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Amigo:123@democluster.4unbc.mongodb.net/demoDataBase?retryWrites=true&w=majority";
// DISPLAYING CONNECTION ESTABLISHMENT
function connect(callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("demoDataBase");
        console.log("Connected");
        callback(dbo, insert);
    });
}


// DISPLAYING DOCUMENTS OF COLLECTION
function display(dbo, callback) {
    dbo.collection("demoCollection").find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        callback(dbo, remove);
    });
}


// INSERTING DOCUMENT IN COLLECTION
function insert(dbo, callback) {
    var myobj = { name: "Anmol_Jha", id: "5", age: "22" };
    dbo.collection("demoCollection").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 Document Inserted");
        callback(dbo);
    })
}


// DELETING DOCUMENT FROM THE COLLECTION
function remove(dbo) {
    /*Delete the first customers with the Name: "Anmol_Jha":*/
    var myquery = { name: 'Anmol_Jha"' };
    dbo.collection("demoCollection").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 Document Deleted");
        //db.close();
    });
}

var res = connect(display);