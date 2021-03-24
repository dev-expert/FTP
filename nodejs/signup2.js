function sendData() {
  

    const name = document.getElementById("name").value;
    const email = document.getElementById("emailid").value;
    const pass = document.getElementById("password").value;
    if (document.getElementById("check").checked){
      isadmin=true;
    }
    else{
      isadmin=false;
    }
  if(name=='' || email==''|| pass=='')
  {
    return false;
  }

  
    var signdata = {
      name:name,
      email:email,
      pass:pass,
      isadmin:isadmin 
    };
  
    fetch("http://localhost:4002/senddata", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signdata),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
     alert("register successfully ");
      
  }
