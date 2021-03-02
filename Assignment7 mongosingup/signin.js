// function login1() {
//      user = document.getElementById('email').value;
//      pass = document.getElementById('password').value;
    
//    var person = JSON.parse(localStorage.getItem("person"));
//    var q = person.find(x=>x.email == user)
//    if(pass == q.password)
//    {
    
//        window.open("result2.html")
       
//    }
//    else{
//        alert("u need to register first");
//    }
   
    // }
    // function login2() {
    //      user = document.getElementById('email').value;
    //      pass = document.getElementById('password').value;
        
    //    var superuser = JSON.parse(localStorage.getItem("superuser"));
    //    var q = superuser.find(x=>x.email == user)
    //    if(pass == q.password)
    //    {
    //        localStorage.setItem("currUser",user);
    //        window.open("result1.html")

           
    //    }
    //    else{
    //        alert("u need to register first");
    //    }
       
        // }

var keys,data;
            fetch("http://localhost:8091/login")
            .then(response => response.json())
            .then(data => { 
                console.log("Hello");
                keys=data;
                // add(keys);
                
        });
        function add()
        {
            //debugger;
             user = document.getElementById('email').value;
         pass = document.getElementById('password').value;
         for (i = 0; i < keys.length; i++) {
            s = keys[i];
            var useremail1 = s.email;
            var userpassword1 = s.password;
            if (useremail1 == user && userpassword1 == pass) {

                // alert("welcome to user world");
                //     window.open("studentpage.HTML");
                if (s.usertype == "superuser") {
                    alert("welcome to admin world");
                    localStorage.setItem("currUser", useremail1);

                    window.open("result1.html");
                }
                else {
                    alert("welcome to user world");
                    window.open("result2.html");
                }
                

            }
        }
        }


