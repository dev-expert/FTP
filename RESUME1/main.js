var person = JSON.parse(localStorage.getItem("person"));
// document.getElementById("name").innerHTML = person.name;

// document.getElementById("occupation").innerHTML = person.occupation;
// document.getElementById("phone").innerHTML = person.phone;

// document.getElementById("email").innerHTML = person.email;
// document.getElementById("github").innerHTML = person.github;
// document.getElementById("linkedin").innerHTML = person.linkedin;

var skill = JSON.parse(localStorage.getItem("skills"));
// document.getElementById("skil1").innerHTML = skill.skil1;
// document.getElementById("skil2").innerHTML = skill.skil2;
// document.getElementById("skil3").innerHTML = skill.skil3;
// document.getElementById("skil4").innerHTML = skill.skil4;
// document.getElementById("skil5").innerHTML = skill.skil5;
// document.getElementById("skil6").innerHTML = skill.skil6;
// document.getElementById("skil7").innerHTML = skill.skil7;
// document.getElementById("skil8").innerHTML = skill.skil8;



var edu = JSON.parse(localStorage.getItem("edu"));

// document.getElementById("ed11").innerHTML = edu.edu11;
// document.getElementById("ed12").innerHTML = edu.edu12;
// document.getElementById("ed13").innerHTML = edu.edu13;
// document.getElementById("ed21").innerHTML = edu.edu21;
// document.getElementById("ed22").innerHTML = edu.edu22;
// document.getElementById("ed23").innerHTML = edu.edu23;
// document.getElementById("ed31").innerHTML = edu.edu31;
// document.getElementById("ed32").innerHTML = edu.edu32;
// document.getElementById("ed33").innerHTML = edu.edu33;



var tring = JSON.parse(localStorage.getItem("train"));
// document.getElementById("tring1").innerHTML = tring.training1;
// document.getElementById("tring2").innerHTML = tring.training2;
// document.getElementById("tring3").innerHTML = tring.training3;
// document.getElementById("tring4").innerHTML = tring.training4;

var cert = JSON.parse(localStorage.getItem("cer"));
document.getElementById("cer1").innerHTML = cert.cerr1;
document.getElementById("cer2").innerHTML = cert.cerr2;
document.getElementById("cer3").innerHTML = cert.cerr3;
document.getElementById("cer4").innerHTML = cert.cerr4;


var project = JSON.parse(localStorage.getItem("projects"));
// document.getElementById("pro11").innerHTML = project.pro11;
// document.getElementById("pro12").innerHTML = project.pro12;

// document.getElementById("pro21").innerHTML = project.pro21;
// document.getElementById("pro22").innerHTML = project.pro22;

// document.getElementById("pro31").innerHTML = project.pro31;
// document.getElementById("pro32").innerHTML = project.pro32;

// document.getElementById("pro41").innerHTML = project.pro41;
// document.getElementById("pro42").innerHTML = project.pro42;


var importntlnk = JSON.parse(localStorage.getItem("importantlink"));
// document.getElementById("imp1").innerHTML = importntlnk.importlink1;
// document.getElementById("imp2").innerHTML = importntlnk.importlink2;
// document.getElementById("imp3").innerHTML = importntlnk.importlink3;
var cer = JSON.parse(localStorage.getItem("cer"));

// document.getElementById("cer1").innerHTML = cer.cerr1;
// document.getElementById("cer2").innerHTML = cer.cerr2;
// document.getElementById("cer3").innerHTML = cer.cerr3;
// document.getElementById("cer4").innerHTML = cer.cerr4;



var language = JSON.parse(localStorage.getItem("language"));
// document.getElementById("lang1").innerHTML = language.lang1;
// document.getElementById("lang2").innerHTML = language.lang2;


var intrest = JSON.parse(localStorage.getItem("intrest"));
// document.getElementById("int1").innerHTML = intrest.intrst1;
// document.getElementById("int2").innerHTML = intrest.intrst2;

