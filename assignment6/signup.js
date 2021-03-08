
let val;
async function check() {

 
    var fname = document.getElementById("fname").value;

    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var number = document.getElementById("number").value;
    var len = number.length;
    var plen = pass.length;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    var checkbox = document.getElementById("check").checked;
    var count = 0;
    // for validation
    if (fname == "") {
        document.getElementById("ferr").innerHTML = "Please enter your firstname";
        count = count + 1;
    }
    if (lname == "") {
        document.getElementById("lerr").innerHTML = "Please enter your lastname";
        count = count + 1;
    }

    if (atpos < 1 || (dotpos - atpos < 2)) {

        document.getElementById("Eerr").innerHTML = "Please enter your correct Email Id";

        count = count + 1;
    }

    if (isNaN(number)) {
        document.getElementById("numloc").innerHTML = "Enter Numeric value only";
        count = count + 1;

    }
    else {
        if (len != 10) {
            document.getElementById("numloc").innerHTML = "Please Enter 10 digit phone number";
            count = count + 1;
        }
    }
    if (plen < 6) {
        document.getElementById("perr").innerHTML = "Password must be at least 6 characters long.";
        count = count + 1;

    }
    if (cpass != pass) {


        document.getElementById("cerr").innerHTML = "Password must be same";
        count = count + 1;

    }

    //if there is no error then count =0;
    if (count == 0) {

        var elements = { firstname: fname, email: email, number: number, pass: pass, isAdmin: checkbox }
        var response = await fetch('http://localhost:8080/admin');

        const checkData = await response.json();
        console.log(checkData);
        if (checkData.length == 0) {///for checking the duplicacy

            const store = await fetch("http://localhost:8080/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(elements)
            });
            debugger;

            const isRequestSuccess = await store.json();
            if (isRequestSuccess) {
                alert("signup successfully");
                document.getElementById("myform").reset(); ///for refreshing the page
            }


        }
        else {


            var elements = { firstname: fname, email: email, number: number, pass: pass, isAdmin: checkbox }


            var checkcount = 0;
            //find the element in to the array

            checkData.forEach(element => {

                if (element.email === email) {
                    checkcount = checkcount + 1;

                }


            });
            if (checkcount == 0) {
                const store = await fetch("http://localhost:8080/signup", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'

                    },
                    body: JSON.stringify(elements)
                });
                debugger;

                const isRequestSuccess = await store.json();
                if (isRequestSuccess) {
                    alert("signup successfully");
                    document.getElementById("myform").reset();///for refreshing the page
                }
            }
            else {

                alert("email is alreay exists");
                window.open("signup.html");
            }


        }







    }





}




async function login() {
   
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var check = {
        email: email,
        pass: pass,
    }
    if (email != "" && pass != "") {
        var response = await fetch('http://localhost:8080/checkuser', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(check)
        });
        console.log(response);
        const getData = await response.json();
        if (getData.length > 0) {
            let [data] = getData;

            if (data.pass == pass) {


                alert("You successfully logged in");



                var admin = { name: data.firstname, email: email, password: pass, isAdmin: data.isAdmin };


                localStorage.setItem("login", JSON.stringify(admin)); //it will store the data in to local storage




                window.location.href = `index.html`;

            }
            else {
                document.getElementById("perr").innerHTML = "Please Enter your correct password";
            }
        }



        else {
            alert("You can't login ,Signup first");
        }
    }
    else {
        if (email == "")
            document.getElementById("Eerr").innerHTML = " Please Enter your email Id"
        else

            document.getElementById("perr").innerHTML = " Please Enter your password"
    }
}


async function myFunction() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');

    let login = JSON.parse(localStorage.getItem("login"));
    if (login == null) {
        window.location.href = "login.html";
    }

    var name = login["name"];
    var isAdmin = login["isAdmin"];


    document.getElementById("name").innerText = name;
    var x = document.getElementById("logout");
    if (x.style.display === "none") {
        x.style.display = "block";
    }


    if (isAdmin == true) {
        var x = document.getElementById("details");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
    }

    if (myParam) {
        const response = await fetch('http://localhost:8080/editResume/' + myParam);
        const getData = await response.json();

        const data = getData[getData.length - 1];

        var keys = Object.keys(data);

        for (i = 1; i < keys.length; i++) {
            var s = keys[i]

            switch (s) {
                case "image":
                    document.getElementById("image").src = data[s];
                    break;
                case "Projects":


                    var projectdata = data["Projects"];
                    var projectKey = Object.keys(projectdata);
                    str = "";
                    let buttonCount = 0;
                    var Project = [];
                    if (projectKey.length > 1) {
                        for (j = 0; j < projectKey.length; j++) {
                            buttonCount++;

                            var val = projectdata[projectKey[j]];
                            str = `<label for="lname">Project ${buttonCount}:</label><br>
                            <input type="text" name="ProjectValue[]"  value="${val}" required>
                            <input type="hidden" name="Project[]" value="Project ${buttonCount}"><br>
                            `;
                            Project.push(str);

                        }
                        document.getElementById("projectIncrease").innerHTML = Project.join('');

                    }
                    else {
                        var get_value = projectdata[projectKey["0"]];
                        document.getElementById("Project1").value = get_value;
                    }
                    break;



                case "Skills":


                    var skilldata = data["Skills"];
                    var skillkey = Object.keys(skilldata);
                    str = "";
                    skill = [];
                    skillCount = 1;
                    if (skillkey.length > 1) {
                        for (k = 0; k < skillkey.length; k++) {
                            skillCount++
                            var skillVal = skilldata[skillkey[k]];
                            str = `<label for="lname">Skill ${skillCount}:</label><br>
                            <input type="text" name="SkillValue[]" value="${skillVal}"required>
                            <input type="hidden" name="Skill[]" value="Skill ${skillCount}"><br>
                            
                            `
                                ;
                            skill.push(str);

                        }
                        document.getElementById("skillIncrease").innerHTML = skill.join('');
                    }
                    else {
                        var get_value = skilldata[skillkey["0"]];
                        document.getElementById("Skills1").value = get_value;
                    }
                    break;
                 
                case s:
                    if(document.getElementById(`${s}`)){
                    document.getElementById(`${s}`).value = data[s];}
                    else{
                        break;
                    }

            }
        }
    }



}
function logout() {
    localStorage.removeItem("login");
    window.location.href = "login.html";
}
