const loginform = document.querySelector('form.login');
const signupform = document.querySelector('form.signup');
const loginbtn = document.querySelector('label.login');
const signupbtn = document.querySelector('label.signup');
const signuplink = document.querySelector('.signup-link a');
const logintext = document.querySelector('.title-text .login');
const signuptext = document.querySelector('.title-text .signup');

signupbtn.onclick = (() => {
    loginform.style.marginLeft = '-50%';
    logintext.style.marginLeft = '-50%';
});

loginbtn.onclick = (() => {
    loginform.style.marginLeft = '0%';
    logintext.style.marginLeft = '0%';
});

signuplink.onclick = (() => {
    signupbtn.click();
    return false;
});

var arr = [];

var register = () => {
    var email_address = document.getElementById('email_address').value;
    var mobile_number = document.getElementById('mobile_number').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    var admin = document.getElementById('type_user').value;

    if (password != confirm_password)
        alert('Enter Same Password');
    else {
        var obj = {
            email_address: email_address,
            mobile_number: mobile_number,
            password: password,
            admin: admin
        }
        if (localStorage.getItem("person") == null) {
            localStorage.setItem("person", JSON.stringify(arr));
        }

        var old = JSON.parse(localStorage.getItem("person"));

        old.push(obj);
        localStorage.setItem("person", JSON.stringify(old));

        console.log("length of old" + localStorage.length);
        alert('signup done');
    }


}

var loginpg = () => {
    var loginemail_address = document.getElementById('email_address1').value;
    var loginpassword = document.getElementById('password1').value;

    var old1 = JSON.parse(localStorage.getItem('person'));

    var currentperson = old1.find(x => x.email_address == loginemail_address); //pura data le rha ha jisses email match hua ha 
    if (loginpassword == currentperson.password) {
        if (currentperson.admin == "true") {
            window.open("admin.html");
        } else
            window.open('normal_user.html')
    } else
        alert('wrong poassword');


}