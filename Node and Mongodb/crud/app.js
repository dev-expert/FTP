const express = require('express')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb+srv://user:pass@mahi.bsizi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const port = 9000;
const router = express.Router();


mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection;
con.on('open', function(){
    console.log("connected......")
})
const routing1 = require('./routing')
app.use('/routing',routing1)

app.listen(port , function(){
    console.log("server started...")
})