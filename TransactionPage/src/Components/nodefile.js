const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
// To Connect the Mongodb to NodeJS
var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://new-user:user@cluster1.sioak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.listen(7000, () => {
  console.log("server is listening on port 7000");
});

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  dbo = db.db("react");
});
// To send the data to MongoDb
app.post("/post", function (req, response) {
  console.log("Hello");

  dbo.collection("Bank-data").insertOne(req.body, (err, res) => {
    console.log("mongo db entered");
    if (err) throw err;
    console.log("1 document inserted");
    response.json(true);
  });
});
// To Get the data from MongoDb
app.get("/getuserdata", (req, response) => {
    console.log("api called");
    dbo
    .collection("Bank-data")
    .find()
      .toArray((error, result) => {
        response.send(result)

        if (error) {
          return response.status(500).send(error);
        }
        
      });
  });