var mongo =require("mongoose");
var db =mongo.connect("mongodb+srv://Simar:January@2021@cluster0.diinx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/reactcrud",
function(err,response){
    if(err){
        console.log('Failed to connect to'+db);
    }
    else{
        console.log('Connected to '+db,'+',response);}
    
});
module.exports=db;