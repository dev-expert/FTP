var resumedata=[];
function storedata(){
    var formdata=document.forms.userform;
    var formelements = new FormData(formdata);
    var fname=formelements.get("First_Name");
    var lname=formelements.get("Last_Name");
    var name=fname+" "+lname;
    var objective=formelements.get("objective");
    var designation=formelements.get("designation");
    var address=formelements.get("address");
    var email=formelements.get("email");
    var Phone=formelements.get("Phone");
    var LinkedIn=formelements.get("LinkedIn");
    var skill1=formelements.get("skill-1");
    var skill2=formelements.get("skill-2");
    var skill3=formelements.get("skill-3");
    var skill4=formelements.get("skill-4");
    var skill5=formelements.get("skill-5");
    var collegedate=formelements.get("collegedate");
    var collegecourse=formelements.get("collegecourse");
    var collegeplace=formelements.get("collegeplace");
    var schooldate=formelements.get("schooldate");
    var schoolcourse=formelements.get("schoolcourse");
    var schoolplace=formelements.get("schoolplace");
    var school1date=formelements.get("school1date");
    var school1course=formelements.get("school1course");
    var school1place=formelements.get("school1place");
    var avatar=formelements.get("avatar");
    //var x = document.getElementById("avatar").value;
    //alert(avatar.name);
    var resume={
        name:name,
        designation:designation,
        objective:objective,
        address:address,
        email:email,
        Phone:Phone,
        LinkedIn:LinkedIn,
        skill1:skill1,
        skill2:skill2,
        skill3:skill3,
        skill4:skill4,
        skill5:skill5,
        collegedate:collegedate,
        collegecourse:collegecourse,
        collegeplace:collegeplace,
        schoolcourse:schoolcourse,
        schooldate:schooldate,
        schoolplace:schoolplace,
        school1course:school1course,
        school1date:school1date,
        school1place:school1place
    }
    resumedata=JSON.parse(localStorage.getItem("resume") || "[]");
    resumedata.push(resume);
    localStorage.setItem("resume", JSON.stringify(resumedata));
    }

    function showdata(){
        var keys=JSON.parse(localStorage.getItem("resume"));
        if(keys!=null){
            for(i=0;i<keys.length;i++)
            {
              var s=keys[i];
            document.getElementById("resumename").innerHTML= s.name;
            document.getElementById("resumeobjective").innerHTML= s.objective;
            document.getElementById("resumedesignation").innerHTML= s.designation;
            document.getElementById("resumeaddress").innerHTML= s.address;
            document.getElementById("resumeemail").innerHTML= s.email;
            document.getElementById("resumephone").innerHTML= s.Phone;
            document.getElementById("resumelinkedin").innerHTML= s.LinkedIn;
            document.getElementById("resumeskill1").innerHTML= s.skill1;
            document.getElementById("resumeskill2").innerHTML= s.skill2;
            document.getElementById("resumeskill3").innerHTML= s.skill3;
            document.getElementById("resumeskill4").innerHTML= s.skill4;
            document.getElementById("resumeskill5").innerHTML= s.skill5;
            document.getElementById("collegedate").innerHTML= s.collegedate;
            document.getElementById("collegecourse").innerHTML= s.collegecourse;
            document.getElementById("collegeplace").innerHTML= s.collegeplace;
            document.getElementById("schooldate").innerHTML= s.schooldate;
            document.getElementById("schoolcourse").innerHTML= s.schoolcourse;
            document.getElementById("schoolplace").innerHTML= s.schoolplace;
            document.getElementById("school1date").innerHTML= s.school1date;
            document.getElementById("school1course").innerHTML= s.school1course;
            document.getElementById("school1place").innerHTML= s.school1place;
            }   
        }
}
    