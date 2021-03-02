const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');


mongoose.connect('mongodb://localhost/resume', { useNewUrlParser: true });
let con = mongoose.connection;

app.use(express.json());
app.use(cors());
//check connection
con.once('open', () => {
    console.log('connected to mongo con');
});


//check for con errors
con.on('error', (err) => {
    console.log(err);
});

//creating localhost port
app.listen(8086, () => {
    console.log('server started');
});

app.post('/signup', async(req, res) => {
    await con.collection('persons1').insertOne(req.body);
    res.send('data recieved:\n' + JSON.stringify(req.body));
});