var product = require("../model/product");
var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
const resumeModel = require("../model/resume");
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

    res.json({res:true});

});
router.get("/deleteResume/:id", async (req, res) => {
    const id = req.params.id;

    const response = await resumeModel.deleteOne({ _id: id });

    res.json({res:true});

});
router.get("/checkuser/:email", async (req, res) => {
    const email = req.params.email;

      await resumeModel.find({login:email}).then(result=>{

        res.json(result);
    }).catch(err=>{
        if(err) throw err;
    });


});


router.post("/checkuser", async (req, res) => {

    const email = req.body.email;
    const pass = req.body.pass;
    
      const response= await product.find({$and:[{email:email},{pass:pass}]})
      
      res.json(response);
    


});

router.get("/cv", (req, res) => {

    
    resumeModel.find({}).then((result) => {
        res.json(result);
        //    res.render("admin.ejs",{show : result});
    }).catch(err => {
        res.send(err);
    })

});
router.get("/admin", (req, res) => {

    
    product.find({}).then((result) => {
        res.json(result);
        //    res.render("admin.ejs",{show : result});
    }).catch(err => {
        res.send(err);
    })

});
router.post("/cv",async(req,res)=>{
    console.log("cvapi called");
    const store = await new resumeModel(req.body)
    try {
        await store.save();
        res.json({ saved: true })
    }
    catch (err) {
        res.send(err);
    }


});
router.get("/deleteResume/:id",async(req,res)=>{
 await resumeModel.deleteOne({_id:req.params.id});
res.json({saved:true});

})
router.get("/editResume/:id", async(req,res)=>{
    let id = req.params.id;
  const data = await resumeModel.find({_id:id});
  res.json(data);
});

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