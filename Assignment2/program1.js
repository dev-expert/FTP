
 
function login1()
{
    var fnam = document.getElementById('firstname').value;
    var lnam = document.getElementById('lastname').value;
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    var obj = {firstname:fnam,email:user,password:pass}
    
    
  
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

            
    /*localStorage.setItem('password', pass);
    localStorage.setItem('name', fnam);
    localStorage.setItem('password', lnam);*/
