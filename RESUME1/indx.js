function Register() {
    var usn = document.getElementById("x").value;
    var password = document.getElementById('a').value;
    var conformpassword = document.getElementById('b').value;
    var email = document.getElementById('c').value;
    var phonenumber = document.getElementById('d').value;
    var admin = document.getElementById('e').value;

    if (password == conformpassword) {


        var users = {
            username: usn,
            password: password,
            conformpassword: conformpassword,
            email: email,
            phonenumber: phonenumber,
            admin: admin
        };

        fetch('http://localhost:9090/index', {
            method: 'POST',
            body: JSON.stringify(users),
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(users),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));

        //     var old = JSON.parse(localStorage.getItem("users"));
        //     if (!old) {
        //         old = [];
        //     }
        //     if (old.find(x => x.email === email)) {
        //         alert("Present");
        //     }
        //     else {
        //         old.push(users);
        //     }
        //     localStorage.setItem("users", JSON.stringify(old));
        //     window.open("home.html");

        // }
        // else {
        //     alert("password and conform password not match");
        // }
    }
}



function Login() {
    var pass1 = document.getElementById("f").value;
    var mail2 = document.getElementById("r").value;

    var person = JSON.parse(localStorage.getItem("users"));
    for (i = 0; i < person.length; i++) {
        s = person[i];
        if (s.email === mail2 && s.password == pass1) {
            if (s.admin == "true") {
                var currentuserobj = {
                    email: s.email,
                    password: s.password
                };
                currentuser = [];
                currentuser.push(currentuserobj);
                localStorage.setItem("presentuser", JSON.stringify(currentuser));
                window.open("table.html");
                break;
            }

            else {

                window.open("index1.html");
                break;
            }

        }

    }
}
