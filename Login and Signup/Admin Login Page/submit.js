
        function tables1() {

            var str = "";
            var keys = JSON.parse(localStorage.getItem("obj1"));

            for (i = 0; i < keys.length; i++) {
                k = keys[i];
                if (k.usertype != "Superuser") {
                    str += `<tr>
            <td>${k.email}</td>
            <td>${k.usertype}</td>
            <td><button onclick="confirmdeletee('${k.email}')">Delete</button></td>
            </tr>`;
                }
            }
            document.getElementById("details").innerHTML = str;

        }

        function userdelete(em) {
            let keys = JSON.parse(localStorage.getItem("obj1"));
            for (i = 0; i < keys.length; i++) {
                s = keys[i];
                if (em === s.email) {
                    keys.splice(i, 1);
                }
            }
            localStorage.setItem("obj1", JSON.stringify(keys));
            tables1();


        }
        function confirmdeletee(ptr) {
            var result = confirm("Are you sure to delete?");
            if (result) {
                userdelete(ptr);
                return true;
            }
            else {
                return false;
            }
            // Delete logic goes here
        }

    
        function ShowHome() {
            document.getElementById("user").style.display = "none";
            document.getElementById("welcome-text").style.display = "block";
        }
        function ShowUser() {
            document.getElementById("welcome-text").style.display = "none";
            document.getElementById("user").style.display = "block";

        }
        function validate() {
            var keys = JSON.parse(localStorage.getItem("loginuser"));
            if (keys != null) {
                return true;
            }
            else {
                window.open("loginpage1.html", "_self");
            }
        }
        function logout() {
            window.localStorage.removeItem("loginuser");
            location.reload();
        }
        tables1();


