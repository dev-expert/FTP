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




        var cell4 = row.insertCell(4);
        var button = document.createElement("button");
        button.innerHTML = "Delete";
        button.addEventListener("click", function () {
            alert(button.innerHTML);
        });

        cell4.append(button);
    }



    function deleteData() {
        debugger;
        var table = document.getElementById("table_data");
        var obj = JSON.parse(localStorage.getItem("users"));
        /*
        var data = document.getElementById("data");
        for(var i = 0;i<len;i++)
        {
            var check = data.rows[i].cells[4].data;
            if((table.rows[i].cells[4].data).checked == true)
            {
                alert(i);
            }
        }
        */

        var checkboxs = table.getElementsByTagName("Input");
        
        for (var i = 0; i < checkboxs.length; i++) {
            //var check = data.rows[i].cells[4].data;
            if (checkboxs[i].checked == true) {
                //alert(i);
                table.deleteRow(i+1);
                obj.splice(i,1);
                i--;
            }
        }

        localStorage.setItem("users",JSON.stringify(obj));

    }
}