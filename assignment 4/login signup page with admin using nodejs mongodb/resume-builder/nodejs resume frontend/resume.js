var obj;
fetch("http://localhost:8086/getdata", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    })
    .then((response) => response.json())
    .then((obj) => {
        console.log("Success:", obj);
        var key = obj;
        for (var i = 0; i < key.length; i++) {
            var s = key[i];

            document.getElementById('name').innerHTML = s.name;
            document.getElementById('name_description').innerHTML = s.name_description;


            // //getting the basic information about the person for the left side
            document.getElementById('email_address').innerHTML = s.email_address;
            document.getElementById('mobile_number').innerHTML = s.mobile_number;
            document.getElementById('location').innerHTML = s.location;
            document.getElementById('linkedin').innerHTML = s.email_address;
            document.getElementById('github').innerHTML = s.github;
            document.getElementById('instagram').innerHTML = s.instagram;

            // // //getting the skill part values for the left side
            document.getElementById('skill_1').innerHTML = s.skill_1;
            document.getElementById('skill_2').innerHTML = s.skill_2;
            document.getElementById('skill_3').innerHTML = s.skill_3;
            document.getElementById('skill_4').innerHTML = s.skill_4;
            document.getElementById('skill_5').innerHTML = s.skill_5;
            document.getElementById('skill_6').innerHTML = s.skill_6;
            document.getElementById('skill_7').innerHTML = s.skill_7;
            document.getElementById('skill_8').innerHTML = s.skill_8;

            // // //languages content
            document.getElementById('language_1').innerHTML = s.language_1;
            document.getElementById('language_2').innerHTML = s.language_2;
            document.getElementById('language_3').innerHTML = s.language_3;

            // // //education
            document.getElementById('degree_1').innerHTML = s.degree_1;
            document.getElementById('college_1').innerHTML = s.college_1;
            document.getElementById('degree1_date').innerHTML = s.degree1_date
            document.getElementById('degree1_cgpa').innerHTML = s.degree1_cgpa;

            document.getElementById('degree_2').innerHTML = s.degree_2;
            document.getElementById('college_2').innerHTML = s.college_2;
            document.getElementById('degree2_date').innerHTML = s.degree2_date;
            document.getElementById('degree2_cgpa').innerHTML = s.degree2_cgpa;

            document.getElementById('s').innerHTML = s.s;
            document.getElementById('school_board').innerHTML = s.school_board;
            document.getElementById('school_date').innerHTML = s.school_date
            document.getElementById('school_cgpa').innerHTML = s.school_cgpa;

            // // personal projects
            document.getElementById('project1_name').innerHTML = s.project1_name;
            document.getElementById('project1_date').innerHTML = s.project1_date;
            document.getElementById('project1_details').innerHTML = s.project1_details
            document.getElementById('project1_link').innerHTML = s.project1_link;

            document.getElementById('project2_name').innerHTML = s.project2_name;
            document.getElementById('project2_date').innerHTML = s.project2_date;
            document.getElementById('project2_details').innerHTML = s.project2_details
            document.getElementById('project2_link').innerHTML = s.project2_link;

            document.getElementById('project3_name').innerHTML = s.project3_name;
            document.getElementById('project3_date').innerHTML = s.project3_date;
            document.getElementById('project3_details').innerHTML = s.project3_details
            document.getElementById('project3_link').innerHTML = s.project3_link;

            // //certificates
            document.getElementById('certificate_1').innerHTML = s.certificate_1;
            document.getElementById('certificate_2').innerHTML = s.certificate_2;
            document.getElementById('certificate_3').innerHTML = s.certificate_3;

            // //getting the interests values
            document.getElementById('interest_1').innerHTML = s.interest_1;
            document.getElementById('interest_2').innerHTML = s.interest_2;
            document.getElementById('interest_3').innerHTML = s.interest_3;
            document.getElementById('interest_4').innerHTML = s.interest_4;

            console.log(s.achive)
            for (var i = 1; i < s.achive; i++) {
                document.getElementById(`achievement_${i}`).innerHTML = s.achievements[i - 1];
            }

        }

    })
    .catch((error) => {
        console.error("Error:", error);
    });