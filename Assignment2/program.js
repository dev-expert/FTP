function login()
{
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

   var person = JSON.parse(localStorage.getItem("person"));
   var q = person.find(x=>x.email == user)
   if(pass == q.password)
   {
       alert(q.firstname);
   }
   else{
       alert("u need to register first");
   }
    
    
}

