let arr=[];
function addobj(){
    
    var email=document.getElementById("email1").value;
    var passwrd=document.getElementById("passwrd1").value;
    var usertype;


    if(document.querySelector("#usertype:checked" )!==null)
    {
     usertype="superuser"
    }
    else
    {
     usertype="normaluser"
    }
    var flag=0;
    var keys=JSON.parse(localStorage.getItem("obj1"));

    if(keys!=null)
    {
        for(var i=0;i<keys.length;i++)
        {
        var s=keys[i]
            if(s.email==email){
            flag=1;
            }
        }

    }
    
    if(flag==1){
        alert("already exit");
    }
    else
    {
        
    var obj1={
        usertype:usertype,
        email:email,
        passwrd:passwrd
         

    };
    arr=JSON.parse(localStorage.getItem("obj1") || "[]");
    arr.push(obj1);
    localStorage.setItem("obj1", JSON.stringify(arr));
    alert("signed succesfully");
    
}
window.open ("loginpage1.html");

    }

function viewdata()
{
    
        var email=document.getElementById("email2").value;
        var password=document.getElementById("passwrd2").value;
        var keys=JSON.parse(localStorage.getItem("obj1"));
        var flag=0;
        if(keys!=null){
        for(i=0;i<keys.length;i++)
        {
        var s=keys[i];
        console.log(s.email);
        if(s.email===email && s.passwrd===password){
        flag=1;
        if(s.usertype=="superuser"){
        slogin();
        }
        if(s.usertype=="normaluser"){
        nlogin();
        }
        break;
        }
        }
        if(flag==0){alert("Wrong Password");
        }
        }
        else{alert("Not A Registered User");
        }
        }

function slogin(){
            alert("login as superuser");
            window.open("superuser1.html")

}

function nlogin(){
            alert("login as normal user")
            window.open("normaluser1.html")
            

}
    


    

    




   































// if(document.getElementById("isAdmin").checked)
// {
// var name= document.getElementById("username").value;
// var emaild=document.getElementById("email").value;
// var passworde=document.getElementById("password").value;
// if (localStorage.getItem("AdminId") === null) {
// var admin = {};
// var items = [];
// admin.items = items;
// var item = {
// "name":name,
// "emailid": emaild,
// "password": passworde,
// "isadmin":true
// }
// admin.items.push(item);
// }
// else
// {
// var admin = JSON.parse(localStorage.getItem("AdminId"));
// var item = {
// "name":name,
// "emailid": emaild,
// "password": passworde,
// "isadmin":true
// }
// admin.items.push(item);
// }
// localStorage.setItem('AdminId', JSON.stringify(admin));
// }
// else{
// var name= document.getElementById("username").value;
// var emaild=document.getElementById("email").value;
// var passworde=document.getElementById("password").value;
// if (localStorage.getItem("AdminId") === null) {
// var admin = {};
// var items = [];
// admin.items = items;
// var item = {
// "name":name,
// "emailid": emaild,
// "password": passworde,
// "isadmin":false
// }
// admin.items.push(item);
// }
// else
// {
// var admin = JSON.parse(localStorage.getItem("AdminId"));
// var item = {
// "name":name,
// "emailid": emaild,
// "password": passworde,
// "isadmin":false
// }
// admin.items.push(item);
// }
// localStorage.setItem('AdminId', JSON.stringify(admin));
// } 