require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.create_token =function (decodeUser){
console.log("working", decodeUser)
    const token = jwt.sign(decodeUser,`${process.env.ACCESS_KEY_TOKEN}`, {expiresIn :'6000s'});
    return token;
    }