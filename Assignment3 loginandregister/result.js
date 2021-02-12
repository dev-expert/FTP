function login() {
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    
    var person = JSON.parse(localStorage.getItem("person"));
   var q = person.find(x=>x.email == user)
   if(pass == q.password)
   {
       alert("login successfull");
   }
   else{
       alert("u need to register first");
   }
    }

