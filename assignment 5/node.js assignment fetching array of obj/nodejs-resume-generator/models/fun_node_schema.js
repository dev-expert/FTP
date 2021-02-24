//we are creating a schema for our database
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    name_description: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('User', userSchema)