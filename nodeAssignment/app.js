


const { response } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/user");

// const path = require("path");
const cors = require("cors");

app.use(express.json()); 
app.use(express.urlencoded());
 

app.use(cors());
mongoose.connect("mongodb://localhost:27017/Ajay_db", { useNewUrlParser: true, useUnifiedTopology: true, }).then(result => {
    console.log("database connected successfully");
}).catch((err) => {
    console.log("failed", err);
})


app.use(router);

  









 




app.listen(8080);


// var url = "mongodb+srv://dbajay:singh@cluster0.kibfk.mongodb.net/demodatabase?retryWrites=true&w=majority";
// var dbo;

// MongoClient.connect(url, {useNewUrlParser:true, useUnifiedTopology:true}, function (err, db) {
//   if (err) throw err;
//   dbo = db.db("demodatabase");
//   var myobj = { name: "Company Inc", address: "Highway 37", name: "rohan", address: "jaipur" };
//   dbo.collection("data").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("1 document inserted")});
//   console.log("data connected");
//   });


// app.post("/dev", (req, res) => {
// const store = {
//   name: req.body.name,
//   address: req.body.address,
//   name1: req.body.name1,
//   address1: req.body.address1,
 
// }
//   dbo.collection("data").insertOne(store,(err,data)=>{
//     if(err) throw err;
//     console.log("document inserted");
//     res.send(data);
    
    
//   })

// })
// app.get("/",(req,res)=>{
//   dbo.collection("data").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     res.send(result);
    
//   });
// });
  







// app.listen(8080);