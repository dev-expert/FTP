const express = require('express');
const app = express();
const router = express.Router();

// const bodyparser = require("body-parser");
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: false }));

//now we want to use the schema we created in user.js inside models folder
var User = require('../models/user')



//jab db ka sath kam ha toh hum normal req ka jagah async req use karte ha taki vo block na kare baki req hamri
router.get('/', async(req, res) => {
    try {
        //here we are fetching the values inside our user.js file
        var users = await User.find()
            //it will return the value in json format
        res.json(users);

    } catch (err) {
        res.send('ERROR   ' + err)
    }
})

//for creating data in database 
router.post('/', async(req, res) => {
    //we have to to insert data into our json obj
    const user = new User({
            name: req.body.name,
            email: req.body.email
        })
        //we have to store data in database
    try {
        const u1 = await user.save();
        res.json(u1)
    } catch {
        res.send('error');
    }
});

//for deleting 
router.delete("/data", (req, res) => {
    console.log('api called')
    User.deleteOne({ email: req.body.email }).then(result => {
        console.log("data delete");
    })
    res.send('deletion done');


})


//we have to make our router accessible to our app.js if we dont it will give middleware err
module.exports = router;