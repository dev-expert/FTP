//console.log('Hello world')
var express = require('express');
var app = express();

var fs = require('fs');

app.get('/listusers', function(req, res) {
    fs.readFile('users.json', function(err, data) {
        console.log(data);
        res.end(data);
    });
})
app.get('/list', function(req, res) {
    fs.readFile('users.json', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});

console.log('data written');