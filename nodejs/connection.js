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
app.listen(4002, () => {

  MongoClient.connect(
    connection_url,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(database_name);
      collection = database.collection("register");
      console.log("Connected to " + database_name + "!");
    }
  );
});



// export data resume
app.post("/exportdata", (request, response) => {
  
  collection.insert(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    console.log("Data Sent");
    response.json(true);
  });
});



// import data resume
app.get("/importdata", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    console.log("Data Received");
    response.send(result);
  });
});


// endpoint for send data signup
app.post("/senddata", (request, response) => {
 
  collection.insert(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
 
    console.log("Data Sent");
    response.json(true);
  });
});

// endpoint for login send data
app.post("/checkdata", (request, response) => {
  var Credentials = request.body;
  collection.findOne(Credentials, function (err, result) {
      if (err) throw err;
      console.log(result);
       response.json(result);

  })
});



