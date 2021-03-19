const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const connection_url =
  "mongodb+srv://Keshav:123@cluster1.uhzbr.mongodb.net/?retryWrites=true&w=majority";
const database_name = "keshav";

const app = Express();
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;
//connection start
app.listen(4000, () => {
  MongoClient.connect(
    connection_url,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(database_name);
      collection = database.collection("sample");
      console.log("Connected to " + database_name + "!");
    }
  );
});

// export data
app.post("/exportdata", (request, response) => {
  collection.insert(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    console.log("Data Sent");
    response.json(true);
  });
});

// import data
app.get("/importdata", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    console.log("Data Received");
    response.send(result);
  });
});

// const

// app.get('/',function(req,res){
//     res.send('welocme to express');
// })

// app.get('/kkk',function(req,res){
//     res.send('hello keshav');
// })
// app.get('/www',function(req,res){
//     res.send('hello world');
// })
// app.listen(6060);
// console.log("connec");
