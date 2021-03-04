var fire;

for (var i = 0; i < localStorage.length; i++){
    if(localStorage.key(i) == "fireWall"){
        fire = 1;
    }
    else;
}

if(fire == 1){}

else{
    alert("Session Expired. Login AGAIN");
    location.replace("home.html");
}


document.getElementById("bodyy").style.display = "block";
var info = document.getElementById("info");
for (var i = 0; i < localStorage.length; i++){
    if(localStorage.key(i) == "fireWall");

    else{
        var user = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(user.admin == 1)
            var admin = "Admin";

        else
            var admin = "User";
        
        info.innerHTML += "<tr id=" + i + "><td id=" +(parseInt(i)-5)+">" + user.email + "</td><td>" + user.nme + "</td><td>" + admin + "</td><td> <img id='del' onclick ='del((this.parentNode).parentNode)' style='width: 20px; height: 20px; cursor: pointer;' src = 'delete.png' > </td></tr>";
    }
}

function del(ele){
    var x = document.getElementById(ele.id).firstChild.innerHTML;
    alert("User " + x + " deleted");

    for(var i = 0; i<localStorage.length; i++){
        if(x == localStorage.key(i)){
            localStorage.removeItem(localStorage.key(i));
        }
    }
    ele.style.display = "none";
}

function deleteFireWall(){
    localStorage.removeItem("fireWall");
    location.replace("home.html");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function database(){
    document.getElementById("info").style.display = "block";
    document.getElementById("mainBody").style.display = "none";
    closeNav();
}