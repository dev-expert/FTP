// document.getElementById('name').innerHTML = localStorage.getItem('name');
// document.getElementById('name_description').innerHTML = localStorage.getItem('name_description');
// document.getElementById('name').innerHTML = localStorage.getItem();

var person = JSON.parse(localStorage.getItem("person"));

//getting the name and description part for the header
document.getElementById('name').innerHTML = person[0].name;
document.getElementById('name_description').innerHTML = person[0].name_description;

//getting the basic information about the person for the left side
document.getElementById('email_address').innerHTML = person[0].email_address;
document.getElementById('mobile_number').innerHTML = person[0].mobile_number;
document.getElementById('location').innerHTML = person[0].location;
document.getElementById('linkedin').innerHTML = person[0].email_address;
document.getElementById('github').innerHTML = person[0].github;
document.getElementById('instagram').innerHTML = person[0].instagram;

// //getting the skill part values for the left side
document.getElementById('skill_1').innerHTML = person[0].skill_1;
document.getElementById('skill_2').innerHTML = person[0].skill_2;
document.getElementById('skill_3').innerHTML = person[0].skill_3;
document.getElementById('skill_4').innerHTML = person[0].skill_4;
document.getElementById('skill_5').innerHTML = person[0].skill_5;
document.getElementById('skill_6').innerHTML = person[0].skill_6;
document.getElementById('skill_7').innerHTML = person[0].skill_7;
document.getElementById('skill_8').innerHTML = person[0].skill_8;

// //languages content
document.getElementById('language_1').innerHTML = person[0].language_1;
document.getElementById('language_2').innerHTML = person[0].language_2;
document.getElementById('language_3').innerHTML = person[0].language_3;

// //education
document.getElementById('degree_1').innerHTML = person[0].degree_1;
document.getElementById('college_1').innerHTML = person[0].college_1;
document.getElementById('degree1_date').innerHTML = person[0].ddegree1_date
document.getElementById('degree1_cgpa').innerHTML = person[0].degree1_cgpa;

document.getElementById('degree_2').innerHTML = person[0].degree_2;
document.getElementById('college_2').innerHTML = person[0].college_2;
document.getElementById('degree2_date').innerHTML = person[0].degree2_date;
document.getElementById('degree2_cgpa').innerHTML = person[0].degree2_cgpa;

document.getElementById('s').innerHTML = person[0].s;
document.getElementById('school_board').innerHTML = person[0].school_board;
document.getElementById('school_date').innerHTML = person[0].school_date
document.getElementById('school_cgpa').innerHTML = person[0].school_cgpa;

// personal projects
document.getElementById('project1_name').innerHTML = person[0].project1_name;
document.getElementById('project1_date').innerHTML = person[0].project1_date;
document.getElementById('project1_details').innerHTML = person[0].project1_details
document.getElementById('project1_link').innerHTML = person[0].project1_link;

document.getElementById('project2_name').innerHTML = person[0].project2_name;
document.getElementById('project2_date').innerHTML = person[0].project2_date;
document.getElementById('project2_details').innerHTML = person[0].project2_details
document.getElementById('project2_link').innerHTML = person[0].project2_link;

document.getElementById('project3_name').innerHTML = person[0].project3_name;
document.getElementById('project3_date').innerHTML = person[0].project3_date;
document.getElementById('project3_details').innerHTML = person[0].project3_details
document.getElementById('project3_link').innerHTML = person[0].project3_link;

//certificates
document.getElementById('certificate_1').innerHTML = person[0].certificate_1;
document.getElementById('certificate_2').innerHTML = person[0].certificate_2;
document.getElementById('certificate_3').innerHTML = person[0].certificate_3;