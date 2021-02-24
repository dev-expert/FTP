const express=require('express');
const app=express(); //application level
// const fs=require("fs");

const PORT=3000;

app.get('/person',(req,res)=>{
    let person={name:"sant",addr:"Hyd"}
    res.send(person)
})

// app.get('/list', function(req, res) {
//     fs.readFile('users.json', function(err, data) {
//         console.log(data);
//         res.end(data);
//     });
// })

app.listen(PORT,(req,res)=>{
    console.log("Server on:"+PORT);
})