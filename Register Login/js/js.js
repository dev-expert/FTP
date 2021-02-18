//let storedEmail = [];
//let storedPassword = [];
//let flag=0;

function lucky(){
    var isAdmin=document.getElementById("access").value;
    console.log(isAdmin);
    
    if(isAdmin=="true")
    {
        sendAdminData();
    }
    if(isAdmin=="false"){
        sendUserData();
    }
}

function sendUserData(){


    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;

    if(password!=confirmpassword){
        alert("Please Re-enter Same Password");
        return;
    }


    if(email.length == 0){
        alert('Please fill in email');

    }else if(password.length == 0){
        alert('Please fill in password');

    }

    else{
    
      /*  var pw1 = document.getElementById("password");  
        var pw2 = document.getElementById("confirmpassword");  
        if(pw1 != pw2)  
        {   
          alert("Passwords did not match");  
          break;
        } else {  
          alert("Password created successfully");  
        }  */

        var userDetails={
            email:email,
            password:password,
            isAdmin:"false"
    
        };
    localStorage.setItem(email,JSON.stringify(userDetails));
    alert('Your account has been created');
    }
}



function sendAdminData(){

    
     var emailAdmin = document.getElementById('email').value;
     var passwordAdmin = document.getElementById('password').value;
     var confirmpasswordAdmin = document.getElementById('confirmpassword').value;
     if(passwordAdmin!=confirmpasswordAdmin){
        alert("Please Re-enter Same Password");
        return;
    }
 
     if(emailAdmin.length == 0){
         alert('Please fill in email');
 
     }else if(passwordAdmin.length == 0){
         alert('Please fill in password');
 
     }
     
     else{

        var userDetails={
            email:emailAdmin,
            password:passwordAdmin,
            isAdmin:"true"
    
        };
    localStorage.setItem(emailAdmin,JSON.stringify(userDetails));
     
     
     alert('Your account has been created');

     }

 }



function getData(){



   // var storedEmail = JSON.parse(localStorage.getItem('email'));
   // var storedPassword = JSON.parse(localStorage.getItem('password'));

    var emaillogin = document.getElementById('emaillogin').value;
    var passwordlogin = document.getElementById('passwordlogin').value;
    
    
    var adminDetails = JSON.parse(localStorage.getItem(emaillogin));
    //alert(JSON.stringify(adminDetails));
    

   
var count=0;
for(var i=0;i<localStorage.length;i++)
{
    
    if(localStorage.key(i)==emaillogin && adminDetails.password==passwordlogin && adminDetails.isAdmin=="true")
    {
        localStorage.setItem("abc", "Smith");
        window.open("admin.html");
        break;
    }
    else if(localStorage.key(i)==emaillogin && adminDetails.password==passwordlogin && adminDetails.isAdmin=="false"){
        localStorage.setItem("abc", "Smith");
        window.open("user.html");
        break;
    }

    count++;
}

if(count==localStorage.length)
{
    alert('User Doesnot exist');
}











/*    for()

    for(emaillogin in userDetails)
    {
    if(emaillogin==adminDetails.email && passwordlogin==adminDetails.password){

    
    if(adminDetails.isAdmin==true)
    {
        window.open("welcome.html");
    }
    
}
*/
}

/*

function newPage() {
    window.open("welcome.html");
  }
  */