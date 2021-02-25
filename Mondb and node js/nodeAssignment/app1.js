

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dbajay:singh@cluster0.kibfk.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, {useUnifiedTopology:true},function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
  
});
