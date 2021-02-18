var person = JSON.parse(localStorage.getItem("person"));
document.getElementById("name").innerHTML = person.name;

document.getElementById("occupation").innerHTML = person.occupation;
document.getElementById("phone").innerHTML = person.phone;

document.getElementById("email").innerHTML = person.email;
document.getElementById("github").innerHTML = person.github;
document.getElementById("linkedin").innerHTML = person.linkedin;

var skill = JSON.parse(localStorage.getItem("skills"));
document.getElementById("skil1").innerHTML = skill.skil1;
document.getElementById("skil2").innerHTML = skill.skil2;
document.getElementById("skil3").innerHTML = skill.skil3;
document.getElementById("skil4").innerHTML = skill.skil4;
document.getElementById("skil5").innerHTML = skill.skil5;
document.getElementById("skil6").innerHTML = skill.skil6;
document.getElementById("skil7").innerHTML = skill.skil7;
document.getElementById("skil8").innerHTML = skill.skil8;



var edu = JSON.parse(localStorage.getItem("edu"));

document.getElementById("ed11").innerHTML = edu.edu11;
document.getElementById("ed12").innerHTML = edu.edu12;
document.getElementById("ed13").innerHTML = edu.edu13;
document.getElementById("ed21").innerHTML = edu.edu21;
document.getElementById("ed22").innerHTML = edu.edu22;
document.getElementById("ed23").innerHTML = edu.edu23;
document.getElementById("ed31").innerHTML = edu.edu31;
document.getElementById("ed32").innerHTML = edu.edu32;
document.getElementById("ed33").innerHTML = edu.edu33;



var tring = JSON.parse(localStorage.getItem("train"));
document.getElementById("tring1").innerHTML = tring.training1;
document.getElementById("tring2").innerHTML = tring.training2;
document.getElementById("tring3").innerHTML = tring.training3;
document.getElementById("tring4").innerHTML = tring.training4;

var cert = JSON.parse(localStorage.getItem("cer"));
document.getElementById("cer1").innerHTML = cert.cerr1;
document.getElementById("cer2").innerHTML = cert.cerr2;
document.getElementById("cer3").innerHTML = cert.cerr3;
document.getElementById("cer4").innerHTML = cert.cerr4;


var project = JSON.parse(localStorage.getItem("projects"));
document.getElementById("pro11").innerHTML = project.pro11;
document.getElementById("pro12").innerHTML = project.pro12;

document.getElementById("pro21").innerHTML = project.pro21;
document.getElementById("pro22").innerHTML = project.pro22;

document.getElementById("pro31").innerHTML = project.pro31;
document.getElementById("pro32").innerHTML = project.pro32;

document.getElementById("pro41").innerHTML = project.pro41;
document.getElementById("pro42").innerHTML = project.pro42;


var importntlnk = JSON.parse(localStorage.getItem("importantlink"));
document.getElementById("imp1").innerHTML = importntlnk.importlink1;
document.getElementById("imp2").innerHTML = importntlnk.importlink2;
document.getElementById("imp3").innerHTML = importntlnk.importlink3;
var cer = JSON.parse(localStorage.getItem("cer"));

document.getElementById("cer1").innerHTML = cer.cerr1;
document.getElementById("cer2").innerHTML = cer.cerr2;
document.getElementById("cer3").innerHTML = cer.cerr3;
document.getElementById("cer4").innerHTML = cer.cerr4;



var language = JSON.parse(localStorage.getItem("language"));
document.getElementById("lang1").innerHTML = language.lang1;
document.getElementById("lang2").innerHTML = language.lang2;


var intrest = JSON.parse(localStorage.getItem("intrest"));
document.getElementById("int1").innerHTML = intrest.intrst1;
document.getElementById("int2").innerHTML = intrest.intrst2;