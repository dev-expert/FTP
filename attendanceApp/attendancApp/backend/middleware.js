require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.authorization = function authenticationToken(req, res, next) {
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1]

// console.log(token)

if (!token) {
return res.status(401).send('jwt must be required')
}

jwt.verify(token, process.env.ACCESS_KEY_TOKEN, (err, decoded)=>{
if (err) {
console.log(err)
res.status(403)
};

//console.log(decoded)

req.username = decoded.username;
req.user_id = decoded.password;
next();
})
}