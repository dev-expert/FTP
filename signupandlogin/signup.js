function login1()
{
    var fnam = document.getElementById('firstname').value;
    var lnam = document.getElementById('lastname').value;
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var detail = "normaluser"
    if(fnam=='' || lnam=='')
    return false;

    var obj = {firstname:fnam,lastname:lnam,email:user,password:pass,usertype:detail}
    
    
  
    var old = JSON.parse(localStorage.getItem("person"));
    if(!old){
        old=[];
    }
    if(old.find(x=>x.email == user))
    {
        alert("Email already Exist! Please register with new mail");
    }
    else{
    old.push(obj);
    }
    localStorage.setItem("person",JSON.stringify(old));

}

function login2()
{
    var fnam = document.getElementById('firstname').value;
    var lnam = document.getElementById('lastname').value;
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var detail = "superuser";

    var obj = {firstname:fnam,lastname:lnam,email:user,password:pass,usertype:detail}
    
    
  
    var old = JSON.parse(localStorage.getItem("superuser"));
    if(!old){
        old=[];
    }
    if(old.find(x=>x.email == user))
    {
        alert("Email already Exist! Please register with new mail");
    }
    else{
    old.push(obj);
    }
    localStorage.setItem("superuser",JSON.stringify(old));

}
function reg()
{
    var value=document.getElementById("role").value;
    if(value=="user")
    {
        login1();
    }
    if(value=="admin"){
        login2();
    }
}