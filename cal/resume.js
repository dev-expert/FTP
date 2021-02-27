function store() {
   // var s = JSON.parse(localStorage.getItem("data"));
    var fname = document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var Dob=document.getElementById("Dob").value;
    var Martial=document.getElementById("Martial").value;

    var Email =document.getElementById("Email").value;
    var Mobile=document.getElementById("Mobile").value;
    var Address=document.getElementById("Address").value;

    var Place=document.getElementById("Place").value;
    var Year=document.getElementById("Year").value;
    var College =document.getElementById("College").value;

    var Degr=document.getElementById("Degree").value;
    var Univ=document.getElementById("Univ").value;
    var cgpa=document.getElementById("cgpa").value;

    var Ye =document.getElementById("Ye").value;
    var School=document.getElementById("School").value;
    var Deg=document.getElementById("Deg").value;

    var Board=document.getElementById("Board").value;
    var cgp=document.getElementById("cgp").value;
    var Yea=document.getElementById("Yea").value;
    var sch=document.getElementById("sch").value;

    var Degr=document.getElementById("Degr").value;
    var Boad=document.getElementById("Boad").value;
    var cp=document.getElementById("cp").value;

    var Academic1=document.getElementById("Academic1").value;
    var Academic2=document.getElementById("Academic2").value;
    var Academic36 =document.getElementById("Academic3").value;
    var Academic4=document.getElementById("Academic4").value;

    var achieviement1 =document.getElementById("achieviement1").value;
    var achieviement2=document.getElementById("achieviement2").value;
    var achieviement3 =document.getElementById("achieviement3").value;
    var achieviement4=document.getElementById("achieviement4").value;
    var achieviement5 =document.getElementById("achieviement5").value;
    var achieviement6 =document.getElementById("achieviement6").value;

    var Interpersonal1 =document.getElementById("Interpersonal1").value;
    var Interpersonal2 =document.getElementById("Interpersonal2").value;
    var Interpersonal3 =document.getElementById("Interpersonal3").value;
    var Interpersonal4 =document.getElementById("Interpersonal4").value;

    var hobby1 =document.getElementById("hobby1").value;
    var hobby2 =document.getElementById("hobby2").value;

    var language1 =document.getElementById("language1").value;
    var language2 =document.getElementById("language2").value;


    var data = {
        fname: fname
    }
    localStorage.setItem("data", JSON.stringify(data));
}
function showData() {
    debugger;
    var d = JSON.parse(localStorage.getItem("data"));
    var firstname = d["fname"];
    //var keys=Object.keys(fname);
    //var s=keys[fname];

    document.getElementById("fname").innerHTML = firstname;
}