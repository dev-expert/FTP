function register() {
    var fnam = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var number = document.getElementById('number').value;
    var dob = document.getElementById('dob').value;

    // localStorage.setItem('firstname', firstname);
    // localStorage.setItem('lastname', lastname);
    // localStorage.setItem('email', email);
    // localStorage.setItem('password', password);
    // localStorage.setItem('number', number);
    // localStorage.setItem('dob', dob);
    
    var obj = {firstname:fnam,email:user,password:pass}
    
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

    function loginbutton(){
        <a href="login.html"></a>
     }