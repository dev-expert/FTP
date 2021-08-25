 var a = require('http')
 a.createServer(function(req, res){
     res.writeHead(200, {'Content-Type':'text/html'})
     res.end("Hello Welcome to the Node JS's First Program")
 }).listen(8080)