var fs = require('fs');
var data = fs.readFileSync('text.txt');//this function will read the file in sync order 
console.log(data.toString());
console.log("End Here");