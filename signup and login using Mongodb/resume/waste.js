const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());
let a = [];

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user:pass@mahi.bsizi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var dbo;
var query = { fn : "Mahendra" };
const fs = require('fs');

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    dbo = db.db("mydb");
    // console.log("data connected ")
    
    dbo.collection("customers").find(query).toArray(function(err, result) {

        if (err) throw err;
        console.log("runningg.......")
        // res.send(result);
        // console.log(result);
      let  obj= result;
      
var data = JSON.stringify(obj);

      // module.exports = a;
      // console.log(result)
      // console.log(obj)
      fs.writeFile("./data.txt", data, (err) => { 
        if (err) 
          console.log(err); 
        else { 
          console.log("File written successfully\n"); 
          console.log("The written has the following contents:"); 
          console.log(fs.readFileSync("data.txt", "utf8")); 
        } 

      });

});
})



// app.listen(2020, () => {
//     console.log('server is listening on port 2020');
// });


// app.post("/resume", function (req, res) {
//     console.log("Hello")
//     var q = req.body;

//     console.log("Post is working :" + q);


//     dbo.collection("customers").insertOne(q, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//     })

// });
// var abc = [];
// var result;


//      var query = { fn : "Mahendra" };
//     dbo.collection("customers").find(query).toArray(function(err, result) {

//         if (err) throw err;
//         console.log("runningg.......")
//         res.send(result);
//         console.log("hii");

//       });

//       console.log("hii");

