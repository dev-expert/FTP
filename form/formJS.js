function basicData1() {
//debugger;
    var name1 = document.getElementById('name').value;
    var user = document.getElementById('email').value;
    var phn1 = document.getElementById('phone').value;
    var add = document.getElementById('Address').value;
    var dis = document.getElementById('dis').value;
    var dis1 = document.getElementById('dis1').value;
    var li = document.getElementById('li').value;

    var obj1 = {
        name: name1, email: user, phone: phn1,
        Address: add, link: li, dis: dis, dis1: dis1
    };

    localStorage.setItem("person11", JSON.stringify(obj1));

    var skills1 = document.getElementById('skill1').value;
    var skills2 = document.getElementById('skill2').value;
    var skills3 = document.getElementById('skill3').value;
    var skills4 = document.getElementById('skill4').value;
    var skills5 = document.getElementById('skill5').value;
    var skills6 = document.getElementById('skill6').value;
    var skills7 = document.getElementById('skill7').value;
    var skills8 = document.getElementById('skill8').value;
    var skills9 = document.getElementById('skill9').value;

    var skill = {
        skill1: skills1, skill2: skills2, skill3: skills3, skill4: skills4,
        skill5: skills5, skill6: skills6, skill7: skills7,
        skill8: skills8, skill9: skills9
    }
    localStorage.setItem("skills", JSON.stringify(skill));


    var lan1 = document.getElementById('lan1').value;
    var lan2 = document.getElementById('lan2').value;

    var lan = { lan1: lan1, lan2: lan2 }
    localStorage.setItem("lang", JSON.stringify(lan));


    var int1 = document.getElementById('int1').value;
    var int2 = document.getElementById('int2').value;
    var int3 = document.getElementById('int3').value;

    var int = {
        int1: int1, int2: int2, int3: int3
    }
    localStorage.setItem("inter", JSON.stringify(int));


    var edu11 = document.getElementById('edu11').value;
    var edu12 = document.getElementById('edu12').value;
    var edu13 = document.getElementById('edu13').value;

    var edu21 = document.getElementById('edu21').value;
    var edu22 = document.getElementById('edu22').value;
    var edu23 = document.getElementById('edu23').value;

    var edu31 = document.getElementById('edu31').value;
    var edu32 = document.getElementById('edu32').value;
    var edu33 = document.getElementById('edu33').value;

    var edu = {
        edu11: edu11, edu12: edu12, edu13: edu13, edu21: edu21, edu22: edu22, edu23: edu23,
        edu31: edu31, edu32: edu32, edu33: edu33
    }

    localStorage.setItem("edu", JSON.stringify(edu));


    var pro11 = document.getElementById('pro11').value;
    var pro12 = document.getElementById('pro12').value;

    var pro21 = document.getElementById('pro21').value;
    var pro22 = document.getElementById('pro22').value;

    var pro31 = document.getElementById('pro31').value;
    var pro32 = document.getElementById('pro32').value;

    var pro41 = document.getElementById('pro41').value;
    var pro42 = document.getElementById('pro42').value;

    var project = {
        pro11: pro11, pro12: pro12, pro21: pro21, pro22: pro22, pro31: pro31,
        pro32: pro32, pro41: pro41, pro42: pro42
    }

    localStorage.setItem("projects", JSON.stringify(project));


    var cer1 = document.getElementById('cer1').value;
        var cer2 = document.getElementById('cer2').value;
        var cer3 = document.getElementById('cer3').value;
        var cer4 = document.getElementById('cer4').value;
    
        var cer = { cer1: cer1, cer2: cer2, cer3: cer3, cer4: cer4 }
        localStorage.setItem("cer", JSON.stringify(cer));

    //forSkill();
    location.replace("main1.html");
}

function forSkill(){
    document.getElementById("basicData12").style.display = "none";
    document.getElementById("skills").style.display = "block";
}

function skil() {
    document.getElementById("skills").style.display = "none";
    document.getElementById("lang").style.display = "block";
}

function lange() {
//debugger;
    document.getElementById("lang").style.display = "none";
    document.getElementById("inter").style.display = "block";

    
}

function inter() {

    document.getElementById("inter").style.display = "none";
    document.getElementById("education").style.display = "block";


    
}

function edu() {

    document.getElementById("education").style.display = "none";
    document.getElementById("projects").style.display = "block";

    
}

function project() {

    document.getElementById("projects").style.display = "none";
    document.getElementById("certi").style.display = "block";


    
}

function submitData() {
    
        document.getElementById("certi").style.display = "none";
    
        


    alert("abc");
}



function backcerti() {
    document.getElementById("certi").style.display = "none";
    document.getElementById("projects").style.display = "block";
}


function backproject() {

    document.getElementById("projects").style.display = "none";
    document.getElementById("education").style.display = "block";
}

function backedu() {

    document.getElementById("education").style.display = "none";
    document.getElementById("inter").style.display = "block";
}

function backint() {

    document.getElementById("inter").style.display = "none";
    document.getElementById("lang").style.display = "block";
}

function backlang() {

    document.getElementById("lang").style.display = "none";
    document.getElementById("skills").style.display = "block";
}

function backskills() {

    document.getElementById("skills").style.display = "none";
    document.getElementById("basicData12").style.display = "block";
}



