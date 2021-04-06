const { json } = require("express");
const express = require("express");
const app = express();
app.use(express.json());
var mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  port: "3306", // Your connection adress (localhost).
  user: "root", // Your database's username.
  password: "", // Your database's password.
  database: "chatapp", // Your database's name.
});

//for fetching the values from the database
app.get("/users", function (request, response) {
  con.query("select * from users", (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.send(rows);
    }
  });
});

app.post("/login", function (request, response) {
  var post = request.body;
  var email = post.email;
  var pass = post.pass;

  con.query(
    `SELECT emailId,passcode FROM users WHERE emailId='${email}' AND passcode='${pass}'`,
    function (error, result, field) {
      if (error) {
        response.send(error); //No error
      } else if (result.length > 0) {
        console.log(result);
        response.json({ saved: true }); //displays '[]'
      } else {
        response.json({ saved: false });
        //It is never execute
      }
    }
  );
});

app.post("/register", function (request, response) {
  let sql = "INSERT INTO users SET ?";
  let post = {
    emailId: request.body.email,
    passcode: request.body.pass,
  };
  con.query(sql, post, function (err, result) {
    if (err) throw err;
    response.send("1 record inserted");
  });
});

app.listen(3001, () => {
  console.log("server started at : 3001");
});
con.connect(function (error) {
  if (error) console.log(error);
  else console.log("connected");
});
