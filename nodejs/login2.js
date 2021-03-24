
function getdata()
{
    //debugger;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
  
    if (email == '' || password == '') {
      alert("fill details");
      return;
    }

  
    var logindata={
        email:email,
        pass:password
    }

    fetch("http://localhost:4002/checkdata", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(logindata),
  })
  
    .then((response) => response.json())
    .then((logindata) => {
      console.log("Success:", logindata);
      checkcredentials(logindata);
       
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  function checkcredentials(key){
    var flag = 0;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    if (key != null) {
        console.log(key.email);
        if (key.email === email && key.pass=== password) {
          if(key.isadmin)
          {
            alert("login as admin");
          window.location.href="home2.html";
          flag=1;
          } 
          else{
            alert("login as user");
            window.location.href="home2.html";
          flag=1;
          }  
      if (flag == 0) {
        alert("WRONG USERNAME OR PASSWORD");
      }
    }
    
  }
  else {
    alert("Not A Registered User");
  }

  }