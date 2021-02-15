// creating array of objects
let arr = [];
var passvalue = () => {
    var name = document.getElementById("name").value;
    var name_description = document.getElementById("name_description").value;
    var email_address = document.getElementById('email_address').value;
    var mobile_number = document.getElementById('mobile_number').value;
    var location = document.getElementById('location').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var instagram = document.getElementById('instagram').value;
    var skill_1 = document.getElementById('skill_1').value;
    var skill_2 = document.getElementById('skill_2').value;
    var skill_3 = document.getElementById('skill_3').value;
    var skill_4 = document.getElementById('skill_4').value;
    var skill_5 = document.getElementById('skill_5').value;
    var skill_6 = document.getElementById('skill_6').value;
    var skill_7 = document.getElementById('skill_7').value;
    var skill_8 = document.getElementById('skill_8').value;
    var language_1 = document.getElementById('language_1').value;
    var language_2 = document.getElementById('language_2').value;
    var language_3 = document.getElementById('language_3').value;
    var degree_1 = document.getElementById('degree_1').value;
    var degree_2 = document.getElementById('degree_2').value;
    var s = document.getElementById('s').value;
    var college_1 = document.getElementById('college_1').value;
    var college_2 = document.getElementById('college_2').value;
    var school_board = document.getElementById('school_board').value;
    var degree1_date = document.getElementById('degree1_date').value;
    var degree2_date = document.getElementById('degree2_date').value;
    var school_date = document.getElementById('school_date').value;
    var degree1_cgpa = document.getElementById('degree1_cgpa').value;
    var degree2_cgpa = document.getElementById('degree2_cgpa').value;
    var school_cgpa = document.getElementById('school_cgpa').value;

    var project1_name = document.getElementById('project1_name').value;
    var project1_date = document.getElementById('project1_date').value;
    var project1_details = document.getElementById('project1_details').value;
    var project1_link = document.getElementById('project1_link').value;

    var project2_name = document.getElementById('project2_name').value;
    var project2_date = document.getElementById('project2_date').value;
    var project2_details = document.getElementById('project2_details').value;
    var project2_link = document.getElementById('project2_link').value;

    var project3_name = document.getElementById('project3_name').value;
    var project3_date = document.getElementById('project3_date').value;
    var project3_details = document.getElementById('project3_details').value;
    var project3_link = document.getElementById('project3_link').value;

    var certificate_1 = document.getElementById('certificate_1').value;
    var certificate_2 = document.getElementById('certificate_2').value;
    var certificate_3 = document.getElementById('certificate_3').value;



    var obj = {
        name: name,
        name_description: name_description,
        email_address: email_address,
        mobile_number: mobile_number,
        location: location,
        linkedin: linkedin,
        github: github,
        instagram: instagram,

        skill_1: skill_1,
        skill_2: skill_2,
        skill_3: skill_3,
        skill_4: skill_4,
        skill_5: skill_5,
        skill_6: skill_6,
        skill_7: skill_7,
        skill_8: skill_8,

        language_1: language_1,
        language_2: language_2,
        language_3: language_3,
        degree_1: degree_1,
        degree_2: degree_2,
        s: s,
        college_1: college_1,
        college_2: college_2,
        school_board: school_board,
        degree1_date: degree1_date,
        degree2_date: degree2_date,
        school_date: school_date,
        degree1_cgpa: degree1_cgpa,
        degree2_cgpa: degree2_cgpa,
        school_cgpa: school_cgpa,

        project1_name: project1_name,
        project1_date: project1_date,
        project1_details: project1_details,
        project1_link: project1_link,

        project2_name: project2_name,
        project2_date: project2_date,
        project2_details: project2_details,
        project2_link: project2_link,

        project3_name: project3_name,
        project3_date: project3_date,
        project3_details: project3_details,
        project3_link: project3_link,

        certificate_1: certificate_1,
        certificate_2: certificate_2,
        certificate_3: certificate_3,

    }
    if (localStorage.getItem("person") == null) {
        localStorage.setItem("person", JSON.stringify(arr));
    }

    var old = JSON.parse(localStorage.getItem("person"));

    old.push(obj);
    localStorage.setItem("person", JSON.stringify(old));
    // console.log(person);


}