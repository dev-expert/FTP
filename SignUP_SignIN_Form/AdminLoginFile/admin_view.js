//var table = document.getElementById("myTable");

var obj = JSON.parse(localStorage.getItem("users"));

var data = document.getElementById("table_data");

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

    // var cell2 = row.insertCell(2);
    // cell2.innerHTML = obj[i].number;

    var cell2 = row.insertCell(2);
    if (obj[i].usertype == "true")
        cell2.innerHTML = "Admin";

    else
        cell2.innerHTML = "Normal User";

    var cell3 = row.insertCell(3);
    // var button = document.createElement("button");
    // button.innerHTML = "Delete" + i;
    // button.addEventListener("click", function () {
    //     alert(button.innerHTML);
    // });

    // cell4.append(button);



    var checkbox = document.createElement("Input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "check");

    cell3.appendChild(checkbox);
}

//document.getElementById("data").innerHTML=str;

function deleteData() {
    //debugger;
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