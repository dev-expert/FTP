var fire;

for (var i = 0; i < localStorage.length; i++){
    if(localStorage.key(i) == "fireWall")
        fire = 1;
    
    else;
}

if(fire == 1);

else{
    alert("Session Expired. Login AGAIN");
    location.replace("home.html");
}

function generate() {
    document.getElementById("nme_out").innerHTML = document.getElementById("name_in").value;
    document.getElementById("tag_out").innerHTML = document.getElementById("tag_in").value;
    document.getElementById("call_num_out").innerHTML = document.getElementById("phone_in").value;
    document.getElementById("gmail_id_out").innerHTML = document.getElementById("mail_in").value;
    document.getElementById("linkedin_out").innerHTML = document.getElementById("linkedin_in").value;
    document.getElementById("experience_out").innerHTML = document.getElementById("experience_in").value;
    document.getElementById("age_out").innerHTML = document.getElementById("age_in").value;
    document.getElementById("about_out").innerHTML = document.getElementById("about_in").value;
    

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

 

    document.getElementById("detail_out_1").innerHTML = document.getElementById("Father's_in").value;
    document.getElementById("detail_out_2").innerHTML = document.getElementById("birthday_in").value;
    document.getElementById("detail_out_3").innerHTML = document.getElementById("male").value;
    document.getElementById("detail_out_4").innerHTML = document.getElementById("maritial_in").value;

    document.getElementById("printButton").style.display = "block";
    document.getElementById("form").style.display = "none";
    document.getElementById("section").style.display = "block";

    var divs = document.getElementsByTagName("li");
    for(var i = 0; i < divs.length; i++){
        if(divs[i].innerHTML == ""){
            document.getElementById(divs[i].id).style.display = "none";
        }

        else{}
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function deleteFireWall(){
    localStorage.removeItem("fireWall");
    location.replace("home.html");
}

function prin(){
    var printContents = document.getElementById("section").innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}