function xyz()
{
    x = document.getElementById("role").value;
if(x =="teacher")
{
register1();
}
else{
register2();
}
}
function register1() {
    debugger;
    var fnam = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var num= document.getElementById('number').value;
    var doo = document.getElementById('dob').value;
    var detail="superuser"

    
    var obj = {firstname:fnam,lastname:lname,email:user,password:pass,number:num,dob:doo,usertype:detail}
    
    var old = JSON.parse(localStorage.getItem("superuser"));
    if(!old){
        old=[];
    }
    if(old.find(x=>x.email == user))
    {
        alert("Email already exists");
    }
    else{
    old.push(obj);
    }
    localStorage.setItem("superuser",JSON.stringify(old));   
    }

function register2() {
        var fnam = document.getElementById('firstname').value;
        var lname = document.getElementById('lastname').value;
        var user = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        var num= document.getElementById('number').value;
        var doo = document.getElementById('dob').value;
        var detail="normaluser"
    
        
        var obj = {firstname:fnam,lastname:lname,email:user,password:pass,number:num,dob:doo,usertype:detail}
        
        var old = JSON.parse(localStorage.getItem("person"));
        if(!old){
            old=[];
        }
        if(old.find(x=>x.email == user))
        {
            alert("Email already exists");
        }
        else{
        old.push(obj);
        }
        localStorage.setItem("person",JSON.stringify(old));
        }
   