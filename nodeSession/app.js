
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const router = require("./controller/user");
app.use(express.json()); 
app.use(express.urlencoded());
 
app.use(cors());

mongoose.connect("mongodb://localhost:27017/appwrk-db", { useNewUrlParser: true, useUnifiedTopology: true, }).then(result => {
    console.log("database connected successfully");
}).catch((err) => {
    console.log("failed", err);
})



 app.use(router);




app.listen(8080);





