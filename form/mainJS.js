var person =  JSON.parse(localStorage.getItem("person11"));
document.getElementById("name").innerHTML = person.name;

document.getElementById("dis1").innerHTML = person.dis;
document.getElementById("dis2").innerHTML = person.dis1;

document.getElementById("iemail").innerHTML = person.email;
document.getElementById("iphone").innerHTML = person.phone;
document.getElementById("ild").innerHTML = person.link;
document.getElementById("iadd").innerHTML = person.Address;


var skill = JSON.parse(localStorage.getItem("skills"));
let l = skill.length;
alert(l);
var temp;
for(var i =1;i<=l;i++)
{

    document.getElementById("skill"+i).style.display = "block";
    document.getElementById("skill"+i).innerHTML = skill[i-1];
}

var lang = JSON.parse(localStorage.getItem("lang"));
document.getElementById("lan1").innerHTML = lang.lan1;
document.getElementById("lan2").innerHTML = lang.lan2;

var inter = JSON.parse(localStorage.getItem("inter"));
document.getElementById("int1").innerHTML = inter.int1;
document.getElementById("int2").innerHTML = inter.int2;
document.getElementById("int3").innerHTML = inter.int3;

var project = JSON.parse(localStorage.getItem("projects"));
document.getElementById("pro11").innerHTML = project.pro11;
document.getElementById("pro12").innerHTML = project.pro12;

document.getElementById("pro21").innerHTML = project.pro21;
document.getElementById("pro22").innerHTML = project.pro22;

document.getElementById("pro31").innerHTML = project.pro31;
document.getElementById("pro32").innerHTML = project.pro32;

document.getElementById("pro41").innerHTML = project.pro41;
document.getElementById("pro42").innerHTML = project.pro42;


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


var cer = JSON.parse(localStorage.getItem("cer"));

document.getElementById("cer1").innerHTML = cer.cer1;
document.getElementById("cer2").innerHTML = cer.cer2;
document.getElementById("cer3").innerHTML = cer.cer3;
document.getElementById("cer4").innerHTML = cer.cer4;



