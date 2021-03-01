const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

var fs = require('fs');
var content = fs.readFileSync('data.txt','utf8');
var obj = JSON.parse(content);
old = obj[0];
console.log(old)