const http = require('http');
var message = require('./hello.js');

http.createServer((req, res) => {
    res.write(`<h1>hello</h1>`);
    res.end(message);

}).listen(8081);
console.log('server running');