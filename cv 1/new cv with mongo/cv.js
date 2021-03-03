function callme(){
var data;
fetch("http://localhost:5000/importdata", {
    method: "GET", // or 'PUT'
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
})
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        keys = data;
        showdatamongo();

    })
    .catch((error) => {
        console.error("Error:", error);
    });

function showdatamongo(){
for (i = 0; i < keys.length; i++) {
    s = keys[i];
    // var person = JSON.parse(localStorage.getItem("person"));
    //alert(person.name);
    document.getElementById("name1").innerHTML = s.name;
    document.getElementById("email1").innerHTML = s.email;
    document.getElementById("num").innerHTML = s.mobile;
    document.getElementById("linkdin").innerHTML = s.linkdin;

    
    document.getElementById("skill1").innerHTML = s.skill_1;
    document.getElementById("skill2").innerHTML = s.skill_2;
    document.getElementById("skill3").innerHTML = s.skill_3;
    document.getElementById("skill4").innerHTML = s.skill_4;
    document.getElementById("skill5").innerHTML = s.skill_5;
    document.getElementById("skill6").innerHTML = s.skill_6;
    document.getElementById("skill7").innerHTML = s.skill_7;
    document.getElementById("skill8").innerHTML = s.skill_8;
    document.getElementById("skill9").innerHTML = s.skill_9;
    
    document.getElementById("lang1").innerHTML = s.language_1;
    document.getElementById("lang2").innerHTML = s.language_2;
    document.getElementById("lang3").innerHTML = s.language_3;
    document.getElementById("lang4").innerHTML = s.language_4;
   
    document.getElementById("int1").innerHTML = s.interest_1;
    document.getElementById("int2").innerHTML = s.interest_2;
    document.getElementById("int3").innerHTML = s.interest_3;
    document.getElementById("int4").innerHTML = s.interest_4;
    document.getElementById("int5").innerHTML = s.interest_5;
   
    document.getElementById("clg1").innerHTML = s.edu11;
    document.getElementById("percent1").innerHTML = s.edu12;
    document.getElementById("stream1").innerHTML = s.edu13;

    // var edu1 = JSON.parse(localStorage.getItem("edu1"))
    document.getElementById("clg2").innerHTML = s.edu21;
    document.getElementById("percent2").innerHTML = s.edu22;
    document.getElementById("stream2").innerHTML = s.edu23;

    // var edu2 = JSON.parse(localStorage.getItem("edu2"))
    document.getElementById("clg3").innerHTML = s.edu31;
    document.getElementById("percent3").innerHTML = s.edu32;
    document.getElementById("location3").innerHTML = s.edu33;

    // // var pro = JSON.parse(localStorage.getItem("pro"))
    document.getElementById("pro11").innerHTML = s.project1_name;
    document.getElementById("pro12").innerHTML = s.project1_details;
    document.getElementById("pro21").innerHTML = s.project2_name;
    document.getElementById("pro22").innerHTML = s.project2_details;
    document.getElementById("pro31").innerHTML = s.project3_name;
    document.getElementById("pro32").innerHTML = s.project3_details;
    document.getElementById("pro41").innerHTML = s.project4_name;
    document.getElementById("pro42").innerHTML = s.project4_details;

    // // var cert = JSON.parse(localStorage.getItem("cert"))
    document.getElementById("certi1").innerHTML = s.certificate_1;
    document.getElementById("certi1info").innerHTML = s.certificate_2;
    document.getElementById("certi2").innerHTML = s.certificate_3;
    document.getElementById("certi2info").innerHTML = s.certificate_4;

    // var ach = JSON.parse(localStorage.getItem("qwe"))

}
}
}

// document.getElementById("ach1").innerHTML = ach.arc11;
// document.getElementById("ach1info").innerHTML = ach.arc12;
// document.getElementById("ach2").innerHTML = ach.arc21;
// document.getElementById("ach2info").innerHTML = ach.arc22;


// let l = ach.length;
// //alert(l);
// //var temp;
// for(var i =1;i<=l;i++)
// {

// document.getElementById("ach"+i).style.display = "block";
// document.getElementById("ach"+i).innerHTML = ach[i-1];
// }

// var org=JSON.parse(localStorage.getItem("org"))
// document.getElementById("org1").innerHTML = org.org1;
// document.getElementById("org1info").innerHTML = org.org12;

// var bp=JSON.parse(localStorage.getItem("bp"))
// document.getElementById("duration1").innerHTML = bp.bp1;
// document.getElementById("duration12").innerHTML = bp.bp2;
// document.getElementById("duration2").innerHTML = bp.bp3;
// document.getElementById("duration22").innerHTML = bp.bp4;
// document.getElementById("duration3").innerHTML = bp.bp5;
// document.getElementById("duration32").innerHTML = bp.bp6;
// document.getElementById("git").innerHTML = bp.bp7;
// document.getElementById("birth").innerHTML = bp.bp8;
// var old = [];
// var old = JSON.parse(localStorage.getItem("achievements"));
// console.log(old);
// // for (var i = 0; i < bp[0].achive; i++) {
// // document.getElementById(`achievement_${i+1}`).innerHTML = old[i]
// // }
