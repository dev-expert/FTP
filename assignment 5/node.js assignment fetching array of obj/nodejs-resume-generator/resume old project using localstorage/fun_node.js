const express = require('express');
const app = express();
const router = express.Router();

//now we want to use the schema we created in user.js inside models folder
var Persons = require('./models/fun_node_schema');


//API for inserting values in the database inside 
router.post('/', async(req, res) => {

    var obj = [
        { name: document.getElementById("name").value },
        { name_description: document.getElementById("name_description").value },
        { email_address: document.getElementById('email_address').value },
        { mobile_number: document.getElementById('mobile_number').value },
        { location: document.getElementById('location').value },
        { linkedin: document.getElementById('linkedin').value },
        { github: document.getElementById('github').value },
        { instagram: document.getElementById('instagram').value },
        { skill_1: document.getElementById('skill_1').value },
        { skill_2: document.getElementById('skill_2').value },
        { skill_3: document.getElementById('skill_3').value },
        { skill_4: document.getElementById('skill_4').value },
        { skill_5: document.getElementById('skill_5').value },
        { skill_6: document.getElementById('skill_6').value },
        { skill_7: document.getElementById('skill_7').value },
        { skill_8: document.getElementById('skill_8').value },
        { language_1: document.getElementById('language_1').value },
        { language_2: document.getElementById('language_2').value },
        { language_3: document.getElementById('language_3').value },
        { degree_1: document.getElementById('degree_1').value },
        { degree_2: document.getElementById('degree_2').value },
        { s: document.getElementById('s').value },
        { college_1: document.getElementById('college_1').value },
        { college_2: document.getElementById('college_2').value },
        { school_board: document.getElementById('school_board').value },
        { degree1_date: document.getElementById('degree1_date').value },
        { degree2_date: document.getElementById('degree2_date').value },
        { school_date: document.getElementById('school_date').value },
        { degree1_cgpa: document.getElementById('degree1_cgpa').value },
        { degree2_cgpa: document.getElementById('degree2_cgpa').value },
        { school_cgpa: document.getElementById('school_cgpa').value },

        { project1_name: document.getElementById('project1_name').value },
        { project1_date: document.getElementById('project1_date').value },
        { project1_details: document.getElementById('project1_details').value },
        { project1_link: document.getElementById('project1_link').value },

        { project2_name: document.getElementById('project2_name').value },
        { project2_date: document.getElementById('project2_date').value },
        { project2_details: document.getElementById('project2_details').value },
        { project2_link: document.getElementById('project2_link').value },

        { project3_name: document.getElementById('project3_name').value },
        { project3_date: document.getElementById('project3_date').value },
        { project3_details: document.getElementById('project3_details').value },
        { project3_link: document.getElementById('project3_link').value },

        { certificate_1: document.getElementById('certificate_1').value },
        { certificate_2: document.getElementById('certificate_2').value },
        { certificate_3: document.getElementById('certificate_3').value },

        { interest_1: document.getElementById('interest_1').value },
        { interest_2: document.getElementById('interest_2').value },
        { interest_3: document.getElementById('interest_3').value },
        { interest_4: document.getElementById('interest_4').value },

    ];

    await con.collection("persons").insertMany(obj, (err, res) => {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
    });


});