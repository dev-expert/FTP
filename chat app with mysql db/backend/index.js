const express = require("express");
const app = express();

var mysql = require("mysql");
var bodyParser = require("body-parser");

const con = mysql.createConnection({
  host: "localhost",
  port: "3306", // Your connection adress (localhost).
  user: "root", // Your database's username.
  password: "", // Your database's password.
  database: "chatapp", // Your database's name.
});

app.get("/users", function (request, response) {
  con.query("select * from name", (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.send(rows);
    }
  });
});
app.listen(3001, () => {
  console.log("server started at : 3001");
});
con.connect(function (error) {
  if (error) console.log(error);
  else console.log("connected");
});
