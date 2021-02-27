//var table = document.getElementById("myTable");
//document.getElementById("body1").style.display = "block";

    var obj = JSON.parse(localStorage.getItem("person1"));

    var data = document.getElementById("data");

    let len = obj.length;
    //str="";
    for (var i = 0; i < len; i++) {
        /*str+=`
        <tr>
        <td>${obj[i].name}</td>
        <td>${obj[i].email}</td>
        <td>${obj[i].number}</td>
        <td>${obj[i].password}</td>
        <td>${obj[i].Admin}</td>
        </tr>`
        */

        var row = data.insertRow(i);
        var cell = row.insertCell(0);
        cell.innerHTML = obj[i].name;

        var cell1 = row.insertCell(1);
        cell1.innerHTML = obj[i].email;

        var cell2 = row.insertCell(2);
        cell2.innerHTML = obj[i].number;

        var cell3 = row.insertCell(3);
        if (obj[i].Admin == "true")
            cell3.innerHTML = "Admin";

        else
            cell3.innerHTML = "User";

        var cell4 = row.insertCell(4);
        /*
        var button = document.createElement("button");
        button.innerHTML = "Delete" + i;
        button.addEventListener("click", function () {
            alert(button.innerHTML);
        });
    
        cell4.append(button);
        */


        var checkbox = document.createElement("Input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "check");

        cell4.appendChild(checkbox);
    }


//document.getElementById("data").innerHTML=str;

function deleteData() {
    var table = document.getElementById("myTable");
    var obj = JSON.parse(localStorage.getItem("person1"));
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
        if (checkboxs[i].checked == true) {
            table.deleteRow(i + 1);
            obj.splice(i, 1);
            i--;
        }
    }

    localStorage.setItem("person1", JSON.stringify(obj));

}

function checkUser() {
    var email = localStorage.getItem("currUser");
    if (!email) {
        location.replace("login.html");
    }
    else
    {
        checkCurUser();
    } 
}

function checkCurUser()
{
    var person = JSON.parse(localStorage.getItem("person1"));
    var email1 = localStorage.getItem("currUser");
    var q = person.find(x=>x.email == email1);
    document.getElementById("username1").innerHTML = q.name;

    if(q.Admin == "false")
    {
        document.getElementById("userData").style.display = "none";
    }
}

function logout() {
    localStorage.removeItem("currUser");
    location.replace("login.html");
}

function showUser() {
    document.getElementById("card").style.display = "none";
    var a = document.getElementById("table");
    if (a.style.display == "block") {
        a.style.display = "none";
        

    }
    else {
        a.style.display = "block";
        
 1   }
}