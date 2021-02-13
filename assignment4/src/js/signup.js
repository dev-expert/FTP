function check() {

    
    var fname = document.getElementById("fname").value;

    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var number = document.getElementById("number").value;
    var len = number.length;
    var plen = pass.length;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");


    var count = 0;
    if (fname == "") {
        document.getElementById("ferr").innerHTML = "Please enter your firstname";
        count = count + 1;
    }
    if (lname == "") {
        document.getElementById("lerr").innerHTML = "Please enter your lastname";
        count = count + 1;
    }

    if (atpos < 1 || (dotpos - atpos < 2)) {

        document.getElementById("Eerr").innerHTML = "Please enter your correct Email Id";

        count = count + 1;
    }

    if (isNaN(number)) {
        document.getElementById("numloc").innerHTML = "Enter Numeric value only";
        count = count + 1;

    }
    else {
        if (len != 10) {
            document.getElementById("numloc").innerHTML = "Please Enter 10 digit phone number";
            count = count + 1;
        }
    }
    if (plen < 6) {
        document.getElementById("perr").innerHTML = "Password must be at least 6 characters long.";
        count = count + 1;

    }
    if (cpass != pass) {


        document.getElementById("cerr").innerHTML = "Password must be same";
        count = count + 1;

    }

    if (count == 0) {

        if (localStorage.getItem(email) == null) {
            localStorage.setItem(email, pass);
        }
        else {
            alert("your email is already exists");
        }


    }






}
function login() {
    
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    if(email!=""){
    var emailCheck = localStorage.getItem(email);
    if (emailCheck == null) {
        return alert("You can't logged in . Sign Up first");
    }
    else {
        if (emailCheck == pass) {
            alert("You successfully logged in");
            window.location.href = "index.html";
        }
        else {
            document.getElementById("perr").innerHTML = "Please Enter your correct password";
        }
    }
}
else{
    document.getElementById("Eerr").innerHTML="Please Enter your Email Id";
}
}