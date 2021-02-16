function generate() {

    document.getElementById("full_name_out").innerHTML = document.getElementById("full_name_in").value;
    document.getElementById("tag_line_out").innerHTML = document.getElementById("tag_line_in").value;
    document.getElementById("phone_number_out").innerHTML = document.getElementById("phone_number_in").value;
    document.getElementById("email_id_out").innerHTML = document.getElementById("email_id_in").value;
    document.getElementById("work_experience_out").innerHTML = document.getElementById("work_experience_in").value + " Months Intern";
    document.getElementById("linkedin_url_out").innerHTML = document.getElementById("linkedin_url_in").value;
    document.getElementById("age_out").innerHTML = document.getElementById("age_in").value;
    document.getElementById("about_me_out").innerHTML = document.getElementById("about_me_in").value;



    document.getElementById("bachelor_college_out").innerHTML = document.getElementById("bachelor_college_in").value;
    document.getElementById("12th_college_out").innerHTML = document.getElementById("12th_college_in").value;
    document.getElementById("10th_college_out").innerHTML = document.getElementById("10th_college_in").value;



    document.getElementById("quali_out_1").innerHTML = document.getElementById("quali_1").value;
    document.getElementById("quali_out_2").innerHTML = document.getElementById("quali_2").value;
    document.getElementById("quali_out_3").innerHTML = document.getElementById("quali_3").value;
    document.getElementById("quali_out_4").innerHTML = document.getElementById("quali_4").value;
    document.getElementById("quali_out_5").innerHTML = document.getElementById("quali_5").value;
    document.getElementById("quali_out_6").innerHTML = document.getElementById("quali_6").value;
    document.getElementById("quali_out_7").innerHTML = document.getElementById("quali_7").value;
    document.getElementById("quali_out_8").innerHTML = document.getElementById("quali_8").value;


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
    document.getElementById("skills_out_4").innerHTML = document.getElementById("skills_in_4").value;
    document.getElementById("skills_out_5").innerHTML = document.getElementById("skills_in_5").value;
    document.getElementById("skills_out_6").innerHTML = document.getElementById("skills_in_6").value;


    document.getElementById("proficiency_out_1").innerHTML = document.getElementById("proficiency_in_1").value;
    document.getElementById("proficiency_out_2").innerHTML = document.getElementById("proficiency_in_2").value;
    document.getElementById("proficiency_out_3").innerHTML = document.getElementById("proficiency_in_3").value;
    document.getElementById("proficiency_out_4").innerHTML = document.getElementById("proficiency_in_4").value;
    document.getElementById("proficiency_out_5").innerHTML = document.getElementById("proficiency_in_5").value;
    document.getElementById("proficiency_out_6").innerHTML = document.getElementById("proficiency_in_6").value;


    document.getElementById("language_out_1").innerHTML = document.getElementById("language_in_1").value;
    document.getElementById("language_out_2").innerHTML = document.getElementById("language_in_2").value;
    document.getElementById("language_out_3").innerHTML = document.getElementById("language_in_3").value;
    document.getElementById("language_out_4").innerHTML = document.getElementById("language_in_4").value;
    document.getElementById("language_out_5").innerHTML = document.getElementById("language_in_5").value;



    document.getElementById("interest_out_1").innerHTML = document.getElementById("interest_in_1").value;
    document.getElementById("interest_out_2").innerHTML = document.getElementById("interest_in_2").value;

 

    document.getElementById("detail_out_1").innerHTML = document.getElementById("fathers_in").value;
    document.getElementById("detail_out_2").innerHTML = document.getElementById("birthday_in").value;
    document.getElementById("detail_out_3").innerHTML = document.getElementById("male").value;
    document.getElementById("detail_out_3").innerHTML = document.getElementById("female").value;
    document.getElementById("detail_out_4").innerHTML = document.getElementById("maritial_in").value;
}
function checka(url,msg)
{
    r=/^\+?\d[\d -]{8,12}\d/;
     if(r.test(url.value)==false)
     alert("Enter Valid Number");
    else
      msg.innerHTML=" ";
}
function checkb(url,msg)
{
    r=/^[^@]+@[^@]+\.[^@]+$/;
     if(r.test(url.value)==false)
     alert("Enter Valid Email");
    else
      msg.innerHTML=" ";
}