fetch("http://localhost:5000/importdata")
    .then(resposne => resposne.json())
    .then(data => {
        console.log(data)
        document.getElementById("name").innerHTML = data[data.length - 1].name;

        document.getElementById("occupation").innerHTML = data[data.length - 1].occupation;
        document.getElementById("phone").innerHTML = data[data.length - 1].phone;

        document.getElementById("email").innerHTML = data[data.length - 1].email;
        document.getElementById("github").innerHTML = data[data.length - 1].github;
        document.getElementById("linkedin").innerHTML = data[data.length - 1].linkedin;



        document.getElementById("skil1").innerHTML = data[data.length - 1].skil1;
        document.getElementById("skil2").innerHTML = data[data.length - 1].skil2;
        document.getElementById("skil3").innerHTML = data[data.length - 1].skil3;
        document.getElementById("skil4").innerHTML = data[data.length - 1].skil4;
        document.getElementById("skil5").innerHTML = data[data.length - 1].skil5;
        document.getElementById("skil6").innerHTML = data[data.length - 1].skil6;
        document.getElementById("skil7").innerHTML = data[data.length - 1].skil7;
        document.getElementById("skil8").innerHTML = data[data.length - 1].skil8;





        document.getElementById("ed11").innerHTML = data[data.length - 1].edu11;
        document.getElementById("ed12").innerHTML = data[data.length - 1].edu12;
        document.getElementById("ed13").innerHTML = data[data.length - 1].edu13;
        document.getElementById("ed21").innerHTML = data[data.length - 1].edu21;
        document.getElementById("ed22").innerHTML = data[data.length - 1].edu22;
        document.getElementById("ed23").innerHTML = data[data.length - 1].edu23;
        document.getElementById("ed31").innerHTML = data[data.length - 1].edu31;
        document.getElementById("ed32").innerHTML = data[data.length - 1].edu32;
        document.getElementById("ed33").innerHTML = data[data.length - 1].edu33;




        document.getElementById("tring1").innerHTML = data[data.length - 1].training1;
        document.getElementById("tring2").innerHTML = data[data.length - 1].training2;
        document.getElementById("tring3").innerHTML = data[data.length - 1].training3;
        document.getElementById("tring4").innerHTML = data[data.length - 1].training4;



        document.getElementById("cer1").innerHTML = data[data.length - 1].certi1;
        document.getElementById("cer2").innerHTML = data[data.length - 1].certi2;
        document.getElementById("cer3").innerHTML = data[data.length - 1].certi3;
        document.getElementById("cer4").innerHTML = data[data.length - 1].certi4;



        document.getElementById("pro11").innerHTML = data[data.length - 1].pro11;
        document.getElementById("pro12").innerHTML = data[data.length - 1].pro12;

        document.getElementById("pro21").innerHTML = data[data.length - 1].pro21;
        document.getElementById("pro22").innerHTML = data[data.length - 1].pro22;

        document.getElementById("pro31").innerHTML = data[data.length - 1].pro31;
        document.getElementById("pro32").innerHTML = data[data.length - 1].pro32;

        document.getElementById("pro41").innerHTML = data[data.length - 1].pro41;
        document.getElementById("pro42").innerHTML = data[data.length - 1].pro42;




        document.getElementById("imp1").innerHTML = data[data.length - 1].importlink1;
        document.getElementById("imp2").innerHTML = data[data.length - 1].importlink2;
        document.getElementById("imp3").innerHTML = data[data.length - 1].importlink3;



        // document.getElementById("cer1").innerHTML = data[data.length - 1].cerr1;
        // document.getElementById("cer2").innerHTML = data[data.length - 1].cerr2;
        // document.getElementById("cer3").innerHTML = data[data.length - 1].cerr3;
        // document.getElementById("cer4").innerHTML = data[data.length - 1].cerr4;




        document.getElementById("lang1").innerHTML = data[data.length - 1].lang1;
        document.getElementById("lang2").innerHTML = data[data.length - 1].lang2;



        document.getElementById("int1").innerHTML = data[data.length - 1].intrst1;
        document.getElementById("int2").innerHTML = data[data.length - 1].intrst2;

    })
