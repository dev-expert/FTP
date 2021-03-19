// var http = require('http');

// http.createServer(function (req, res) {

// res.writeHead(200, {'Content-Type': 'text/html'});
// // console.log("dfghjkl");
// res.send("first program");
// res.end('Hello World!');

// }).listen(8000);

var express = require('express');
var app = express();
console.log("runing");
app.get('/', function(req, res){
   res.send("Hello friend!");
});

app.listen(8000);