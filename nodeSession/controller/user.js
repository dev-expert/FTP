var product = require("../model/product");
var express = require("express");
var router  = express.Router();
var fs = require("fs");
router.get("/", (req, res) => {
    res.send("<h1>Hello this is the first page</h1>");
});
router.get("/listenuser", (req, res) => {
    fs.readFile("user.txt", (err, data) => {
        var data = data.toString();
        var update = JSON.parse(data);
        console.log(update[2]);
        res.send(update);



    })

});


// app.use((req, res) => {
//     res.send("<h1>404 not found</h2>");
// });

router.post("/data", (req, res) => {
   
    const store = new product({
        name: req.body.name,
        age: req.body.age
    });
    store.save().then(result => {
        console.log("data saved");
    }).catch((err) => {
        console.log("data not saved");
    })
})
router.delete("/data",(req,res)=>{
    product.deleteOne({name : req.body.name}).then(result=>{
        console.log("product delete");
        
    });
    
})
router.use("/dat",(req,res)=>{

   product.find({}).then((result)=>{
   res.send(result);
   });
   
});
module.exports=router;