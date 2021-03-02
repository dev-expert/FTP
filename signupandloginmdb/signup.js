
function login1()
{
    var fnam = document.getElementById('firstname').value;
    var lnam = document.getElementById('lastname').value;
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var detail = "superuser"
    if(fnam=='' || lnam=='')
    return false;

      obj = {firstname:fnam,lastname:lnam,email:user,password:pass,usertype:detail}
    
  
    // var old = JSON.parse(localStorage.getItem("superuser"));
    // if(!old){
    //     old=[];
    // }
    // if(old.find(x=>x.email == user))
    // {
    //     alert("Email already Exist! Please register with new mail");
    // }
    // else{
    // old.push(obj);
    // }
    // localStorage.setItem("superuser",JSON.stringify(old));
   
}

function login2()
{
    var fnam = document.getElementById('firstname').value;
    var lnam = document.getElementById('lastname').value;
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var detail = "normaluser";

     obj = {firstname:fnam,lastname:lnam,email:user,password:pass,usertype:detail}
    
    
  
    var old = JSON.parse(localStorage.getItem("normaluser"));
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
    localStorage.setItem("normaluser",JSON.stringify(old));

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
    fetch("http://localhost:3000/resume", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    })
        .then(data => {
            console.log("Succes :", data);
        });
    
    window.open("login.html");
}