var storeduser = [];
var storedpassword = [];
var flag = 0

function register() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    //for the email
    if (localStorage.getItem('email') == null)
        localStorage.setItem('email', '[]')

    var old_email = JSON.parse(localStorage.getItem('email'));
    old_email.push(user);

    localStorage.setItem('email', JSON.stringify(old_email));
    //for the password
    if (localStorage.getItem('pass') == null)
        localStorage.setItem('pass', '[]')

    var old_pass = JSON.parse(localStorage.getItem('pass'));
    old_pass.push(pass);

    localStorage.setItem('pass', JSON.stringify(old_pass));


}

function login() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    storeduser = JSON.parse(localStorage.getItem('email'));
    storedpassword = JSON.parse(localStorage.getItem('pass'));
    console.log(storeduser[0]);

    for (var i = 0; i <= localStorage.length; i++) {
        if (user == storeduser[i] && pass == storedpassword[i]) {
            alert('login successfull');
            flag++;
        }
    }
    if (flag != 1)
        alert("enter valid cred");

}