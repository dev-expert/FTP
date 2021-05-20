var mysql = require('mysql');

config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'attendanceapp',
  }

var con = mysql.createConnection(config);

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = {con: mysql.createConnection(config)}