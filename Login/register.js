
/* function required(inputtxt ) 

   {
     if (inputtxt.value.length == 0)
      { 
         alert("Fileds are mandatory.");  	
               } 
      else 	
      store(); 
   }  */

function check()
 {
 
     var name= document.getElementById("name");
     var email= document.getElementById("email");
     var phno= document.getElementById("contact_no");
     var dob= document.getElementById("dob");			
     var pwd= document.getElementById("password");
     var pwd1= document.getElementById("password2");
    var type=document.getElementById("user_type");

  
     var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
     
    if(name.value.length == 0)
    {
        alert('Please fill in name');
    }
    else if(email.value.length == 0)
    {
        alert('Please fill in email');
    }
    else if(phno.value.length == 0)
    {
        alert('Please fill in contact details');
    } 
    else if(dob.value.length == 0)
    {
        alert('Please fill in date of birth');
    }
    else if(pwd.value.length == 0)
    {
        alert('Please fill in password');
    }
    else if(name.value.length == 0 && pwd.value.length == 0)
    {
        alert('Please fill in email and password');
    }
    else if(pwd.value.length > 8)
    {
        alert('Max of 8');
    }
    else if(!pwd.value.match(numbers))
    {
        alert('please add 1 number');
    }
    else if(!pwd.value.match(upperCaseLetters))
    {
        alert('please add 1 uppercase letter');
    }
    else if(!pwd.value.match(lowerCaseLetters))
    {
        alert('please add 1 lowercase letter');
    }
    else if(type==="Admin")
    {
        alert("Signed Up as Admin");
    }
    else if(type==="User")
    {
        alert("Signed Up as User");
    }
    else if(type==="Both")
    {
        alert("Signed Up as both admin and user");
    }
    else
    {
        store();
   
    }   
}   
         
    
let data=[];
function store()
{
    
    var name= document.getElementById("name").value;
     var email= document.getElementById("email").value;
     var phno= document.getElementById("contact_no").value;
     var dob= document.getElementById("dob").value;			
     var pwd= document.getElementById("password").value;
     var pwd1= document.getElementById("password2").value;
    var type=document.getElementById("user_type").value;
  
var data_fields={
    name:name,
    email:email,
    phno:phno,
    dob:dob,
    pwd:pwd,
    pwd1:pwd1,
    type:type
}

data=JSON.parse(localStorage.getItem("data_fields") || "[]");
data.push(data_fields);
localStorage.setItem("data_fields", JSON.stringify(data));
alert('Your account has been created');
window.location.href = "file:///C:/Users/APPWRK/Documents/Login/register.html";

}
function redirect()
{
    window.location.href="file:///C:/Users/APPWRK/Documents/Login/login.html";
}