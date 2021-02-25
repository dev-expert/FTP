

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dbajay:singh@cluster0.kibfk.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { name: "rohan" };
    dbo.collection("demo").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });