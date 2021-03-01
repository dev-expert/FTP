const express = require("express");
const app = express();

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://Simar:January@2021@cluster0.diinx.mongodb.net/?retryWrites=true&w=majority', {
  useUnifiedTopology: true
}).then(res=>{
    console.log("connected");
    
}).catch((err)=>{
    console.log(err);
})
app.use(express.json());
app.use(express.urlencoded());

let quotesCollection = db.collection('quotes')

app.get("/",(req,res)=>{
    quotesCollection.find({}).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err);
    })

})
app.listen(8080);

