let AllUsers = [];
let currentuser = [];
//function to login 
function setAction() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var keys = JSON.parse(localStorage.getItem("users"));
  var flag = 0;
  if (keys != null) {
    for (i = 0; i < keys.length; i++) {
      var s = keys[i];
      console.log(s.email);
      if (s.email === email && s.password === password) {
        flag = 1;
        if (s.usertype == "superuser") {
          var currentuserobj = {
            name:s.name,
            email: s.email,
            password: s.password,
          };
          currentuser = JSON.parse(localStorage.getItem("presentuser") || "[]");
          currentuser.push(currentuserobj);
          localStorage.setItem("presentuser", JSON.stringify(currentuser));
          superlogin();
        }
        if (s.usertype == "normaluser") {
          var currentuserobj = {
            name:s.name,
            email: s.email,
            password: s.password,
          };
          currentuser = JSON.parse(localStorage.getItem("presentnormaluser") || "[]");
          currentuser.push(currentuserobj);
          localStorage.setItem("presentnormaluser", JSON.stringify(currentuser));
          normallogin();
        }
        break;
      }
    }
    if (flag == 0) {
      alert("WRONG USERNAME OR PASSWORD");
    }
  } else {
    alert("Not A Registered User");
  }
}
//


//function to register
function register() {
  var rname = document.getElementById("usernamesignup").value;
  var remail = document.getElementById("emailsignup").value;
  var rpassword = document.getElementById("passwordsignup").value;
  var usertype;
  if (document.querySelector("#usertype:checked") !== null) {
    usertype = "superuser";
    console.log(usertype);
  } else {
    usertype = "normaluser";
    console.log(usertype);
  }
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
  } else {
    var userdata = {
      usertype: usertype,
      name: rname,
      email: remail,
      password: rpassword,
    };
    AllUsers = JSON.parse(localStorage.getItem("users") || "[]");
    AllUsers.push(userdata);
    localStorage.setItem("users", JSON.stringify(AllUsers));
    alert("Registered Successfully");
  }
}

//

// after admin login this function will run
function superlogin() {
  window.open("admin homepage.html");
}

//

// after normal login this function will run
function normallogin() {
  window.open("user_homepage.html");
}

//function for responsive design 
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

//

//function to validate

function validate() {
  var keys = JSON.parse(localStorage.getItem("presentuser"));
  if (keys != null) {
    var q=document.getElementById("hidearea");
    var w=document.getElementById("hideloader");
    q.style.display="block";
    w.style.display="none";
    return true;
  } else {
    window.open("index.html", "_self");
  }
}

//


// onclick logout
function logoff() {
  window.localStorage.removeItem("presentuser");
  location.reload();
}

//

// display normal users table 
function users() {
  var keys = JSON.parse(localStorage.getItem("users"));
  var str = "";
  for (i = 0; i < keys.length; i++) {
    s = keys[i];
    if (s.usertype === "normaluser") {
      str += `<tr>
          <td>${s.name}</td>
          <td>${s.email}</td>
          <td>${s.usertype}</td>
          <td><input type="checkbox" name="tickdata" value="${s.email}"><button onclick="deleteuser('${s.email}')">Delete</button></td>
          </tr>`;
    }
  }
  document.getElementById("displayallusers").innerHTML = str;
}
//

// fucntion to delete single user
function deleteuser(semail) {
  let keys = JSON.parse(localStorage.getItem("users"));
  for (i = 0; i < keys.length; i++) {
    s = keys[i];
    if (semail === s.email) {
      keys.splice(i, 1);
    }
  }
  localStorage.setItem("users", JSON.stringify(keys));
  users();
}
//

// function to delete multiple users
function deletetick(keys1) {
  let keys = JSON.parse(localStorage.getItem("users"));
  for (i = 0; i < keys1.length; i++) {
    for (j = 0; j < keys.length; j++) {
      s = keys[j];
      if (keys1[i] === s.email) {
        keys.splice(j, 1);
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(keys));
  users();
}
function gettick(semail) {
  const c = document.querySelectorAll(`input[name="${semail}"]:checked`);
  let drr = [];
  c.forEach((c) => {
    drr.push(c.value);
    console.log(c.value);
  });
  return drr;
}

//

//function to show or hide users division
function showusers() {
  let w = document.getElementById("mainareakaamka");
  if (w.style.display != "none") {
    w.style.display = "none";
    users();
  }
  else{
    w.style.display="block";
  }
}
//
