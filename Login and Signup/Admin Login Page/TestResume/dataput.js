var arrayy=[];
function storedata(){
    
    
    var formdata=document.forms.formmid;
    var formelements = new FormData(formdata);
    
    

    // Contact Information
    var objective=formelements.get("objective");
    var Github=formelements.get("Github");
    var address=formelements.get("address");
    var email=formelements.get("email");
    var Phone=formelements.get("Phone");
    var LinkedIn=formelements.get("LinkedIn");


    // Skills
    var skill1=formelements.get("skill-1");
    var skill2=formelements.get("skill-2");
    var skill3=formelements.get("skill-3");
    var skill4=formelements.get("skill-4");
    var skill5=formelements.get("skill-5");


    // Education 
    var collegename=formelements.get("collegename");
    var collegecourse=formelements.get("collegecourse");
    var collegedate=formelements.get("collegedate");
    var schoolname1=formelements.get("schoolname1");
    var schoolcourse1=formelements.get("schoolcourse1");
    var schooldate1=formelements.get("schooldate1");
    var schoolname=formelements.get("schoolname");
    var schoolcourse=formelements.get("schoolcourse");
    var schooldate=formelements.get("schooldate");

    // Projects
    var projectname1=formelements.get("projectname1");
    var projectdis1=formelements.get("projectdis1");
    var projectdate1=formelements.get("projectdate1");
    var projectname2=formelements.get("projectname2");
    var projectdis2=formelements.get("projectdis2");
    var projectdate2=formelements.get("projectdate2");


    // Certificate
    var Certiname1=formelements.get("Certiname1");
    var Certidis1=formelements.get("Certidis1");
    var Certidate1=formelements.get("Certidate1");
    var Certiname2=formelements.get("Certiname2");
    var Certidis2=formelements.get("Certidis2");
    var Certidate2=formelements.get("Certidate2");

    // Training
    var Trainingname=formelements.get("Trainingname");
    var Trainingdis=formelements.get("Trainingdis");

    // Hobbies

    var Hobbi1=formelements.get("Hobbi1");
    var Hobbi2=formelements.get("Hobbi2");
    var Hobbi3=formelements.get("Hobbi3");

    // Language Know
    var lang1=formelements.get("lang1");
    var lang2=formelements.get("lang2");
    

    // introduction
    var fname=formelements.get("First_Name");
    var lname=formelements.get("Last_Name");
    var name=fname+" "+lname;
    
    // Here we create object in which we stored all form details
    var resume={
        name:name,Github:Github,
        objective:objective,address:address,email:email,Phone:Phone,LinkedIn:LinkedIn,
        skill1:skill1,skill2:skill2,skill3:skill3,skill4:skill4,skill5:skill5,
        collegename:collegename,collegecourse:collegecourse,collegedate:collegedate,
        schoolcourse:schoolcourse,
        schoolname1:schoolname1,
        schoolcourse1:schoolcourse1,
        schooldate1:schooldate1,
        schoolname:schoolname,schoolcourse:schoolcourse ,
        schooldate:schooldate,
        projectdate1:projectdate1,
        projectname1:projectname1,
        projectdis1:projectdis1,
        projectname2:projectname2,
        projectdis2:projectdis2,
        projectdate2:projectdate2,

        Certiname1:Certiname1,Certidis1:Certidis1,Certidate1:Certidate1,Certiname2:Certiname2,Certidis2:Certidis2,Certidate2:Certidate2,

        Trainingname:Trainingname,Trainingdis:Trainingdis,


        Hobbi1:Hobbi1,Hobbi2:Hobbi2,Hobbi3:Hobbi3,
        lang1:lang1,lang2:lang2
    }


    // Passing the resume key to the array
    arrayy=JSON.parse(localStorage.getItem("resume") || "[]");

    // pushing the value into the array
    arrayy.push(resume);
    localStorage.setItem("resume", JSON.stringify(arrayy));
    console.log(arrayy);
    window.open("resume.html");
    }
    