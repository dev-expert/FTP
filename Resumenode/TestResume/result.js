window.addEventListener("load", () => {
  debugger;
  var data, k;
  fetch("http://localhost:5000/resumeshow", {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      k = data;
      if (k) { sh(); };

    });

  // var k = JSON.parse(localStorage.getItem("resume"));

  // var p = JSON.parse(localStorage.getItem("skills"));

  function sh() {

    if (k != null) {
      for (i = 0; i < k.length; i++) {
        var s = k[i];

        document.getElementById("name").innerHTML = s.name;

        document.getElementById("about").innerHTML = s.objective;
        document.getElementById("S2").innerHTML = s.Github;

        document.getElementById("emails").innerHTML = s.email;
        document.getElementById("cont").innerHTML = s.Phone;
        document.getElementById("S1").innerHTML = s.LinkedIn;
        // document.getElementById("si1").innerHTML= s.skill1;
        // document.getElementById("si2").innerHTML= s.skill2;
        // document.getElementById("si3").innerHTML= s.skill3;
        // document.getElementById("si4").innerHTML= s.skill4;
        // document.getElementById("si5").innerHTML= s.skill5;
        document.getElementById("Gradname").innerHTML = s.collegename;
        document.getElementById("Gradcourse").innerHTML = s.collegecourse;
        document.getElementById("Graddate").innerHTML = s.collegedate;

        document.getElementById("Intername").innerHTML = s.schoolname1;
        document.getElementById("Intercourse").innerHTML = s.schoolcourse1;
        document.getElementById("Interdate").innerHTML = s.schooldate1;

        document.getElementById("Highname").innerHTML = s.schoolname;
        document.getElementById("Highcourse").innerHTML = s.schoolcourse;
        document.getElementById("Highdate").innerHTML = s.schooldate;


        // Projects

        document.getElementById("Pname1").innerHTML = s.projectname1;
        document.getElementById("Pdis1").innerHTML = s.projectdis1;
        document.getElementById("Pdate1").innerHTML = s.projectdate1;

        document.getElementById("Pname2").innerHTML = s.projectname2;
        document.getElementById("Pdis2").innerHTML = s.projectdis2;
        document.getElementById("Pdate2").innerHTML = s.projectdate2;


        // Certificates

        document.getElementById("Cname1").innerHTML = s.Certiname1;
        document.getElementById("Cdis1").innerHTML = s.Certidis1;
        document.getElementById("Cdate1").innerHTML = s.Certidate1;

        document.getElementById("Cname2").innerHTML = s.Certiname2;
        document.getElementById("Cdis2").innerHTML = s.Certidis2;
        document.getElementById("Cdate2").innerHTML = s.Certidate2;


        // Training

        document.getElementById("Tname").innerHTML = s.Trainingname;
        document.getElementById("Tdis").innerHTML = s.Trainingdis;


        // Hobbies

        document.getElementById("I1").innerHTML = s.Hobbi1;
        document.getElementById("I2").innerHTML = s.Hobbi2;
        document.getElementById("I3").innerHTML = s.Hobbi3;


        document.getElementById("L1").innerHTML = s.lang2;
        document.getElementById("L2").innerHTML = s.lang2;













      }

    }
  }
})

//   if (p != null) {
//     debugger;
//     var array = [];

//     for (var j = 0; j < p.length; j++) {

//       var value = p[j];
//       str = `<span>${value}</span>`
//       array.push(str);


//     }
//     document.getElementById("skillincrease").innerHTML = array.join('');
//   }


// })
