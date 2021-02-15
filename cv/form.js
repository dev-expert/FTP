function login()
{
    debugger;

var name1 = document.getElementById('name1').value;
var user = document.getElementById('email').value;
var phn1 = document.getElementById('phone').value;
var li = document.getElementById('li').value;

var skills1 = document.getElementById('skill1').value;
var skills2 = document.getElementById('skill2').value;
var skills3 = document.getElementById('skill3').value;
var skills4 = document.getElementById('skill4').value;
var skills5 = document.getElementById('skill5').value;
var skills6 = document.getElementById('skill6').value;
var skills7 = document.getElementById('skill7').value;
var skills8 = document.getElementById('skill8').value;
var skills9 = document.getElementById('skill9').value;


var lang1 = document.getElementById('lang1').value;
var lang2 = document.getElementById('lang2').value;
var lang3 = document.getElementById('lang2').value;
var lang4 = document.getElementById('lang2').value;


var int1 = document.getElementById('int1').value;
var int2 = document.getElementById('int2').value;
var int3 = document.getElementById('int3').value;
var int4 = document.getElementById('int4').value;
var int5 = document.getElementById('int5').value;

var edu11 = document.getElementById('edu11').value;
var edu12 = document.getElementById('edu12').value;
var edu13 = document.getElementById('edu13').value;

var edu21 = document.getElementById('edu21').value;
var edu22= document.getElementById('edu22').value;
var edu23 = document.getElementById('edu23').value;

var edu31 = document.getElementById('edu31').value;
var edu32 = document.getElementById('edu32').value;
var edu33 = document.getElementById('edu33').value;

var pro11 = document.getElementById('pro11').value;
var pro12 = document.getElementById('pro12').value;

var pro21 = document.getElementById('pro21').value;
var pro22 = document.getElementById('pro22').value;

var pro31 = document.getElementById('pro31').value;
var pro32 = document.getElementById('pro32').value;

var pro41 = document.getElementById('pro41').value;
var pro42 = document.getElementById('pro42').value;

var cer1 = document.getElementById('cer1').value;
var cer2 = document.getElementById('cer2').value;
var cer3 = document.getElementById('cer3').value;
var cer4 = document.getElementById('cer4').value;

var arc11 = document.getElementById('ach1').value;
var arc12 = document.getElementById('ach1info').value;
var arc21 = document.getElementById('ach2').value;
var arc22 = document.getElementById('ach2info').value;

var org1 = document.getElementById('org1').value;
var org12 = document.getElementById('org1info').value;
var obj1 = {name:name1,email:user,phone:phn1,
link:li};

localStorage.setItem("person",JSON.stringify(obj1));

var skill = {skill1:skills1,skill2:skills2,skill3:skills3,skill4:skills4,
skill5:skills5,skill6:skills6,skill7:skills7,skill8:skills8,skill9:skills9}

localStorage.setItem("skills",JSON.stringify(skill));

var lan= {lan1:lang1,lan2:lang2,lan3:lang3,lan4:lang4

}
localStorage.setItem("lan",JSON.stringify(lan));

var intr={int1:int1,int2:int2,int3:int3,int4:int4,int5:int5,

}
localStorage.setItem("intr",JSON.stringify(intr));

var edu={edu11:edu11,edu12:edu12,edu13:edu13}
localStorage.setItem("edu",JSON.stringify(edu));

var edu1={edu21:edu21,edu22:edu22,edu23:edu23}
localStorage.setItem("edu1",JSON.stringify(edu1));

var edu2={edu31:edu31,edu32:edu32,edu33:edu33}
localStorage.setItem("edu2",JSON.stringify(edu2));
var pro ={pro11:pro11,pro12:pro12,pro21:pro21,pro22:pro22,pro31:pro31,pro32:pro32,pro41:pro41,pro42:pro42}

localStorage.setItem("pro",JSON.stringify(pro));

var cert={cer1:cer1,cer2:cer2,cer3:cer3,cer4:cer4}
localStorage.setItem("cert",JSON.stringify(cert));


var ach={arc11:arc11,arc12:arc12,arc21:arc21,arc22:arc22}
 
 localStorage.setItem("ach",JSON.stringify(ach))

var org ={
    org1:org1,org12: org12}

 localStorage.setItem("org",JSON.stringify(org))
}