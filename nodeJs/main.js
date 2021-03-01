
var express = require('express');
var app = express();

var fs = require('fs');

app.get('/listusers', function(req, res) {
    fs.readFile('user.json', function(err, data) {
        console.log(data);
        res.end(data);
    });
})
app.get('/list', function(req, res) {
    fs.readFile('file.txt', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

var server = app.listen(300, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});

console.log('data written');