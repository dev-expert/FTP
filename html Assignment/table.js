var obj = JSON.parse(localStorage.getItem("person1"));
var data = document.getElementById("data");
let len = obj.length;
for (var i = 0; i < len; i++) {
var row = data.insertRow(i);
var cell = row.insertCell(0);
cell.innerHTML = obj[i].name;
var cell1 = row.insertCell(1);
cell1.innerHTML = obj[i].email;
var cell2 = row.insertCell(2);
if (obj[i].Admin == "true")
cell2.innerHTML = "Admin";
else
cell2.innerHTML = "User";
var cell3 = row.insertCell(3);
var checkbox = document.createElement("Input");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("name", "check");
cell3.appendChild(checkbox);
}
function deleteData() {
var table = document.getElementById("myTable");
var obj = JSON.parse(localStorage.getItem("person1"));

var checkboxs = table.getElementsByTagName("Input");

for (var i = 0; i < checkboxs.length; i++) {
if (checkboxs[i].checked == true) {
table.deleteRow(i+1);
obj.splice(i,1);
i--;
}
}
localStorage.setItem("person1",JSON.stringify(obj));
}