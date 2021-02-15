function store()
 {
   
     var name= document.getElementById("name");
     var email= document.getElementById("email");
     var phno= document.getElementById("contact_no");
     var dob= document.getElementById("dob");			
     var pwd= document.getElementById("password");
     var pwd1= document.getElementById("password2");
     
     var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
     
    if(name.value.length == 0)
    {
        alert('Please fill in name');}
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
                   

    else if(pwd.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pwd.value.length == 0){
        alert('Please fill in email and password');

    }else if(pwd.value.length > 8){
        alert('Max of 8');

    }else if(!pwd.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pwd.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pwd.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');
    }
    
     else
     { localStorage.setItem('name', name.value);
     localStorage.setItem('pwd', pwd1.value);
     alert('Your account has been created');
     window.location.href = "file:///C:/Users/APPWRK/Documents/Login/login.html";
            
            
     }
 }
 
 