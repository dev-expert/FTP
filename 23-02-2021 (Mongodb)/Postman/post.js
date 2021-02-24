const express = require("express");
const app = express();
app.use(express.json());
app.post("/", function (req, res) {
//let a = request.body.a;
//let b = request.body.b;


//let c = parseInt(a) + parseInt(b);
//res.send('Result : '+c);
//console.log('Result : '+c);
res.send("Name :" + req.body.name + " age: " + req.body.age);
});

app.listen(3000, function (req, res) {
console.log("Working");
});