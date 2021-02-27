const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/resume_details', { useNewUrlParser: true });
let con = mongoose.connection;

//create collection

con.createCollection('persons', (err, res) => {
    console.log('collection recorded')
});

con.createCollection('achievement', (err, res) => {
    console.log('collection recorded achievement')
});


//deleting the collection 

// con.collection('achievement').drop((err, res) => {
//     console.log('collection achievement deleted');
// })

app.use(express.json());

//creating route for user list
var userRouter = require('./models/fun_node_schema');
app.use('/', userRouter); //matlab ki jab bhi /users name ka endpoint run hoga toh vo user vale page pe le jayega

//check connection
con.once('open', () => {
    console.log('connected to mongo con');
});


//check for con errors
con.on('error', (err) => {
    console.log(err);
});

//creating localhost port
app.listen(8082, () => {
    console.log('server started');
});