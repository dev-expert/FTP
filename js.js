function che() {
  var x = document.getElementById("access").value;
  if (x == "true") {
    setAdminItem();
  }
  if (x == "false") {
    setUserItem();
  }
}
function setUserItem() {
  alert("user");
  var email = document.getElementById("email1").value;
  var password = document.getElementById("pwd1").value;
  var confirmpassword = document.getElementById("password").value;
  if (password != confirmpassword) {
    alert("Passwords doesnot match");
    return;
  }
  var brr = [];
  brr=JSON.parse(localStorage.getItem("users") || []);
  var user = { email: email, pass: password, isadmin: "false" };
  brr.push(user);
  if (email.length == 0 || password.length == 0) {
    alert("fill all the credentials");
  } else {
    localStorage.setItem("users", JSON.stringify(brr));
    window.open("login.html");
  }
}
function setAdminItem() {
  alert("admin");
  var email = document.getElementById("email1").value;
  var password = document.getElementById("pwd1").value;
  alert(email);
  alert(password);
  var confirmpassword = document.getElementById("password").value;
  if (password != confirmpassword) {
    alert("Passwords doesnot match");
    return;
  }
  else{
  var arr = [];
  alert(arr);
  var admin = { email: email, pass: password, isadmin: "true" };
  //arr=JSON.parse(localStorage.getItem("users"));
  arr.push(admin);
  alert(arr);
  if (
    email.length == 0 ||
    password.length == 0 ||
    confirmpassword.length == 0
  ) {
    alert("fill all the credentials");
  } else {
    localStorage.setItem("users", JSON.stringify(arr));
    window.open("login.html");
  }
}
}
function getItem() {
  var email = document.getElementById("email2").value;
  var password = document.getElementById("pwd2").value;
  var count = 0;
  alert("hi");
  var details = JSON.parse(localStorage.getItem("users"));
  alert(details);
  for (var i = 0; i < details.length; i++) {
    s = details[i];
    if (email === s.email && password == s.pass && s.isadmin == "true") {
      var arr1 = [];
      var obj = {
        email: email,
        password: password,
      };
      arr1.push(obj);
      localStorage.setItem("presentuser", JSON.stringify(arr1));
      window.open("admin.html");
      break;
    }
    if (email == s.email && password == s.pass && s.isadmin == "false") {
      window.open("user.html");
      break;
    }
    count++;
  }
  if (count == localStorage.length) {
    alert(" Does not Exist!!");
  }
}
