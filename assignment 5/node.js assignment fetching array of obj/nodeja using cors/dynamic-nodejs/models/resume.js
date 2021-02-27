const mongoose = require('mongoose');

var resumeSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String,
});

var resumeModel = mongoose.model('resume', resumeSchema);

module.exports = resumeModel;