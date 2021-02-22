// console.log("hello");
var express=require("express");
var vi=express();
var fs = require("fs");//file stream
vi.get("/viswausers",function(req,res){
    fs.readFile('viswa_file.txt',function(err,data)
    {
        console.log(data);
        res.end(data);
    });
})

var server=vi.listen(2020,function()
{
    var host = server.address().address
    var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})