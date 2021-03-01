
let val;
async function check() {

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

    var checkbox = document.getElementById("check").checked;
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

        var elements = { firstname: fname, email: email, number: number, pass: pass, isAdmin: checkbox }
        var response = await fetch('http://localhost:8080/admin');
        const checkData = await response.json();
        if (checkData.length == 0) {///for checking the duplicacy

            const store = await fetch("http://localhost:8080/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(elements)
            });
            debugger;

            const isRequestSuccess = await store.json();
            if (isRequestSuccess) {
                alert("signup successfully");
                document.getElementById("myform").reset(); ///for refreshing the page
            }


        }
        else {


            var elements = { firstname: fname, email: email, number: number, pass: pass, isAdmin: checkbox }


            var checkcount = 0;
            //find the element in to the array
            checkData.forEach(element => {

                if (element.email === email) {
                    checkcount = checkcount + 1;

                }


            });
            if (checkcount == 0) {
                const store = await fetch("http://localhost:8080/signup", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'

                    },
                    body: JSON.stringify(elements)
                });
                debugger;

                const isRequestSuccess = await store.json();
                if (isRequestSuccess) {
                    alert("signup successfully");
                    document.getElementById("myform").reset();///for refreshing the page
                }
            }
            else {

                alert("email is alreay exists");
                window.open("signup.html");
            }


        }







    }





}




async function login() {
    debugger;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var response = await fetch('http://localhost:8080/admin');
    const getData = await response.json();

    if (email != "") {
        count = 0;
        getData.forEach((element) => {

            if (element.email == email) {
                count = count + 1;
                if (element.pass == pass) {


                    alert("You successfully logged in");



                    var admin = { name: element.firstname, email: email, password: pass, isAdmin: element.isAdmin };


                    localStorage.setItem("login", JSON.stringify(admin)); //it will store the data in to local storage




                    window.location.href = `index.html?`;

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

function myFunction() {

    let login = JSON.parse(localStorage.getItem("login"));
    if (login == null) {
        window.location.href = "login.html";
    }

    var name = login["name"];
    var isAdmin = login["isAdmin"];
    // if (url != -1) {
    //     var pairs = document.URL.substring(url + 1, document.URL.length).split('&');


    //     for (var i = 0; i < pairs.length; i++) {
    //         nameVal = pairs[i].split('=');
    //         params[nameVal[0]] = nameVal[1];
    //     }

    // }



    document.getElementById("name").innerText = name;
    var x = document.getElementById("logout");
    if (x.style.display === "none") {
        x.style.display = "block";
    }


    if (isAdmin == true) {
        var x = document.getElementById("details");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
    }



}
function logout() {
    localStorage.removeItem("login");
    window.location.href = "login.html";
}
