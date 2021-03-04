var keys, psd;
let admin = 0;
function adminView() {
    if (admin == 0)
        admin = 1;

    else if (admin == 1)
        admin = 0;
}

function account() {
    var x = document.getElementById("loginform");
    x.innerHTML = " ";
    document.getElementById("registerform").style.display = "block";
}

function putdata() {
    var flag = 0;
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email = document.getElementById("email").value;
    if (re.test(String(email)) == true) {
        flag = 1;
    }

    else { }

    if (flag == 1) {
        var j = 0;
        var Name = document.getElementById("nme").value;
        var Password = document.getElementById("passwd").value;
        var Email = document.getElementById("email").value;

        if (nme != "" && passwd != "" && email != "") {
            var j = 0;
            if (j == 1) {
                alert("Users Exists");
            }

            else {
                var data = {
                    username: Name,
                    userpassword: Password,
                    usermail: Email,
                    admin: admin
                };

                fetch("http://localhost:1000/regis", {
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
                alert("Account Created successfully");
            }
        }

        else
            alert('Cannot enter empty values');
    }

    else
        alert("Enter Valid email address");
}

function kuchbhi() {
    var email1 = document.getElementById("email_in").value;
    var password1 = document.getElementById("passwd_in").value;
    psd = password1;
    var obj = { email: email1, password: password1 };
    login(obj);
}

function login(obj) {
    console.log("in");
    if (obj != null) {
        fetch("http://localhost:1000/signin", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        })
            .then((response) => response.json())
            .then((obj) => {
                console.log("Success:", obj);
                kuch(obj);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    else {
        alert("Credentials not found !!");
    }
}


function kuch(obj) {

    psd = parseInt(psd);
    obj.userpassword = parseInt(obj.userpassword);
    obj.admin = parseInt(obj.admin);
    if (obj.userpassword == psd) {
        localStorage.setItem("fireWall", "1");
        if (obj.admin == 1) {
            location.replace("admin.html");
            exit;
        }
        else {
            location.replace("index.html");
        }
    }
    else {
        alert("Incorrect Password");
    }
}


