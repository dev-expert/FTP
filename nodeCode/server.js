const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://Simar:January@2021@cluster0.diinx.mongodb.net/?retryWrites=true&w=majority', {
  useUnifiedTopology: true
})

  .then(client => {
    console.log('connected to database')
    const db = client.db('nodeCode')
    const quotesCollection = db.collection('quotes')


    app.set('views', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))
    app.listen(3000, function () {
      console.log('listening on 3000')
    })
    app.set('views', './views');
    app.set('view engine', 'ejs');

    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
        .then(results=> {
          //console.log(results)
          res.render('index.ejs', { quotes:results })
        })
        .catch(error => console.error(error))

    })


    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          console.log(result)
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.put('/quotes', (req, res) => {
      quotesCollection.findOneAndUpdate(
        { name:res.body},
        {
          $set: {
            name: req.body.name,
            pseudoName: req.body.pseudoName
          }
        },
        {
          upsert: true
        }
      )
        .then(result => res.json('Success'))
        .catch(error => console.error(error)) 

    })
      

    app.delete('/quotes', (req, res) => {
      quotesCollection.delete(
        { name: req.body.name }
      )
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('Nothing to delete')
          }
          res.json('Deleted')
        })
        .catch(error => console.error(error))
    })

  })
  // const isProduction = process.env.NODE_ENV === 'production'
  // const port = isProduction ? 7500 : 3000
  // app.listen(port, function () {
  //   console.log(`listening on ${port}`)
  // })

  .catch(console.error)


