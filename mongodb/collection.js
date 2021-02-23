var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sant:1234@cluster0.cwwxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });