const express = require("express");
const app= express();

app.use(express.json());

app.post("/registeruser", function(req, res) {

    console.log("request",req.body);
    res.send("Registered Successfully");
    // var sql = "INSERT INTO customers (name, address) VALUES (`${req.body.email}`, 'Highway 37')";
    let sql = 'INSERT INTO usercheckindetails SET ?' 
    let post = {         
        email: req.body.email,
        checkInDate: req.body.checkInDate,
        checkInTime: req.body.checkInTime,
        checkindateandtime: req.body.checkindateandtime,
        lat: req.body.lat,
        lng: req.body.lng
    }     
    con.query(sql, post, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");

    });
});

app.post("/checkouttime", function(req, res) {
    console.log("request", req.body.description);
    let sql = "UPDATE usercheckindetails SET checkOutTime = '"+req.body.checkOutTime+"', checkOutDate = '"+req.body.checkOutDate+"', checkoutdateandtime = '"+req.body.checkoutdateandtime+"', description = '"+req.body.description+"'  WHERE email = '"+req.body.email+"' AND checkInDate = '"+req.body.checkOutDate+"'"

    con.query(sql, function (err, result) {
        console.log('node-------', req.body)
        if(err) throw err;

        console.log('inserted');
        res.send(result);
    })
})


app.post("/checkCredentials", function(req, res) {
    console.log("request", req.body)
    let sql = "SELECT employee_email from employees_email where employee_email = '"+req.body.email+"'";

    con.query(sql, function (err, result) {
        if(err) throw err;
        
        

        if(result[0] && result[0].employee_email==req.body.email) {
            res.send({status: true})
            console.log("Verified Email is Present in Database")
        }
        else{
            res.send({status: false})
        }
    })
})

app.post("/presentorabsent", function(req, res) {
    console.log("request-----", req.body)
    let sql = "SELECT checkInDate,checkindateandtime,checkoutdateandtime,checkInTime,checkOutDate,checkOutTime from usercheckindetails WHERE email = '"+req.body.email+"'"
    con.query(sql, function (err, result) {
        if(err) throw err;

        res.send(result)
    })
    
})


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