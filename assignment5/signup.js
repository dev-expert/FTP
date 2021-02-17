
let val;
function check() {

    debugger;
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
    // for validation
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

    //if there is no error then count =0;
    if (count == 0) {


        var value = JSON.parse(localStorage.getItem("admin")); //accessing the local storage values
        if (value == null) { //if there is no key related to value in local storage then 

            var checkbox = document.getElementById("adminCheck").checked;
            var arradmin = [];
            var admin = { email: email, password: pass, isAdmin: checkbox };
            arradmin.push(admin);
            if (checkbox) {
                localStorage.setItem("admin", JSON.stringify(arradmin)); //it will store the data in to local storage
                alert("Signup Successfully");
                document.getElementById("myform").reset(); //after submitting the form , form will be reset
            }
        }

        else {

            var arradmin = JSON.parse(localStorage.getItem("admin")); //fetch the data
            var checkbox = document.getElementById("adminCheck").checked;
            var admin = { name: fname, email: email, password: pass, isAdmin: checkbox };


            var checkcount = 0;
            //find the element in to the array
            arradmin.forEach(element => {

                if (element.email === email) {
                    checkcount = checkcount + 1;

                }


            });
            if (checkcount == 0) {
                arradmin.push(admin);
                localStorage.setItem("admin", JSON.stringify(arradmin));
                alert("Signup Successfully");
                document.getElementById("myform").reset();
            }
            else {

                alert("email is alreay exists");
                document.getElementById("myform").reset();
            }




        }


    }
}




function login() {

    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var arradmin = JSON.parse(localStorage.getItem("admin"));
    if (email != "") {
        count = 0;
        arradmin.forEach((element) => {

            if (element.email == email) {
                count = count + 1;
                if (element.password == pass) {


                    alert("You successfully logged in");
                    val = element.name;
                    em = element.email;
                    window.location.href = `index.html?uname=${val}&email=${em}`;

                }
                else {
                    document.getElementById("perr").innerHTML = "Please Enter your correct password";
                }
            }


        });
        if (count == 0) {
            alert("You can't login ,Signup first");
        }
    }


    else {
        document.getElementById("Eerr").innerHTML = "Please Enter your Email Id";
    }
}
function data() {
    window.location.href = "admin.html";
}
function myFunction() {
    var url = document.URL.indexOf("?");
    var params = new Array();

    if (url != -1) {
        var pairs = document.URL.substring(url + 1, document.URL.length).split('&');


        for (var i = 0; i < pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }

    }
    var name = params["uname"];
    var email = params["email"];
    debugger;


    if (name != undefined) {
        document.getElementById("name").innerText = name;
    }
    else {
        window.location.href = "login.html";
    }
    var check = JSON.parse(localStorage.getItem("admin"));
    count = 0;
    check.forEach(element => {

        if (element.email == email) {
            if (element.isAdmin === true) {
                count = count + 1;
            }
        }
    })

    if (count > 0) {
        var x = document.getElementById("details");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
    }



}
