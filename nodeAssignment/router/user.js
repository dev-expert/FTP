const express = require("express");
const producttable = require("./data");
const app = express.Router();
app.get("/ajay", (req, res) => {

    producttable.insertMany({ firstname: "Hello", lastname: "singh" }).then(response => {
        res.send("data saved");

    })
})

app.get("/dev", (req, res) => {

    producttable.find({}).then(response => {
        res.json(response);
    }).catch(err => {
        console.log(err);
    })
})


// app.post("/signup", (req, res) => {
//     var fname = req.body.firstname;
//     var lname = req.body.lastname;
//     // var pass = req.body.password;
//     // var phone =req.body.phone; 
//     var data = {
//         "firstname": fname,
//         "lastname": lname,
//         // "password":pass,
//         // "phone":phone
//     }
//     db.collection('details').insertOne(data, function (err, collection) {
//         if (err) throw err;
//         console.log("Record inserted Successfully");

//     })
    
// })

app.post("/signup", async (req, res) => {
res.send(req.body);
    const store = await new producttable(req.body)
    try {
        await store.save();
        res.json({ saved: true })
    }
    catch (err) {
        res.send(err);
    }




})

module.exports = app;


