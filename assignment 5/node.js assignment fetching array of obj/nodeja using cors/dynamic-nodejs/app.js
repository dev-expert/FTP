var express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect('mongodb://localhost/resume_yt', { useNewUrlParser: true });
let con = mongoose.connection;

var app = express();

app.use(express.json());
app.use(cors());

//creating localhost port
app.listen(8085, () => {
    console.log('server started');
})


//creating api 
app.post('/post-feedback', async(req, res) => {

    await con.collection('resume').insertOne(req.body);
    res.send('data recieved:\n' + JSON.stringify(req.body));
});
app.get('/getdata', async(req, response) => {
    await con.collection('resume').find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
})