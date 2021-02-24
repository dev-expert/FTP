const mongoose =require('mongoose')
const structureSchema = new mongoose.Schema({
    name:{
        
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    } 
   
})
module.exports = mongoose.model('Structure',structureSchema)