// // Create or make connection
// //MongoClient.connect(url, function (err, db) {
//     // if (err) throw err;
//     // dbo.createCollection("customers", function(err, res) {
//     //   if (err) throw err;
//     //   console.log("Collection created!");
//     // });
// //});
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://dbajay:singh@cluster0.kibfk.mongodb.net/?retryWrites=true&w=majority";


// function created(callback) {
//     MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("customers");
//         console.log("Database created!");
//         callback(dbo, deleted);
//     });
// }

// // Collection created

// function inserted(dbo, callback) {

//     var myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("customers").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         callback(dbo, read);
//     });
// }

// function read(dbo) {
//     dbo.collection("customers").findOne({}, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// }

// function deleted(dbo, callback) {
//     var myquery = { address: 'Mountain 21' };
//     dbo.collection("customers").deleteOne(myquery, function (err, obj) {
//         if (err) throw err;
//         console.log("1 document deleted");
//         callback(dbo);
//     });
// }

// created(inserted);









// Create or make connection
//MongoClient.connect(url, function (err, db) {
    // if (err) throw err;
    // dbo.createCollection("customers", function(err, res) {
    //   if (err) throw err;
    //   console.log("Collection created!");
    // });
//});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dbajay:singh@cluster0.kibfk.mongodb.net/?retryWrites=true&w=majority";


async function created() {
   
    MongoClient.connect(url, { useUnifiedTopology: true }, async function (err, db) {
        if (err) throw err;
        var dbo = db.db("customers");
        console.log("Database created!");
        await inserted(dbo);
        
    });
}

// Collection created

async function inserted(dbo) {

    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, async function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        await read(dbo);
        
        
    });
}

async function read(dbo) {
    dbo.collection("customers").findOne({}, async function (err, result) {
        if (err) throw err;
        console.log(result);
        await deleted(dbo);
        
    });
}

async function deleted(dbo) {
    var myquery = { address: 'Mountain 21' };
    dbo.collection("customers").deleteOne(myquery,async function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        
    });
}

created();