let AllUsers=[];
function setAction() {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var keys=JSON.parse(localStorage.getItem("users"));
    var flag=0;
    if(keys!=null){
    for(i=0;i<keys.length;i++)
    {
      var s=keys[i];
      console.log(s.email);
      if(s.email===email && s.password===password){
      flag=1;
      }
    }
    if(flag==1)
    {
      login();
    }
    else{
      alert("WRONG USERNAME OR PASSWORD");
    }
  }
  }
function register(){
    var rname = document.getElementById("usernamesignup").value;
    var remail = document.getElementById("emailsignup").value;
    var rpassword = document.getElementById("passwordsignup").value;
    var flag=0;
    var keys=JSON.parse(localStorage.getItem("users"));
    if(keys!=null){
    for(i=0;i<keys.length;i++)
    {
      var s=keys[i];
      console.log(s.email);
      if(s.email===remail){
        flag=1;
      }
    }
  }
    console.log(flag);
    if(flag==1){
      alert("USER ALREADY REGISTERED");
    }
    else{
    var userdata= {
       name: rname,
       email:remail,
       password: rpassword
    };
    AllUsers=JSON.parse(localStorage.getItem("users") || "[]");
    AllUsers.push(userdata);
    localStorage.setItem("users", JSON.stringify(AllUsers));
  }
}
function clearlocalstorage(){
    localStorage.clear();
}
function login(){
  alert("Login Succcesfull");
}