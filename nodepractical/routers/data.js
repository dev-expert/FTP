const express = require('express')
const router = express.Router()
const Structure = require('../models/structure')

router.get('/',async(req,res)=>{
    try{
        const data = await Structure.find()
        res.json(data)
    }
    catch(err){
        res.send('error' + err)
    }
})

    router.post('/',async(req,res) =>{
         const structure = new Structure({
             name: req.body.name,
             email: req.body.email
         })
         try{
                const a1 =await structure.save()
                res.json(a1);
         }
         catch(err){
             res.send('error')
         }
    })

    router.delete('/del',async(req,res) =>{
        console.log('api called')
        Structure.deleteOne({ email: req.body.email }).then(result => {
            console.log("data delete");
            
        })
        res.send('deletion done');
    
    
    })
    
  

module.exports = router;