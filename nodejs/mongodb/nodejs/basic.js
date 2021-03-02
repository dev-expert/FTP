const express=require('express');
const app=express(); //application level
const fs=require("fs");

const PORT=4000;

app.get('/person',function(req,res){
    res.send("hello")
})

app.get('/list', function(req, res) {
    fs.readFile('users.json', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

app.listen(PORT,(req,res) =>{
    console.log("Server on:"+PORT);
})