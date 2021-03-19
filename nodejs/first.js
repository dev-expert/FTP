// var http=require("http");
// http.createServer(function(req,res){
//     console.log("running");
//     res.writeHead(200,{'Content-Type': 'text/html'});
    
//     res.write("keshav kakkar");
//     res.end();
// }).listen(4002);

var http=require("http");
http.createServer(function(req,res){
    res.write("welcome to nodejs");
    res.end();
}).listen(6060);
console.log("connected");
// console.log("connected");
