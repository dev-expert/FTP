const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const productSchema = Schema({
    name : String,
    email: String,
    number : String,
    about : String,
    profile: String,
    c1: String,
    c2 : String,
    c3 : String,
    c4: String,
    c5 : String,
    graduate : String,
    highschool: String,
    intermediate : String,
    i1 : String,
    i2 : String,
    i3: String,
    l1 : String,
    l2: String,
    l3 : String,
    s1 : String,
    s2 : String,
    s3: String,
     end : String,
    start: String,
    l3  : String,
    
    i1 : String,
    i2 : String,
    i3: String,
    l1 : String,
    l2: String,
    l3 : String,
    
    
    

})
const productmodel = mongoose.model("resume", productSchema);

module.exports =productmodel;