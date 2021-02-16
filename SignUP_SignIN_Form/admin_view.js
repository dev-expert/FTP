var info = document.getElementById("info");
for (var i = 0; i < localStorage.length; i++){
    var users = JSON.parse(localStorage.getItem(localStorage.key(i)));
    info.innerHTML += "<tr id=" + i + "><td>" + users.name + "</td><td>" + users.email + "</td><td>" + users.password + "</td><td>" + users.usertype + "</td><td> <img style='width: 20px; height: 20px;' src = 'delete.png' > </td></tr>";
    debugger
}