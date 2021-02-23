const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello world')
})

app.get('/practice', function(req, res){
    res.send('Hello Anmol')
})

app.get('/trying', (req, res) => res.send(testData))

const testData = {
    name1: 'A',
    name2: 'B',
    name3: 'C',
    name4: 'D',
    name5: 'E',
  }

app.get('/demo', function(req, res){
    var fs = require('fs');

    try {  
        var data = fs.readFileSync('name.txt', 'utf8');
        res.send((data));    
    } catch(e) {
        console.log('Error:', e.stack);
    }
})


app.listen(9090, function(req, res){
    console.log('Running..')
})