
      
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