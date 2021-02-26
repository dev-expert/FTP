var product = require("../model/product");
var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views", 'index.html'));
});
// router.get("/listenuser", (req, res) => {
//     fs.readFile("user.txt", (err, data) => {
//         var data = data.toString();
//         var update = JSON.parse(data);
//         console.log(update[2]);
//         res.send(update);



//     })

// });

router.get("/login", (req, res) => {

    res.sendFile(path.join(__dirname, "../views", 'login.html'));
});


router.get("/signup:admin", (req, res) => {


    res.render("signup.ejs", { data: "" });
})
router.post("/signup", async (req, res) => {
    console.log("Signuapi called");
    const store = await new product(req.body)
    try {
        await store.save();
        res.json({ saved: true })
    }
    catch (err) {
        res.send(err);
    }




})


router.get("/delete/:email", async (req, res) => {
    const email = req.params.email;

    const response = await product.deleteOne({ email: email });

    res.json(response);

});
router.get("/admin", (req, res) => {

    
    product.find({}).then((result) => {
        res.json(result);
        //    res.render("admin.ejs",{show : result});
    }).catch(err => {
        res.send(err);
    })

});
router.post("/delete", (req, res) => {
    product.deleteMany({ email: req.body.email }).then(result => {
        console.log("product deleted");
    })
})


// router.post("/data", (req, res) => {

//     const store = new product({
//         name: req.body.name,
//         age: req.body.age
//     });
//     store.save().then(result => {
//         console.log("data saved");
//     }).catch((err) => {
//         console.log("data not saved");
//     })
// })




// router.delete("/data",(req,res)=>{
//     product.deleteOne({name : req.body.name}).then(result=>{
//         console.log("product delete");

//     });

// })


module.exports = router;