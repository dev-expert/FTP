const express = require("express");

const app = express();

app.listen(8080,function(req,res){
    console.log("running")
})

app.get("/",function(req,res)
{
    res.send("Hello World")
})

app.get("/him",function(req,res)
{
    const obj = {
        name1: "Himanshu Singh",
        age1:"21",

        name2: "Abc",
        age2:"21",

        name3: "XYZ",
        age3:"23"
    }
    res.send(obj)
})

app.get("/name",function(req,res)
{
    var fs = require("fs");

    try{
        var data = fs.readFileSync("nameU.txt", "utf8");
        res.send(data);
    } catch(e){
        console.log("Error", e.stack);
    }
})
