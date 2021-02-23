//we are creating a schema for our database
var mongoose = require('mongoose');


//here we are creating our schema part
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

//TODO : HAVE TO SEARCH ABOUT IT

module.exports = mongoose.model('User', userSchema)