require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.create_token =function (decodeUser){

    let token = jwt.sign(decodeUser, process.env.ACCESS_KEY_TOKEN, {expiresIn :'6000s'});
    
    return token;
    }