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

//create collection

// con.createCollection('persons', (err, res) => {
//     console.log('collection recorded')
// });

app.post('/sendachievements', async(req, res) => {

    await con.collection('achievements').insertOne(req.body);
    res.send('data recieved:\n' + JSON.stringify(req.body));
});

app.get('/getdata', async(req, response) => {
    await con.collection('achievements').find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
})


//deleting the collection 

// con.collection('achievement').drop((err, res) => {
//     console.log('collection achievement deleted');
// })