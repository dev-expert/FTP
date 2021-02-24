const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });
let con = mongoose.connection;


//check connection
con.once('open', () => {
    console.log('connected to mongo con');
})

//check for con errors
con.on('error', (err) => {
    console.log(err);
});

//we are using res.json so for that we have to mention here about the json
app.use(express.json());

//creating route for user list
var userRouter = require('./routers/users');
app.use('/users', userRouter); //matlab ki jab bhi /users name ka endpoint run hoga toh vo user vale page pe le jayega


//creating localhost port
app.listen(8081, () => {
    console.log('server started');
})