const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/alien', function (req, res) {
    res.send('Welcome Back Alien')
})

app.get('/alien/:name', function (req, res) {
    const name = req.params.name;
    res.send('Hey ' + name)
})

app.listen(9000, function (req, res) {
    console.log('Running..')
})
app.get("/name", function (req, res) {
    var fs = require("fs");
    try {
        var data = fs.readFileSync("name.txt", "utf8");
        res.send(data);
    }
    catch (e) {
        console.log("error", e.stack);
    }
})

app.get("/obj", function (req, res) {
    const obj = {
        name1: "Sujata Singh",
        age1: 22,
        name2: "Himanshu Singh",
        age2: 23,
        name3: "Anmol Jha",
        age3: 21,
        name4: "Subham",
        age4: 22
    }
    res.send(obj)
}) 