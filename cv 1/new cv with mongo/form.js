function sendvalue() {
    var name = document.getElementById("name1").value;
    var email_address = document.getElementById('email').value;
    var mobile_number = document.getElementById('phone').value;
    var linkedin = document.getElementById('li').value;
    var github = document.getElementById('git').value;
    var skill_1 = document.getElementById('skill1').value;
    var skill_2 = document.getElementById('skill2').value;
    var skill_3 = document.getElementById('skill3').value;
    var skill_4 = document.getElementById('skill4').value;
    var skill_5 = document.getElementById('skill5').value;
    var skill_6 = document.getElementById('skill6').value;
    var skill_7 = document.getElementById('skill7').value;
    var skill_8 = document.getElementById('skill8').value;
    var skill_9 = document.getElementById('skill9').value;
    var language_1 = document.getElementById('lang1').value;
    var language_2 = document.getElementById('lang2').value;
    var language_3 = document.getElementById('lang3').value;
    var language_4 = document.getElementById('lang4').value;
    var edu11 = document.getElementById('edu11').value;
    var edu12 = document.getElementById('edu12').value;
    var edu13 = document.getElementById('edu13').value;
    var edu14 = document.getElementById('edu14').value;
    var edu15 = document.getElementById('edu15').value;

    var edu21 = document.getElementById('edu21').value;
    var edu22 = document.getElementById('edu22').value;
    var edu23 = document.getElementById('edu23').value;
    var edu24 = document.getElementById('edu24').value;
    var edu25 = document.getElementById('edu25').value;

    var edu31 = document.getElementById('edu31').value;
    var edu32 = document.getElementById('edu32').value;
    var edu33 = document.getElementById('edu33').value;
    var edu34 = document.getElementById('edu34').value;
    var edu35 = document.getElementById('edu35').value;

    var project1_name = document.getElementById('pro11').value;
    var project1_details = document.getElementById('pro12').value;


    var project2_name = document.getElementById('pro21').value;

    var project2_details = document.getElementById('pro22').value;


    var project3_name = document.getElementById('pro31').value;

    var project3_details = document.getElementById('pro32').value;


    var project4_name = document.getElementById('pro41').value;

    var project4_details = document.getElementById('pro42').value;

    var certificate_1 = document.getElementById('cer1').value;
    var certificate_2 = document.getElementById('cer2').value;
    var certificate_3 = document.getElementById('cer3').value;
    var certificate_4 = document.getElementById('cer4').value;

    var interest_1 = document.getElementById('int1').value;
    var interest_2 = document.getElementById('int2').value;
    var interest_3 = document.getElementById('int3').value;
    var interest_4 = document.getElementById('int4').value;
    var interest_5 = document.getElementById('int5').value;

    var data = {
        name: name,
        email: email_address,
        mobile: mobile_number,
        linkdin: linkedin,
        github: github,
        skill_1: skill_1,
        skill_2: skill_2,
        skill_3: skill_3,
        skill_4: skill_4,
        skill_5: skill_5,
        skill_6: skill_6,
        skill_7: skill_7,
        skill_8: skill_8,
        skill_9: skill_9,
        language_1: language_1,
        language_2: language_2,
        language_3: language_3,
        language_4: language_4,
        edu11: edu11,
        edu12: edu12,
        edu13: edu13,
        edu14: edu14,
        edu15: edu15,

        edu21: edu21,
        edu22: edu22,
        edu23: edu23,
        edu24: edu24,
        edu25: edu25,

        edu31: edu31,
        edu32: edu32,
        edu33: edu33,
        edu34: edu34,
        edu35: edu35,
        project1_name: project1_name,

        project1_details: project1_details,


        project2_name: project2_name,

        project2_details: project2_details,


        project3_name: project3_name,

        project3_details: project3_details,


        project4_name: project4_name,

        project4_details: project4_details,
        certificate_1: certificate_1,
        certificate_2: certificate_2,
        certificate_3: certificate_3,
        certificate_4: certificate_4,

        interest_1: interest_1,
        interest_2: interest_2,
        interest_3: interest_3,
        interest_4: interest_4,
        interest_5: interest_5

    };
    console.log(data);

    fetch("http://localhost:5000/exportdata", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}





// // creating array of objects
// -+

// // for (var i = 1; i < achive; i++) {
// //     achievements[i - 1] = document.getElementById(`achievement_${i}`).value;
// //     }



// var passvalue = () => {









//     //dynamically adding values in achievment

//     var achievementsobj = {
//         // arr: arr,
//         name: name,
//         name_description: name_description,
//         email_address: email_address,
//         mobile_number: mobile_number,
//         // location: location,
//         linkedin: linkedin,
//         github: github,
//         // instagram: instagram,
//       
//       




//        
//         achievement_1: achievement_1,
//         achievement_2: achievement_2,
//         i: i
//     }
//     //sending value into achievements table
//     // if (localStorage.getItem("achievements") == null) {
//     // localStorage.setItem("achievements", JSON.stringify(achievements));
//     // }
//     debugger;
//     console.log(achievementsobj);
//     alert("done");

//     fetch("http://localhost:5000/exportdata", {
//         method: "POST", // or 'PUT'
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(achievementsobj),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("Success:", achievementsobj);
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//         });
//     // fetch('http://localhost:5000/exportdata', {
//     // method: 'POST',
//     // headers: {
//     // 'Content-Type': 'application/json',
//     // },
//     // body: JSON.stringify(achievementsobj),
//     // })
//     // .then((res) => res.json())
//     // .then((achievementsobj) => {
//     // console.log('achievement obj created into database', achievementsobj)
//     // })
//     // .catch((err) => {
//     // console.log(err);
//     // });


//     //till here





//     var personsobj = {

//     }

//     fetch('http://localhost:8086/sendpersons', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(personsobj),
//     })
//         .then((res) => res.json())
//         .then((personsobj) => {
//             console.log('persons obj created into database', personsobj)
//         })
//         .catch((err) => {
//             console.log(err);
//         })

//     // if (localStorage.getItem("person") == null) {
//     // localStorage.setItem("person", JSON.stringify(arr));
//     // }

//     // var old = JSON.parse(localStorage.getItem("person"));

//     // old.push(obj);
//     // localStorage.setItem("person", JSON.stringify(old));
//     // // console.log(person);


// }