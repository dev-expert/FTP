var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();
app.get("/listenuser", (req, res) => {
    fs.readFile("user.txt", (err, data) => {
        var data = data.toString();
       var update= JSON.parse(data);
        console.log(update);
        res.send(update);
    })

});
app.listen(8080);





