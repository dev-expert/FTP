const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url = "mongodb+srv://new-user:user@cluster1.sioak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=> {
    console.log('connected')
}) 
app.use(express.json())

const datarouter = require('../nodepractical/routers/data')
app.use('/data',datarouter)


// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(9000, () => {
    console.log('server started')
})  