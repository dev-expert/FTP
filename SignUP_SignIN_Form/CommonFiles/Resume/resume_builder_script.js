// COMBINED FUNCTION TO HIDE AND GENERATE THE FROM
function hide_generate() {
  hide()
  generate()
}


// FUNCTION TO HIDE THE INPUT FORM
function hide() {
  var x = document.getElementById("form");
  x.style.display = 'none';
  document.getElementById("resume_preview").style.display = "block";
}


// FUNCTION TO GENERATE THE FORM
function generate() {

  document.getElementById("name_out").innerHTML = document.getElementById("name_in").value;
  document.getElementById("tag_out").innerHTML = document.getElementById("tag_in").value;
  document.getElementById("call_num_out").innerHTML = document.getElementById("phone_in").value;
  document.getElementById("gmail_id_out").innerHTML = document.getElementById("mail_in").value;
  document.getElementById("linkedin_out").innerHTML = document.getElementById("linkedin_in").value;
  document.getElementById("experience_out").innerHTML = document.getElementById("experience_in").value + "Month Intern";
  document.getElementById("age_out").innerHTML = document.getElementById("age_in").value;
  document.getElementById("about_out").innerHTML = document.getElementById("about_in").value;


  document.getElementById("bachelor_college_name_out").innerHTML = document.getElementById("bachelor_college_name_in").value;
  document.getElementById("bachelors_marks_out").innerHTML = document.getElementById("bachelors_marks_in").value + "CGPA";
  document.getElementById("senior_secondry_college_name_out").innerHTML = document.getElementById("senior_secondry_college_name_in").value;
  document.getElementById("senior_secondrys_marks_out").innerHTML = document.getElementById("senior_secondrys_marks_in").value + "%";
  document.getElementById("matriculation_college_name_out").innerHTML = document.getElementById("matriculation_college_name_in").value;
  document.getElementById("matriculations_marks_out").innerHTML = document.getElementById("matriculations_marks_in").value + "%";


  document.getElementById("quali_out_1").innerHTML = document.getElementById("quali_1").value;
  document.getElementById("quali_out_2").innerHTML = document.getElementById("quali_2").value;
  document.getElementById("quali_out_3").innerHTML = document.getElementById("quali_3").value;
  document.getElementById("quali_out_4").innerHTML = document.getElementById("quali_4").value;


  document.getElementById("project_out_1").innerHTML = document.getElementById("project_in_1").value;
  document.getElementById("project_out_2").innerHTML = document.getElementById("project_in_2").value;
  document.getElementById("project_out_3").innerHTML = document.getElementById("project_in_3").value;
  document.getElementById("project_out_4").innerHTML = document.getElementById("project_in_4").value;
  document.getElementById("project_out_5").innerHTML = document.getElementById("project_in_5").value;
  document.getElementById("project_out_6").innerHTML = document.getElementById("project_in_6").value;
  document.getElementById("project_out_7").innerHTML = document.getElementById("project_in_7").value;


  document.getElementById("skills_out_1").innerHTML = document.getElementById("skills_in_1").value;
  document.getElementById("skills_out_2").innerHTML = document.getElementById("skills_in_2").value;
  document.getElementById("skills_out_3").innerHTML = document.getElementById("skills_in_3").value;


  document.getElementById("proficiency_out_1").innerHTML = document.getElementById("proficiency_in_1").value;
  document.getElementById("proficiency_out_2").innerHTML = document.getElementById("proficiency_in_2").value;
  document.getElementById("proficiency_out_3").innerHTML = document.getElementById("proficiency_in_3").value;
  document.getElementById("proficiency_out_4").innerHTML = document.getElementById("proficiency_in_4").value;
  document.getElementById("proficiency_out_5").innerHTML = document.getElementById("proficiency_in_5").value;
  document.getElementById("proficiency_out_6").innerHTML = document.getElementById("proficiency_in_6").value;


  document.getElementById("language_out_1").innerHTML = document.getElementById("language_in_1").value;
  document.getElementById("language_out_2").innerHTML = document.getElementById("language_in_2").value;
  document.getElementById("language_out_3").innerHTML = document.getElementById("language_in_3").value;


  document.getElementById("interest_out_1").innerHTML = document.getElementById("interest_in_1").value;
  document.getElementById("interest_out_2").innerHTML = document.getElementById("interest_in_2").value;


  document.getElementById("detail_out_1").innerHTML = document.getElementById("fathers_name_in").value;
  document.getElementById("detail_out_2").innerHTML = document.getElementById("birthday_in").value;
  // document.getElementById("detail_out_3").innerHTML = document.getElementById("gender_in").value;
  document.getElementById("detail_out_4").innerHTML = document.getElementById("maritial_in").value;
  document.getElementById("detail_out_5").innerHTML = document.getElementById("nationality_in").value;

  //document.getElementById("form").style.display = "none";
  //document.getElementById("section").style.display = "block";


  var hide_list = document.getElementsByTagName("li");
  for (var i = 0; i < hide_list.length; i++) {
    if (hide_list[i].innerHTML == "") {
      document.getElementById(hide_list[i].id).style.display = "none";
    }

    else { }
  }
}



// VALIDATION
function checke(url,msg)
{
    r=/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
     if(r.test(url.value)==false)
       alert("Enter Valid Phone Number");
    else;
      // alert(" ");
}

function checkf(url,msg)
{
    r=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
     if(r.test(url.value)==false)
       alert("Enter Valid Email Id");
    else;
      // alert(" ");
}



