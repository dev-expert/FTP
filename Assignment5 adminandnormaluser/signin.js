function login1() {
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    
   var person = JSON.parse(localStorage.getItem("person"));
   var q = person.find(x=>x.email == user)
   if(pass == q.password)
   {
       window.open("result2.html")
       
   }
   else{
       alert("u need to register first");
   }
   
    }
    function login2() {
        var user = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        
       var superuser = JSON.parse(localStorage.getItem("superuser"));
       var q = superuser.find(x=>x.email == user)
       if(pass == q.password)
       {
           window.open("result1.html")
           
       }
       else{
           alert("u need to register first");
       }
       
        }
function finalq()
        {
            var user1 = document.getElementById('email').value;
            var user = JSON.parse(localStorage.getItem("superuser"));
            var person = JSON.parse(localStorage.getItem("person"));
            if(person.find(x=>x.email == user1))
            {
                login1();
            }
            if(user.find(x=>x.email == user1))
            {
                login2();
            }
        
        }


