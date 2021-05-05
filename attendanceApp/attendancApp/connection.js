const express = require("express");
const app= express();

app.use(express.json());

app.post("/registeruser", function(req, res) {

    console.log("request",req.body);
    res.send("Registered Successfully");
    // var sql = "INSERT INTO customers (name, address) VALUES (`${req.body.email}`, 'Highway 37')";
    let sql = 'INSERT INTO usercheckindetails SET ?' 
    let post = {         
        id: "1",
        email: req.body.email,
        checkInTime: req.body.checkInTime,
        lat: req.body.lat,
        lng: req.body.lng
    }     
    con.query(sql, post, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");

    });
});

const PORT = 3000;

app.listen(PORT, function() {
    console.log("Server is ready at " + PORT);
})

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "attendanceapp"
  });