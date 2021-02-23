var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user:pass@mahi.bsizi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const express = require('express')
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: false }));

app.get('/', (req, res) => res.send('Hello World!'))

//Inserting Data in The Database


// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = { name: "Mahendra", address: "Apwrk" };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });


//Finding and Printing The data


app.get('/mongo',function(req,res){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("data").find().toArray(function(err, result) {
    if (err) throw err;
    console.log("runningg.......")
    res.send(result);
    db.close();
  });
})}
);
app.post('/mongo',function(res,req){
  console.log('POST request to the homepage');
  res.send("Hello");
  db.close();
})



app.listen(port, () => console.log(`Example app listening on port port!`))




