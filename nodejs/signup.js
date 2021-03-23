function sendData() {
  // debugger;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
  // if(name=='' || email==''|| pass=='')
  // {
  //   return false;
  // }

  
    var signdata = {
      name:name,
      email:email,
      pass:pass
     
    };
  
    // fetch("http://localhost:4000/exportdata", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(signdata),
    // })
    //   .then((response) => response.json())
    //   // // .then((signdata) => {
    //   // //   console.log("Success:", signdata);
    //   // })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
      //alert("data ");
      
  }
