// VALIDATION OF ADMIN USER TYPE
var session = 0;

for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) == "firewall")
        session = 1;
    else;
}

if (session == 1);

else {
    alert("Session Expired. Login Again");
    location.replace("file:///D:/FTP/SignUP_SignIN_Form/signin_signup.html");
}

function delFireWall() {
    localStorage.removeItem("firewall");
    location.replace("file:///D:/FTP/SignUP_SignIN_Form/signin_signup.html");
}



function database() {
    document.getElementById("table").style.display = "block";
    document.getElementById("main_area").style.display = "block";

    var obj = JSON.parse(localStorage.getItem("users"));
    var data = document.getElementById("table_data");

    let len = obj.length;
    for (var i = 0; i < len; i++) {
        var row = data.insertRow(i);
        var cell = row.insertCell(0);
        cell.innerHTML = obj[i].name;


        var cell1 = row.insertCell(1);
        cell1.innerHTML = obj[i].email;

        var cell2 = row.insertCell(2);
        if (obj[i].usertype == "true")
            cell2.innerHTML = "Admin";

        else
            cell2.innerHTML = "Normal User";

        var cell3 = row.insertCell(3);
        var checkbox = document.createElement("Input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "check");
        cell3.appendChild(checkbox);

    }
}

function deljeteData() {
    var table = document.getElementById("table");
    var obj = JSON.parse(localStorage.getItem("users"));
   
    var checkboxs = table.getElementsByTagName("Input");

    for (var i = 0; i < checkboxs.length; i++) {
        // debugger;
        // alert("Hello");
        
        if (checkboxs[i].checked == true) {
            alert("Deleting Row");
            table.deleteRow(i+1);
            obj.splice(i, 1);
            // alert("Hi");
            i--;
        }
    }

    localStorage.setItem("users", JSON.stringify(obj));

}