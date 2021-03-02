var express =require("express");
var app= express();
var port =3000;
var cors =require("cors");

app.use(cors());
var mongoose=require("mongoose");
app.use(express.json());
app.use(express.urlencoded());
mongoose.connect("mongodb://localhost:27017/signup");
var Schema = mongoose.Schema;
var nameSchema = Schema({
    
},{strict:false});
var User = mongoose.model("User", nameSchema);
app.get("/",async(req,res)=>{
  await User.find({}).then(response=>{
    res.json(response);
  }).catch(err=>{
    console.log("not found");
  })
});
app.post("/register", async(req, res) => {
  const store = await new User(req.body)
  try {
      await store.save();
      res.json({ saved: true })
  }
  catch (err) {
      res.send(err);
  }
});
app.get("/delete/:e",async(req,res)=> {
const del= await User.deleteOne({email:req.params.e})
 await res.json({delete:true})
})
app.get("/checkData/:e",(req,res)=> {
   User.find({email:req.params.e}).then(response=>{
     res.json({checkdata:true})
   }).catch(err=>{
     throw err;
   })

  })

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
