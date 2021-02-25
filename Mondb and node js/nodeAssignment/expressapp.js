var express = require("express");
var app = express();
var fs = require("fs");

app.get("/",(req,res)=>{
    
    res.send("<h1>hellodev</h1>");
});

app.get("/dev",(req,res)=>{
    fs.readFile("user.txt",(err,data)=>{
    
        var file = JSON.parse(data);
        console.log(file);
        res.send(file);
    })
})
    app.listen(8080);

