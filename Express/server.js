//Express
//Express.js is a framework built on top of Node.js that facilates the management of the flow of data between server and routes in the server 
// server-side applications. It is a lightweight and flexible framework that provides a wide range of 
//features required for the web as well as mobile application development.

//features of express js.
//Faster Application Development
//Helps in building application of single page multi-page and hybride types applications.
//Makes integration with databases easy.
//Makes integration with databases easy.


//importing express
const express = require('express');
//creating express application
const app = express()
//data 
app.get("/", (req, res) => {
    res.send("Hello World!!");
});




app.post("/", () => {
    res.send("POST-Hello World");
})

app.listen("8080", () => {
    console.log("Server Started");
})

//Routing Methods
//Get, Put, Post, Delete
