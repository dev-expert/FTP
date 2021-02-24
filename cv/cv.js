
var person = JSON.parse(localStorage.getItem("person"));
//alert(person.name);
document.getElementById("name1").innerHTML = person.name1;
document.getElementById("email1").innerHTML = person.email;
document.getElementById("num").innerHTML = person.phone;
document.getElementById("linkdin").innerHTML = person.link;

var skill = JSON.parse(localStorage.getItem("skills"));
document.getElementById("skill1").innerHTML = skill.skill1;
document.getElementById("skill2").innerHTML = skill.skill2;
document.getElementById("skill3").innerHTML = skill.skill3;
document.getElementById("skill4").innerHTML = skill.skill4;
document.getElementById("skill5").innerHTML = skill.skill5;
document.getElementById("skill6").innerHTML = skill.skill6;
document.getElementById("skill7").innerHTML = skill.skill7;
document.getElementById("skill8").innerHTML = skill.skill8;
document.getElementById("skill9").innerHTML = skill.skill9;
var lang1 =JSON.parse(localStorage.getItem("lan"))
document.getElementById("lang1").innerHTML = lang1.lan1;
document.getElementById("lang2").innerHTML = lang1.lan2;
document.getElementById("lang3").innerHTML = lang1.lan3;
document.getElementById("lang4").innerHTML = lang1.lan4;
var intr = JSON.parse(localStorage.getItem("intr"))
document.getElementById("int1").innerHTML = intr.int1;
document.getElementById("int2").innerHTML = intr.int2;
document.getElementById("int3").innerHTML = intr.int3;
document.getElementById("int4").innerHTML = intr.int4;
document.getElementById("int5").innerHTML = intr.int5;
var edu =JSON.parse(localStorage.getItem("edu"))
document.getElementById("clg1").innerHTML = edu.edu11;
document.getElementById("percent1").innerHTML = edu.edu12;
document.getElementById("stream1").innerHTML = edu.edu13;

var edu1 =JSON.parse(localStorage.getItem("edu1"))
document.getElementById("clg2").innerHTML = edu1.edu21;
document.getElementById("percent2").innerHTML = edu1.edu22;
document.getElementById("stream2").innerHTML = edu1.edu23;

var edu2 =JSON.parse(localStorage.getItem("edu2"))
document.getElementById("clg3").innerHTML = edu2.edu31;
document.getElementById("percent3").innerHTML = edu2.edu32;
document.getElementById("location3").innerHTML = edu2.edu33;

var pro=JSON.parse(localStorage.getItem("pro"))
document.getElementById("pro11").innerHTML = pro.pro11;
document.getElementById("pro12").innerHTML = pro.pro12;
document.getElementById("pro21").innerHTML = pro.pro21;
document.getElementById("pro22").innerHTML = pro.pro22;
document.getElementById("pro31").innerHTML = pro.pro31;
document.getElementById("pro32").innerHTML = pro.pro32;
document.getElementById("pro41").innerHTML = pro.pro41;
document.getElementById("pro42").innerHTML = pro.pro42;

var cert=JSON.parse(localStorage.getItem("cert"))
document.getElementById("certi1").innerHTML = cert.cer1;
document.getElementById("certi1info").innerHTML = cert.cer2;
document.getElementById("certi2").innerHTML = cert.cer3;
document.getElementById("certi2info").innerHTML = cert.cer4;

var ach=JSON.parse(localStorage.getItem("qwe"))

// document.getElementById("ach1").innerHTML = ach.arc11;
// document.getElementById("ach1info").innerHTML = ach.arc12;
// document.getElementById("ach2").innerHTML = ach.arc21;
// document.getElementById("ach2info").innerHTML = ach.arc22;


let l = ach.length;
//alert(l);
//var temp;
for(var i =1;i<=l;i++)
{

document.getElementById("ach"+i).style.display = "block";
document.getElementById("ach"+i).innerHTML = ach[i-1];
}

var org=JSON.parse(localStorage.getItem("org"))
document.getElementById("org1").innerHTML = org.org1;
document.getElementById("org1info").innerHTML = org.org12;

var bp=JSON.parse(localStorage.getItem("bp"))
document.getElementById("duration1").innerHTML = bp.bp1;
document.getElementById("duration12").innerHTML = bp.bp2;
document.getElementById("duration2").innerHTML = bp.bp3;
document.getElementById("duration22").innerHTML = bp.bp4;
document.getElementById("duration3").innerHTML = bp.bp5;
document.getElementById("duration32").innerHTML = bp.bp6;
document.getElementById("git").innerHTML = bp.bp7;
document.getElementById("birth").innerHTML = bp.bp8;
var old = [];
var old = JSON.parse(localStorage.getItem("achievements"));
console.log(old);
// for (var i = 0; i < bp[0].achive; i++) {
// document.getElementById(`achievement_${i+1}`).innerHTML = old[i]
// }
