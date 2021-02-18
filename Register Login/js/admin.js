var info = document.getElementById("info");
    
  

for (var i = 1; i <=localStorage.length; i++){
    var user = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if(localStorage.key == "abc");

    else
        info.innerHTML += "<tr id=" + i + "><td>" + user.email + "</td><td>" + user.password + "</td><td> <a href='#' onclick='deletee((this.parentNode).parentNode); return false;'>Delete</a> </td></tr>";
}

function ready()
{
for(var i=0;i<localStorage.length;i++)
{
    if(localStorage.key(i) == "abc")
        return;   
}

    alert("Session Expired");
    location.replace("login.html");
    return;

}
ready();

function show(){
    info.style.display = "block";
}



function deletee(ele){
    var x = document.getElementById(ele.id).firstChild.innerHTML;
    alert("User " + x + " deleted");
    
    for(var i = 0; i<localStorage.length; i++){
    if(x == localStorage.key(i)){
    localStorage.removeItem(localStorage.key(i));
    }
    }
    ele.style.display = "none";
    }





function logout(){
    confirm("Are you sure you want to logout?");
    localStorage.removeItem("abc");
    location.replace("login.html");
}


//function deletee(){
//    alert("Hi");

//    localStorage.removeItem('this.key');
//}
//if(flag==0){
//    window.open("login.html");
//}