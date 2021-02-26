const express = require('express');
const app = express();
const router = express.Router();

//now we want to use the schema we created in user.js inside models folder
var User = require('../models/user')


//jab db ka sath kam ha toh hum normal req ka jagah async req use karte ha taki vo block na kare baki req hamri
var show = (callback) => {
    return router.get('/', async(req, res) => {
        try {
            //here we are fetching the values inside our user.js file
            var users = await User.find()
                //it will return the value in json format
            res.json(users);

        } catch (err) {
            res.send('ERROR   ' + err)
        }
        console.log('data shown');

    });
}

//for creating data in database 
var insert = (callback) => {
    return router.post('/', async(req, res) => {
        //we have to to insert data into our json obj
        const user = new User({
                name: req.body.name,
                email: req.body.email
            })
            //we have to store data in database
        try {
            const u1 = await user.save();
            console.log('insertion done');
            res.json(u1)
        } catch {
            res.send('error');
        }
        callback(del);

    });
}

//for deleting 
var del = () => {
    return router.delete("/data", async(req, res) => {
        console.log('api called')
        await User.deleteOne({
            email: req.body.email
        }).then(result => {
            console.log("data delete");
        })
        res.send('deletion done');

    });
}

//creting callback hell
var main = (callback) => {
    console.log('inside main function');
    callback(show);

}

//calling main function to call callback
main(insert);









//we have to make our router accessible to our app.js if we dont it will give middleware err
module.exports = router;