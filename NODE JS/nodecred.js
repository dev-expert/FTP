const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://shubham_shay:shubham@cluster0.dlgr8.mongodb.net/shubham?retryWrites=true&w=majority";

// app.get("/", function (req, res) {
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   client.connect((err) => {
//     const collection = client.db("shubham").collection("cars");
//     console.log("working..");
//     client.close();
//   });
// });

// MongoClient.connect(uri, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("shubham");
//     dbo.createCollection("bike", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
// });

// MongoClient.connect(uri, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("shubham");
//     var myobj = { name: "r15", address: "Highway 37" };
//     dbo.collection("bikes").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });



// });


app.get("/", function (req, res) {

  startwork();

});

function startwork(){
MongoClient.connect(uri, function (err, db) {
  if (err) throw err;
  var dbo = db.db("shubham");

  function main(callback) {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    client.connect((err) => {
      const collection = client.db("shubham").collection("cars");
      console.log("working..");
      callback(insertData);
      //client.close();
    });
  }

  const createData = function (callback) {
    dbo.createCollection("shay12", function (err, res) {
      if (err) throw err;
      console.log(" 1 Collection created!");
      callback(showData);
      //db.close();
    });
  };

  const insertData = function (callback) {
    var myobj = [
      { name: "John", address: "Highway 71" },
      { name: "Peter", address: "Lowstreet 4" },
      { name: "Amy", address: "Apple st 652" },
      { name: "Hannah", address: "Mountain 21" },
      { name: "Michael", address: "Valley 345" },
      { name: "Sandy", address: "Ocean blvd 2" },
      { name: "Betty", address: "Green Grass 1" },
      { name: "Richard", address: "Sky st 331" },
      { name: "Susan", address: "One way 98" },
      { name: "Vicky", address: "Yellow Garden 2" },
      { name: "Ben", address: "Park Lane 38" },
      { name: "William", address: "Central st 954" },
      { name: "Chuck", address: "Main Road 989" },
      { name: "Viola", address: "Sideway 1633" },
    ];
    dbo.collection("shay12").insertMany(myobj, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      callback(deleteData);
      //db.close();
    });
  };

  const showData = function (callback) {
    dbo.collection("shay12").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log("displaying data");
        console.log(result);
        callback();
        //db.close();
      });
  };

  const deleteData = function () {
    dbo.collection("shay12").drop(function (err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      db.close();
    });
  };

  main(createData);
});

}
app.listen(8080, function (req, res) {
  console.log("Running..");
});