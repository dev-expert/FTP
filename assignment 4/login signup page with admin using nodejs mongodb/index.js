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

        fetch('http://localhost:8086/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            })
            .then((res) => res.json())
            .then((obj) => {
                console.log('signup obj created into database', obj)
            })
            .catch((err) => {
                console.log(err);
            });

    }


}

var loginpg = () => {
    var loginemail_address = document.getElementById('email_address1').value;
    var loginpassword = document.getElementById('password1').value;
    var result;


    // var old1 = JSON.parse(localStorage.getItem('person'));
    //start
    fetch("http://localhost:8086/login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(result),
        })
        .then((response) => response.json())
        .then((result) => {

            var keys = result;

            console.log(keys);
            for (i = 0; i < keys.length; i++) {
                var s = keys[i];
                console.log(s);
                storedEmail = s.email_address;
                storedPassword = s.password;
                usertype = s.admin;

                if (storedEmail == loginemail_address && storedPassword == loginpassword) {
                    if (usertype == 'true') {
                        window.open('admin.html');
                        localStorage.setItem('persons', storedEmail);
                        break;
                    } else {
                        alert('welcome to the user')
                        window.open('normal_user.html')
                        break;
                    }

                }
                //end
            }


        });


    //end



    // var currentperson = old1.find(x => x.email_address != loginemail_address);
    // console.log(currentperson + 'cp')
    // if (loginpassword == currentperson.password) {
    //     if (currentperson.admin == "true") {
    //         localStorage.setItem('logged_in', JSON.stringify(currentperson.email_address));
    //         window.open("admin.html");

    //     } else
    //         window.open('normal_user.html')
    // } else
    //     alert('wrong poassword');


}