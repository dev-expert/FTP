var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user:pass@mahi.bsizi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const express = require('express')
const app = express();
const port = 3000;
// app.use(express.urlencoded({extended: false }));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))



//Inserting Data in The Database

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = { name: "Ofiice", address: "Bestech" };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });


//Finding and Printing The data


// app.get('/mongo',function(req,res){
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find().toArray(function(err, result) {
//     if (err) throw err;
//     console.log("runningg.......")
//     res.send(result);
//     db.close();
//   });
// })}
// );


//Posting Data  -Error
app.post("/",function(req,res){
 
    res.send("Post is working :"+ req.body.name);
    console.log("Working.");
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myobj = { name: req.body.name, address: req.body.address };
      dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });

});



// Finding a single elememt from the Database

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var query = { address: "Mohali" };
//   dbo.collection("customers").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


//Deleting a Element from the Database;

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myquery = { address: 'Bestech' };
//   dbo.collection("customers").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });

//Updating the data

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myquery = { address: "Canyon 123" };
//   var newvalues = { $set: {name: "Office", address: "Bestech" } };
//   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// }); 

//Deleting a Entire Database

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("data").drop(function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// }); 




app.listen(port, () => console.log("This is Running.."))




