async function check() {
    debugger;
    var semail = document.getElementById("email").value;
    var spwd = document.getElementById("password").value;
    // var keys=JSON.parse(localStorage.getItem("data_fields"));
    const show = await fetch("http://localhost:3000");




    const data = await show.json();
    if (data
        ) {
        for (i = 0; i < data.length; i++) {

            var s = data[i];
            var stype = data[i].type;
            if(semail === s.email && spwd === s.pwd) {
                var df = {
                    name: s.name,
                    mail: s.email,
                    stype: s.type
                };

            }
                localStorage.setItem("df", JSON.stringify(df));
                if (stype == "Admin") {
                    //alert("loggedin as admin");
                    window.location.href = "admin_portal.html";
                }
                else if (stype == "User") {
                    //alert("logged in as user");
                    window.location.href = "user_portal.html";
                }
            }


    }
    else {
        alert("Error logging in");
    }


}



function redirect() {
    window.location.href = "register.html";
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
