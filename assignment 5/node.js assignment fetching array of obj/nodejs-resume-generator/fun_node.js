const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/resume_details', { useNewUrlParser: true });
let con = mongoose.connection;

//create collection

con.createCollection('persons', (err, res) => {
    console.log('collection recorded')
})
con.createCollection('achievement', (err, res) => {
    console.log('collection recorded')
})

//check connection
con.once('open', () => {
    console.log('connected to mongo con');
})


//check for con errors
con.on('error', (err) => {
    console.log(err);
});

//creating localhost port
app.listen(8082, () => {
    console.log('server started');
})