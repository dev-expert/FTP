 const express = require('express')
const app = express()
const port = 3000

const fs = require('fs');
// app.get('/', (req, res) => res.send('Hello World'))
app.get('/madhav',function(req,res){
    res.send('Welcome back madhav')
})

app.get('/list', function(req, res) {
    fs.readFile('nodefile.txt', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

app.listen(port, () => console.log(`Example app listening on port port!`))