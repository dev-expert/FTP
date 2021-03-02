function login() {


    var name1 = document.getElementById('name').value;
    var occupation = document.getElementById('occupation').value;

    var phone = document.getElementById('phonenumber').value;
    var email = document.getElementById('email').value;
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;

    var skil1 = document.getElementById('skil1').value;
    var skil2 = document.getElementById('skil2').value;
    var skil3 = document.getElementById('skil3').value;
    var skil4 = document.getElementById('skil4').value;
    var skil5 = document.getElementById('skil5').value;
    var skil6 = document.getElementById('skil6').value;
    var skil7 = document.getElementById('skil7').value;
    var skil8 = document.getElementById('skil8').value;

    var certi1 = document.getElementById("cer1").value;
    var certi2 = document.getElementById("cer2").value;
    var certi3 = document.getElementById("cer3").value;
    var certi4 = document.getElementById("cer4").value;

    var object2 = {
        certi1: certi1,
        certi2: certi2,
        certi3: certi3,
        certi4: certi4
    };
    localStorage.setItem("person", JSON.stringify(object2));

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


    var obj1 = {
        name: name1, occupation: occupation, phone: phone,
        email: email, github: github, linkedin: linkedin
    };

    //localStorage.setItem("person", JSON.stringify(obj1));

    var skill = {
        skil1: skil1, skil2: skil2, skil3: skil3, skil4: skil4,
        skil5: skil5, skil6: skil6, skil7: skil7, skil8: skil8
    };

    //localStorage.setItem("skills", JSON.stringify(skill));

    var project = {
        pro11: pro11, pro12: pro12, pro21: pro21, pro22: pro22, pro31: pro31,
        pro32: pro32, pro41: pro41, pro42: pro42
    };

    //localStorage.setItem("projects", JSON.stringify(project));

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
    };

    localStorage.setItem("edu", JSON.stringify(edu));

    var cer = { cerr1: cer1, cerr2: cer2, cerr3: cer3, cerr4: cer4 };
    localStorage.setItem("cer", JSON.stringify(cer));


    var trainingg1 = document.getElementById("training1").value;
    var trainingg2 = document.getElementById("training2").value;
    var trainingg3 = document.getElementById("training3").value;
    var trainingg4 = document.getElementById("training4").value;



    var train = {
        training1: trainingg1, training2: trainingg2, training3: trainingg3, training4: trainingg4
    };
    localStorage.setItem("train", JSON.stringify(train));


    var importlink1 = document.getElementById("impot1").value;
    var importlink2 = document.getElementById("impot2").value;
    var importlink3 = document.getElementById("impot3").value;
    var importantlink = {
        importlink1: importlink1, importlink2: importlink2, importlink3: importlink3
    };
    localStorage.setItem("importantlink", JSON.stringify(importantlink));

    var intrst1 = document.getElementById("int1").value;
    var intrst2 = document.getElementById("int2").value;

    var intrest = {
        intrst1: intrst1,
        intrst2: intrst2
    };
    //localStorage.setItem("intrest", JSON.stringify(intrest));


    var lang1 = document.getElementById("lang1").value;
    var lang2 = document.getElementById("lang2").value;

    var language = {
        lang1: lang1,
        lang2: lang2
    };
    //localStorage.setItem("language", JSON.stringify(language));

    var objectss = {
        // certi1: certi1,
        // certi2: certi2,
        // certi3: certi3,
        // certi4: certi4,


        name: name1, occupation: occupation, phone: phone,
        email: email, github: github, linkedin: linkedin,

        skil1: skil1, skil2: skil2, skil3: skil3, skil4: skil4,
        skil5: skil5, skil6: skil6, skil7: skil7, skil8: skil8,


        pro11: pro11, pro12: pro12, pro21: pro21, pro22: pro22, pro31: pro31,
        pro32: pro32, pro41: pro41, pro42: pro42,


        edu11: edu11, edu12: edu12, edu13: edu13, edu21: edu21, edu22: edu22, edu23: edu23,
        edu31: edu31, edu32: edu32, edu33: edu33,

        training1: trainingg1, training2: trainingg2, training3: trainingg3, training4: trainingg4,

        importlink1: importlink1, importlink2: importlink2, importlink3: importlink3,
        certi1: certi1, certi2: certi2, certi3: certi3, certi4: certi4,


        intrst1: intrst1,
        intrst2: intrst2,


        lang1: lang1,
        lang2: lang2

    }


    fetch('http://localhost:5000/exportdata', {
        method: 'POST',
        body: JSON.stringify(objectss),
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}