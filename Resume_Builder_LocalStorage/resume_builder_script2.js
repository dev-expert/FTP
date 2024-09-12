// COMBINE FUNCTION FOR HIDE + LOCAL STORAGE + FETCHING DATA
function hide_generate() {
    hide()
    information()
    information_out()

}

// FUNCTION TO HIDE INPUT FORM AND DISPLAYING RESUME
function hide() {
    var x = document.getElementById("form");
    x.style.display = 'none';
    document.getElementById("resume_preview").style.display = "block";
}


// STROING INPUTS IN LOCAL STOARGE
function information() {
    // BASIC INFO
    var name1 = document.getElementById('name_in').value;
    var tag1 = document.getElementById('tag_in').value;
    var phone1 = document.getElementById('phone_in').value;
    var mail1 = document.getElementById('mail_in').value;
    var linkedin1 = document.getElementById('linkedin_in').value;
    var experinec1 = document.getElementById('experience_in').value;
    var age1 = document.getElementById('age_in').value;
    var about1 = document.getElementById('about_in').value;

    var obj1 = {
        name_in: name1, tag_in: tag1, phone_in: phone1,
        mail_in: mail1, linkedin_in: linkedin1, experience_in: experinec1, age_in: age1, about_in: about1
    };
    localStorage.setItem("basicinfo", JSON.stringify(obj1));

    // EDUCATIONAL INFO
    var bachelor1 = document.getElementById('bachelor_college_name_in').value;
    var bachelormarks1 = document.getElementById('bachelors_marks_in').value;
    var seniorsecondry1 = document.getElementById('senior_secondry_college_name_in').value;
    var seniorsecondrymarks1 = document.getElementById('senior_secondrys_marks_in').value;
    var matriculation1 = document.getElementById('matriculation_college_name_in').value;
    var matriculationmarks1 = document.getElementById('matriculations_marks_in').value;

    var obj2 = {
        bachelor_college_name_in: bachelor1, bachelors_marks_in: bachelormarks1, senior_secondry_college_name_in: seniorsecondry1,
        senior_secondrys_marks_in: seniorsecondrymarks1, matriculation_college_name_in: matriculation1, matriculations_marks_in: matriculationmarks1
    };
    localStorage.setItem("educationalinfo", JSON.stringify(obj2));
}

// GETTING DATA FROM THE LOCAL STORAGE
function information_out() {
    // BASIC INFO
    var basicinfo1 = JSON.parse(localStorage.getItem("basicinfo"));
    document.getElementById("name_out").innerHTML = basicinfo1.name_in;
    document.getElementById("tag_out").innerHTML = basicinfo1.tag_in;
    document.getElementById("call_num_out").innerHTML = basicinfo1.phone_in;
    document.getElementById("gmail_id_out").innerHTML = basicinfo1.mail_in;
    document.getElementById("linkedin_out").innerHTML = basicinfo1.linkedin_in;
    document.getElementById("experience_out").innerHTML = basicinfo1.experience_in + " Month Intern";
    document.getElementById("age_out").innerHTML = basicinfo1.age_in;
    document.getElementById("about_out").innerHTML = basicinfo1.about_in;

    // EDUCATIONAL INFO
    var educationalinfo1 = JSON.parse(localStorage.getItem("educationalinfo"));
    document.getElementById("bachelor_college_name_out").innerHTML = educationalinfo1.bachelor_college_name_in;
    document.getElementById("bachelors_marks_out").innerHTML = educationalinfo1.bachelors_marks_in + " CGPA";
    document.getElementById("senior_secondry_college_name_out").innerHTML = educationalinfo1.senior_secondry_college_name_in;
    document.getElementById("senior_secondrys_marks_out").innerHTML = educationalinfo1.senior_secondrys_marks_in + " %";
    document.getElementById("matriculation_college_name_out").innerHTML = educationalinfo1.matriculation_college_name_in;
    document.getElementById("matriculations_marks_out").innerHTML = educationalinfo1.matriculations_marks_in + " %";


    // HIDNG UNFILLED LISTS
    var hide_list = document.getElementsByTagName("li");
    for (var i = 0; i < hide_list.length; i++) {
        if (hide_list[i].innerHTML == "") {
            document.getElementById(hide_list[i].id).style.display = "none";
        }

        else { }
    }

}


// VALIDATION
function checke(url, msg) {
    r = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (r.test(url.value) == false)
        alert("Enter Valid Phone Number");
    else;
    // alert(" ");
}

function checkf(url, msg) {
    r = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (r.test(url.value) == false)
        alert("Enter Valid Email Id");
    else;
    // alert(" ");
}