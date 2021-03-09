let arr = [];

var data, keys,enailT,passwordT;
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
    });
function addobj() {
    debugger;
    var email = document.getElementById("email1").value;
    var passwrd = document.getElementById("passwrd1").value;
    var usertype;
    var isok = 0;
    if (email == "" && passwrd == "") {
        alert("Please Enter or Password");
        window.open("Registration1.html", "_self")
        isok = 1;
    }
    else {
        if (document.querySelector("#usertype:checked") !== null) {
            usertype = "Superuser"
        }
        else {
            usertype = "Normaluser"
        }
        var flag = 0;
        // var keys = JSON.parse(localStorage.getItem("obj1"));

        if (keys != null) {
            for (var i = 0; i < keys.length; i++) {
                var s = keys[i]
                if (s.email == email) {
                    flag = 1;
                }
            }

        }
        var isexit = 0;

        if (flag == 1) {
            alert(" Account Already exit");
            isexit = 1;


        }
        else {

            var obj1 = {
                usertype: usertype,
                email: email,
                passwrd: passwrd


            };

            // arr = JSON.parse(localStorage.getItem("obj1") || "[]");
            // arr.push(obj1);
            // localStorage.setItem("obj1", JSON.stringify(arr));
            fetch("http://localhost:5000/exportdata", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj1),
            })
                .then((response) => response.json())
                .then((obj1) => {
                    console.log("Success:", obj1);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            alert("Registred succesfully");
        }


    }
    if (isok == 1 || isexit == 1) {
        window.open("Registration1.html", "_self")
    }
    else {
        window.open("loginpage1.html", "_self");
    }
}

function loginch() {
    
    
    var email = document.getElementById("email2").value;
    var password = document.getElementById("passwrd2").value;
    emailT = email;
    passwordT = password;
    var checkdetails = {
        email: email,
        passwrd: password,
    };
    fetch("http://localhost:5000/checkdata", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(checkdetails),
    })
        .then((response) => response.json())
        .then((checkdetails) => {
            console.log("Success:", checkdetails);
            viewdata(checkdetails);
        })
        .catch((error) => {
            console.error("Error:", error);
        });






}



function viewdata(key) {

    // var email = document.getElementById("email2").value;
    // var password = document.getElementById("passwrd2").value;

    // var keys = JSON.parse(localStorage.getItem("obj1"));
    var flag = 0;
    if (key != null) {
        

            var s = key;
            console.log(s.email);
            if (s.email === emailT && s.passwrd === passwordT) {
                flag = 1;
                if (s.usertype == "Superuser") {
                    var userobj = {
                        email: s.email,
                        password: s.passwrd,
                        usertype: s.usertype
                    };
                    currentuser = JSON.parse(localStorage.getItem("loginuser") || "[]");
                    currentuser.push(userobj);
                    localStorage.setItem("loginuser", JSON.stringify(currentuser));
                    slogin();
                }
                if (s.usertype == "Normaluser") {
                    var userobj = {
                        email: s.email,
                        password: s.passwrd,
                        usertype: s.usertype
                    };
                    currentuser = JSON.parse(localStorage.getItem("loginuser") || "[]");
                    currentuser.push(userobj);
                    localStorage.setItem("loginuser", JSON.stringify(currentuser));

                    nlogin();
                }
            }
        
        if (flag == 0) {
            alert("Wrong Password");
            window.open("loginpage1.html", "_self")
        }
    }
    else {
        alert("Not A Registered User");
    }
}

function slogin() {

    window.open("webpage.html", "_self")

}

function nlogin() {

    window.open("webpage2.html", "_self")


}









































