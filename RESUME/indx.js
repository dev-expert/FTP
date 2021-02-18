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

        var old = JSON.parse(localStorage.getItem("users"));
        if (!old) {
            old = [];
        }
        if (old.find(x => x.email === email)) {
            alert("Present");
        }
        else {
            old.push(users);
        }
        localStorage.setItem("users", JSON.stringify(old));
        window.open("home.html");

    }
    else {
        alert("password and conform password not match");
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
                alert("admin");
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
                alert("normal user");
                window.open("index1.html");
                break;
            }

        }

    }
}




/*function submitDetails() {
    var name1 = document.getElementById("name").value;
    var email1 = document.getElementById("email").value;
    var number1 = document.getElementById("number").value;
    var password1 = document.getElementById("password").value;
    var repass1 = document.getElementById("repass").value;

    var obj = { name: name1, number: number1, email: email1, password: password1 };
    if (localStorage.getItem("person") == null) {
        localStorage.setItem("person", JSON.stringify(arr));
    }

    var old = JSON.parse(localStorage.getItem("person"));

    old.push(obj);
    localStorage.setItem("person", JSON.stringify(old));

}
*/
// var loginuser = {
    //     pass1: pass1,
    //     mail2: mail2
    // }
    // localStorage.setItem('loginuser', JSON.stringify(loginuser));

