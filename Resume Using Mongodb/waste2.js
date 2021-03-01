// var fs = require("fs"),
//     path = require("path"),
//     util = require("util");
// var content;
// // console.log(content);
// fs.readFile(path.join("data.txt"), 'utf8', function (err, data) {
//     if (err) {
//         // console.log(err);
//         process.exit(1);
//     }
//     content = util.format(data);
//     console.log(content);
//     var obj = JSON.parse(content);
// console.log(obj[0])
// });




var fs = require('fs');

var content = fs.readFileSync('data.txt','utf8');

var obj = JSON.parse(content);
console.log(obj[0].bio)