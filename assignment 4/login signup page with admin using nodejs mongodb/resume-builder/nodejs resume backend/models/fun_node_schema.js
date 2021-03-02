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
    },
    email_address: {
        type: String,
        required: true,
    },
    mobile_number: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    instagram: {
        type: String,
        required: true,
    },

    skill_1: {
        type: String,
        required: true,
    },
    skill_2: {
        type: String,
        required: true,
    },
    skill_3: {
        type: String,
        required: true,
    },
    skill_4: {
        type: String,
        required: true,
    },
    skill_5: {
        type: String,
        required: true,
    },
    skill_6: {
        type: String,
        required: true,
    },
    skill_7: {
        type: String,
        required: true,
    },
    skill_8: {
        type: String,
        required: true,
    },

    language_1: {
        type: String,
        required: true,
    },
    language_2: {
        type: String,
        required: true,
    },
    language_3: {
        type: String,
        required: true,
    },
    degree_1: {
        type: String,
        required: true,
    },
    degree_2: {
        type: String,
        required: true,
    },
    s: {
        type: String,
        required: true,
    },
    college_1: {
        type: String,
        required: true,
    },
    college_2: {
        type: String,
        required: true,
    },
    school_board: {
        type: String,
        required: true,
    },
    degree1_date: {
        type: Date,
        required: true,
    },
    degree2_date: {
        type: Date,
        required: true,
    },
    school_date: {
        type: Date,
        required: true,
    },
    degree1_cgpa: {
        type: Number,
        required: true,
    },
    degree2_cgpa: {
        type: Number,
        required: true,
    },
    school_cgpa: {
        type: Number,
        required: true,
    },

    project1_name: {
        type: String,
        required: true,
    },
    project1_date: {
        type: Date,
        required: true,
    },
    project1_details: {
        type: String,
        required: true,
    },
    project1_link: {
        type: String,
        required: true,
    },

    project2_name: {
        type: String,
        required: true,
    },
    project2_date: {
        type: Date,
        required: true,
    },
    project2_details: {
        type: String,
        required: true,
    },
    project2_link: {
        type: String,
        required: true,
    },

    project3_name: {
        type: String,
        required: true,
    },
    project3_date: {
        type: Date,
        required: true,
    },
    project3_details: {
        type: String,
        required: true,
    },
    project3_link: {
        type: String,
        required: true,
    },

    certificate_1: {
        type: String,
        required: true,
    },
    certificate_2: {
        type: String,
        required: true,
    },
    certificate_3: {
        type: String,
        required: true,
    },

    interest_1: {
        type: String,
        required: true,
    },
    interest_2: {
        type: String,
        required: true,
    },
    interest_3: {
        type: String,
        required: true,
    },
    interest_4: {
        type: String,
        required: true,
    },

    // achievement_1: achievement_1,
    // achievement_2: achievement_2,



    achive: {
        type: String,
        required: true,
    },

})

module.exports = mongoose.model('Persons', userSchema)