function sendData() {
  // debugger;
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  var profile = document.getElementById("profile").value;
  var ps1 = document.getElementById("ps1").value;
  var ps2 = document.getElementById("ps2").value;
  var l1 = document.getElementById("l1").value;
  var l2 = document.getElementById("l2").value;
  var db = document.getElementById("db").value;
  var os = document.getElementById("os").value;
  var s1 = document.getElementById("s1").value;
  var s2 = document.getElementById("s2").value;
  var s3 = document.getElementById("s3").value;
  var s4 = document.getElementById("s4").value;
  var s5 = document.getElementById("s5").value;
  var s6 = document.getElementById("s6").value;
  var coName = document.getElementById("coName").value;
  var role = document.getElementById("role").value;
  var we1 = document.getElementById("we1").value;
  var we2 = document.getElementById("we2").value;
  var we3 = document.getElementById("we3").value;
  var p1 = document.getElementById("p1").value;
  var p1desc = document.getElementById("p1desc").value;
  var p2 = document.getElementById("p2").value;
  var p2d1 = document.getElementById("p2d1").value;
  var p2d2 = document.getElementById("p2d2").value;
  var course = document.getElementById("course").value;
  var clgnme = document.getElementById("clgnme").value;
  var schl12 = document.getElementById("schl12").value;
  var board12 = document.getElementById("board12").value;
  var schl10 = document.getElementById("schl10").value;
  var board10 = document.getElementById("board10").value;
  var c1 = document.getElementById("c1").value;
  var c2 = document.getElementById("c2").value;
  var c3 = document.getElementById("c3").value;
  var c4 = document.getElementById("c4").value;
  var linkedin = document.getElementById("linkedin").value;
  var github = document.getElementById("github").value;
  var codingsite = document.getElementById("codingsite").value;
  var i1 = document.getElementById("i1").value;
  var i2 = document.getElementById("i2").value;
  var i3 = document.getElementById("i3").value;
  var i4 = document.getElementById("i4").value;

  var store = {
    name: name,
    dob: dob,
    city: city,
    state: state,
    zip: zip,
    mobile: mobile,
    email: email,
    profile: profile,
    ps1: ps1,
    ps2: ps2,
    l1:l1,
    l2,l2,
    db: db,
    os: os,
    s1: s1,
    s2: s2,
    s3: s3,
    s4: s4,
    s5: s5,
    s6: s6,
    coName: coName,
    role: role,
    we1: we1,
    we2: we2,
    we3: we3,
    p1: p1,
    p1desc: p1desc,
    p2: p2,
    p2d1: p2d1,
    p2d2: p2d2,
    course: course,
    clgnme: clgnme,
    schl12: schl12,
    board12: board12,
    schl10: schl10,
    board10: board10,
    c1: c1,
    c2: c2,
    c3: c3,
    c4: c4,
    linkedin: linkedin,
    github: github,
    codingsite: codingsite,
    i1 : i1,
    i2 : i2,
    i3 : i3,
    i4 : i4,
  };

  // alert(name);
  var arr = [];
  arr.push(store);
  localStorage.setItem("store", JSON.stringify(arr));
}



function storeData() {
  var key = JSON.parse(localStorage.getItem("store"));

  if (key != null) {
    for (var i = 0; i < key.length; i++) {
      var s = key[0];
      document.getElementById("name").innerHTML = s.name;
      document.getElementById("dob").innerHTML = s.dob;
      document.getElementById("city").innerHTML = s.city;
      document.getElementById("state").innerHTML = s.state;
      document.getElementById("zip").innerHTML = s.zip;
      document.getElementById("mobile").innerHTML = s.mobile;
      document.getElementById("email").innerHTML = s.email;
      document.getElementById("profile").innerHTML = s.profile;
      document.getElementById("ps1").innerHTML = s.ps1;
      document.getElementById("ps2").innerHTML = s.ps2;
      document.getElementById("l1").innerHTML = s.l1;
      document.getElementById("l2").innerHTML = s.l2;
      document.getElementById("db").innerHTML = s.db;
      document.getElementById("os").innerHTML = s.os;
      document.getElementById("s1").innerHTML = s.s1;
      document.getElementById("s2").innerHTML = s.s2;
      document.getElementById("s3").innerHTML = s.s3;
      document.getElementById("s4").innerHTML = s.s4;
      document.getElementById("s5").innerHTML = s.s5;
      document.getElementById("s6").innerHTML = s.s6;
      document.getElementById("coName").innerHTML = s.coName;
      document.getElementById("role").innerHTML = s.role;
      document.getElementById("we1").innerHTML = s.we1;
      document.getElementById("we2").innerHTML = s.we2;
      document.getElementById("we3").innerHTML = s.we3;
      document.getElementById("p1").innerHTML = s.p1;
      document.getElementById("p1desc").innerHTML = s.p1desc;
      document.getElementById("p2").innerHTML = s.p2;
      document.getElementById("p2d1").innerHTML = s.p2d1;
      document.getElementById("p2d2").innerHTML = s.p2d2;
      document.getElementById("course").innerHTML = s.course;
      document.getElementById("clgnme").innerHTML = s.clgnme;
      document.getElementById("schl12").innerHTML = s.schl12;
      document.getElementById("board12").innerHTML = s.board12;
      document.getElementById("schl10").innerHTML = s.schl10;
      document.getElementById("board10").innerHTML = s.board10;
      document.getElementById("c1").innerHTML = s.c1;
      document.getElementById("c2").innerHTML = s.c2;
      document.getElementById("c3").innerHTML = s.c3;
      document.getElementById("c4").innerHTML = s.c4;
      document.getElementById("linkedin").innerHTML = s.linkedin;
      document.getElementById("github").innerHTML = s.github;
      document.getElementById("codingsite").innerHTML = s.codingsite;
      document.getElementById("i1").innerHTML = s.i1;
      document.getElementById("i2").innerHTML = s.i2;
      document.getElementById("i3").innerHTML = s.i3;
      document.getElementById("i4").innerHTML = s.i4;
    }
  }
}