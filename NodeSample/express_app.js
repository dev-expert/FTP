const express = require('express');
const app = express();
// SIMPLE HELLO WORD 
app.get('/', function (req, res) {
    res.send("Hello Word");
})


// OBJECT
app.get('/object', function (req, res) {
    const SampleObject = {
        name1: 'Akash Sharma',
        age: '21',
        name2: 'Shubham Sharma',
        age2: '19'
    }
    res.send(SampleObject)

})


// TEXT FILE
var fs = require('fs');
app.get('/text', function (req, res) {

    try {
        var data = fs.readFileSync('name.txt', 'utf8');
        res.send(data);
    } catch (e) {
        res.send('Error:', e.stack);
    }
})

app.listen(8081, function (req, res) {
    console.log('Running Server')
});