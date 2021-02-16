var arr = [];
var flag = 0

$('.tab a').on('click', function(e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});

function register() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var email_address = document.getElementById('email_address').value;
    var mobile_number = document.getElementById('mobile_number').value;

    //creating array of obj 
    var obj = {
        user: user,
        pass: pass,
        email_address: email_address,
        mobile_number: mobile_number,

    }

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