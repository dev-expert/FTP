
const mongoose =require("mongoose");
const schema=mongoose.Schema;
const tableschema= schema({
  firstname:String,
  lastname:String
   
})
const producttable=mongoose.model("Myfirsttable",tableschema);
module.exports= producttable;