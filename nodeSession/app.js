
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const model = require("./model/product");
const router = require("./controller/user");
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({ extended: false }));
mongoose.connect("mongodb://localhost:27017/appwrk-db", { useNewUrlParser: true, useUnifiedTopology: true, }).then(result => {
    console.log("database connected successfully");
}).catch((err) => {
    console.log("failed", err);
})

app.use(router);

app.use(model);


app.listen(8080);





