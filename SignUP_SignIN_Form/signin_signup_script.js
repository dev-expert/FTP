// HIDE FORM
function hide() {
  var a = document.getElementById("signin_form");
  a.style.display = 'none';
  document.getElementById("signup_form").style.display = "block";
}

// SIGN IN AND VALIDATION
let AllUsers = [];
function setAction() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var keys = JSON.parse(localStorage.getItem("users"));
  // var flag = 0;
  // if (keys != null) {
  //   for (i = 0; i < keys.length; i++) {
  //     var s = keys[i];
  //     console.log(s.email);
  //     if (s.email === email && s.password === password) {
  //       flag = 1;
  //     }
  //   }
  //   if (flag == 1) {
  //     // login();
  //     alert("LOGIN SUCCESFULLY");
  //     window.open("file:///D:/FTP/SignUP_SignIN_Form/NormalLoginFile/normal_user_dashboard.html");
  //   }
  //   else {
  //     alert("WRONG CREDENTIALS");
  //   }

  var q = keys.find(x => x.email == email, y => y.password == password)
  // debugger;

  if (email === q.email && password === q.password && q.usertype === "true") {
    // alert("Welcome ADMIN");
    localStorage.setItem("firewall", "1");
    window.open("file:///D:/FTP/SignUP_SignIN_Form/AdminLoginFile/admin_dashboard.html");
  }

  else if (email === q.email && password === q.password && q.usertype === "false") {
    // alert("Welcome USER");
    window.open("file:///D:/FTP/SignUP_SignIN_Form/NormalLoginFile/normal_user_dashboard.html");
  }

  else if (email !== q.email || password !== q.password) {
    alert("ENTER CORRECT CREDENTIALS");
  }

  else
    alert("PLEASE REGISTER FIRST");
}



// SIGN UP 
function register() {
  var rname = document.getElementById("usernamesignup").value;
  var remail = document.getElementById("emailsignup").value;
  var rpassword = document.getElementById("passwordsignup").value;
  var rusertype = document.getElementById("user_type").value;
  var flag = 0;
  var keys = JSON.parse(localStorage.getItem("users"));
  if (keys != null) {
    for (i = 0; i < keys.length; i++) {
      var s = keys[i];
      console.log(s.email);
      if (s.email === remail) {
        flag = 1;
      }
    }
  }
  console.log(flag);
  if (flag == 1) {
    alert("USER ALREADY REGISTERED");
  }
  else {
    var userdata = {
      name: rname,
      email: remail,
      password: rpassword,
      usertype: rusertype
    };

    AllUsers = JSON.parse(localStorage.getItem("users") || "[]");
    AllUsers.push(userdata);
    localStorage.setItem("users", JSON.stringify(AllUsers));
  }
}

  // CLEAR ALL THE LOCAL STORAGE
  // function clearlocalstorage() {
  //   localStorage.clear();
  // }

  // function login() {
  //   alert("LOGIN SUCCESFULLY");
  //   window.open("file:///D:/FTP/SignUP_SignIN_Form/NormalLoginFile/normal_user_dashboard.html");
  // }