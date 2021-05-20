const express = require('express');
const app = express();
const con = require('./server');
app.use(express.json());

const PORT = 3000;

app.listen(PORT, function () {
  console.log('Server is ready at ' + PORT);
});

//---------------------------------------For Inserting the user checkin details to database------------------------------------------------------
app.post('/registeruser', function (req, res) {
  console.log('request', req.body);
  res.send('Registered Successfully');
  let sql = 'INSERT INTO usercheckindetails SET ?';
  let post = {
    user_id: req.body.user_id,
    checkInDate: req.body.checkInDate,
    checkInTime: req.body.checkInTime,
    checkindateandtime: req.body.checkindateandtime,
    lat: req.body.lat,
    lng: req.body.lng,
  };
  con.query(sql, post, function (err, result) {
    if (err) throw err;
    console.log('1 record inserted');
  });
});

//---------------------------------------For Inserting the user checkout details to database-----------------------------------------------------
app.post('/checkouttime', function (req, res) {
  console.log('request', req.body.description);
  let sql =
    "UPDATE usercheckindetails SET checkOutTime = '" +
    req.body.checkOutTime +
    "', checkOutDate = '" +
    req.body.checkOutDate +
    "', checkoutdateandtime = '" +
    req.body.checkoutdateandtime +
    "', breakTime = '" +
    req.body.breakTime +
    "', description = '" +
    req.body.description +
    "'  WHERE user_id = '" +
    req.body.user_id +
    "' AND checkInDate = '" +
    req.body.checkOutDate +
    "'";

  con.query(sql, function (err, result) {
    console.log('node-------', req.body);
    if (err) throw err;

    console.log('inserted');
    res.send(result);
  });
});

//---------------------------------------For Checking the Login Credentials----------------------------------------------------------------------
app.post('/checkCredentials', function (req, res) {
  console.log('request', req.body);
  let sql =
    "SELECT user_id, employee_email, password from employees_email where employee_email = '" +
    req.body.email +
    "'";

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log('-------------------', result);

    if (
      result[0] &&
      result[0].employee_email == req.body.email &&
      result[0].password == req.body.password
    ) {
      res.json({
        status: true,
        result,
      });
      console.log('Verified Email is Present in Database');
    } else {
      res.send({status: false});
    }
  });
});

//---------------------------------------Selecting the details of users for checking it present or absent----------------------------------------
app.post('/presentorabsent', function (req, res) {
  console.log('request-----', req.body);
  let sql =
    "SELECT checkInDate,checkindateandtime,checkoutdateandtime,checkInTime,checkOutDate,checkOutTime,breakTime from usercheckindetails WHERE user_id = '" +
    req.body.user_id +
    "'";
  con.query(sql, function (err, result) {
    if (err) throw err;

    res.send(result);
  });
});