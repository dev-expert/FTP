

function check() {

    var name = document.getElementById("name");
    var email = document.getElementById("email");

    var phno = document.getElementById("contact_no");
    var dob = document.getElementById("dob");
    var pwd = document.getElementById("password");
    var pwd1 = document.getElementById("password2");
    var type = document.getElementById("user_type");


    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (name.value.length == 0) {
        alert('Please fill in name');
    }
    else if (email.value.length == 0) {
        alert('Please fill in email');
    }
    else if (phno.value.length == 0) {
        alert('Please fill in contact details');
    }
    else if (dob.value.length == 0) {
        alert('Please fill in date of birth');
    }
    else if (pwd.value.length == 0) {
        alert('Please fill in password');
    }
    else if (name.value.length == 0 && pwd.value.length == 0) {
        alert('Please fill in email and password');
    }
    else if (pwd.value.length > 8) {
        alert('Max of 8');
    }
    else if (!pwd.value.match(numbers)) {
        alert('please add 1 number');
    }
    else if (!pwd.value.match(upperCaseLetters)) {
        alert('please add 1 uppercase letter');
    }
    else if (!pwd.value.match(lowerCaseLetters)) {
        alert('please add 1 lowercase letter');
    }
    else if (type === "Admin") {
        alert("Signed Up as Admin");
    }
    else if (type === "User") {
        alert("Signed Up as User");
    }

    else {
        store();

    }
}


let data = [];
async function store() {

    debugger;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phno = document.getElementById("contact_no").value;
    var dob = document.getElementById("dob").value;
    var pwd = document.getElementById("password").value;
    var pwd1 = document.getElementById("password2").value;
    var type = document.getElementById("user_type").value;
    const response = await fetch("http://localhost:3000");
    const checkData = await response.json();
    if (checkData.length == 0) {///for checking the duplicacy

        const store = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(elements)
        });


        const isRequestSuccess = await store.json();
        if (isRequestSuccess) {
            alert("signup successfully");
            document.getElementById("signup").reset(); ///for refreshing the page
        }


    }
    else {

        var elements = { email: email }


        var checkcount = 0;
        //find the element in to the array
        checkData.forEach(element => {

            if (element.email === email) {
                checkcount = checkcount + 1;

            }


        });
        if (checkcount == 0) {
            const store = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(elements)
            });


            const isRequestSuccess = await store.json();
            if (isRequestSuccess) {
                alert("signup successfully");
                document.getElementById("signup").reset();///for refreshing the page
            }
        }
        else {

            alert("email is alreay exists");
            window.open("register.html");
        }


    }






    var data_fields = {
        name: name,
        email: email,
        phno: phno,
        dob: dob,
        pwd: pwd,
        pwd1: pwd1,
        type: type
    }
    const show = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data_fields),
    });
    const data = await show.json();
    if (data) {
        alert("datasaved");
    }
}




// data=JSON.parse(localStorage.getItem("data_fields") || "[]");
// data.push(data_fields);
// localStorage.setItem("data_fields", JSON.stringify(data));
// alert('Your account has been created');
// window.location.href = "file:///C:/Users/APPWRK/Documents/Login/register.html";


function redirect() {
    window.location.href = "login.html";
}
function Toggle() {
    var temp = document.getElementById("password");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}
