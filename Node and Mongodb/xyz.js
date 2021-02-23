const express = require('express')
const app = express()
var fs = require('fs');


app.get('/',(req,res) => res.send('Hello world......'))
app.get('/alien',(req,res)=> res.send("Hello Alien......."));

app.listen(9000 , function(req,res) {
    console.log("Running.............")
})
app.get('/list',(req,res) =>{ 
    fs.readFile('./data.txt',(err, data) => {
 
  console.log(data)
  res.end(data);
})
})
app.get('/list1',(req,res) =>{ 
    fs.readFile('./basics.txt',(err, data) => {
 
  console.log(data)
  res.end(data);
})
})

app.get("/obj", function (req, res) {
  const obj = {
     name1 : "Mahendra",
     Role2 : "Dev",
     name2 : "Madhav",
     Role2 : "Dev",
     name3: "Santhosh",
     Role3 : "Dev"
  }
  res.send(obj)
}) 


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port port!`))