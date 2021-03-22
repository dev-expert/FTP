var express =require("express");
var app= express();
var port =8080;
var cors =require("cors");
var axios=require("axios");

app.use(cors());
var mongoose=require("mongoose");
app.use(express.json());
app.use(express.urlencoded());
mongoose.connect("mongodb://localhost:27017/reactCrud");
var Schema = mongoose.Schema;
var nameSchema = Schema({
    date: { type: String   },       
        desc: { type: String   },     
        credit: { type: String },       
        debit: { type: String }, 
        runningbal:{type:String},
    
},{strict:false});
var User = mongoose.model("User", nameSchema);
app.get("/",async(req,res)=>{
  await User.find({}).then(response=>{
    res.json(response);
  }).catch(err=>{
    console.log("not found");
  })
});
app.post("/messages", async(req, res) => {
  const store = await new User(req.body)
  try {
      await store.save();
      res.json({ saved: true })
  }
  catch (err) {
      res.send(err);
  }
});


app.listen(port, () => {
  console.log("Server listening on port " + port);
});



































// var express =require("express");
// var path = require("path");  
// var mongo = require("mongoose");   
// var bodyParser = require('body-parser');   
// var morgan = require("morgan");  
// var db = require("./config.js");

// var app = express();  
// var port = process.env.port || 7777;  
// var srcpath  =path.join(__dirname,'/public') ;  
// app.use(express.static('public'));  
// app.use(bodyParser.json({limit:'5mb'}));    
// app.use(bodyParser.urlencoded({extended:true, limit:'5mb'}));  
  
  
// var mongoose = require('mongoose');  
// var Schema = mongoose.Schema;  
// var studentSchema = new Schema({      
//     date: { type: String   },       
//     desc: { type: String   },     
//     credit: { type: String },       
//     debit: { type: String }, 
//     runningbal:{type:String},      
// },{ versionKey: false });  
   
  
// var model = mongoose.model('student', studentSchema, 'student');  
  
// //api for get data from database  
// app.get("/api/getdata",function(req,res){   
//  model.find({},function(err,data){  
//             if(err){  
//                 res.send(err);  
//             }  
//             else{             
//                 res.send(data);  
//                 }  
//         });  
// })  
  
  
// //api for Delete data from database  
// app.post("/api/Removedata",function(req,res){   
//  model.remove({ _id: req.body.id }, function(err) {  
//             if(err){  
//                 res.send(err);  
//             }  
//             else{    
//                    res.send({data:"Record has been Deleted..!!"});             
//                }  
//         });  
// })  
  
  
// //api for Update data from database  
// app.post("/api/Updatedata",function(req,res){   
//  model.findByIdAndUpdate(req.body.id, { name:  req.body.name, address: req.body.address, contact: req.body.contact,email:req.body.email },   
// function(err) {  
//  if (err) {  
//  res.send(err);  
//  return;  
//  }  
//  res.send({data:"Record has been Updated..!!"});  
//  });  
// })    
  
  
// //api for Insert data from database  
// app.post("/api/savedata",function(req,res){   
       
//     var mod = new model(req.body);  
//         mod.save(function(err,data){  
//             if(err){  
//                 res.send(err);                
//             }  
//             else{        
//                  res.send({data:"Record has been Inserted..!!"});  
//             }  
//         });  
// })  
      
// // call by default index.html page  
// app.get("*",function(req,res){   
//     res.sendFile(srcpath +'/index.html');  
// })  
  
// //server stat on given port  
// app.listen(port,function(){   
//     console.log("server start on port"+ port);  
// })  
