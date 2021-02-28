async function showdata()
{
    debugger;
    var fname=document.getElementById("firstname").value;
    var lname =document.getElementById("lastname").value;


    var elements = { firstname: fname, lastname :lname  }

     const store =   await fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(elements)
        });
      var success =store.json();
      if(success){
          alert("sugnup successfully");
          window.open("show.html");
      }

}
 async function myfunction(){
    debugger
    const stor1=await fetch("http://localhost:8080/dev");
    const response = await stor1.json();
    var k=response;
    if(k!=null){
        for(i=0;i<k.length;i++)
        {
          var s=k[i];
        //  if(s.firstname=="shubham"){
            document.getElementById("fname").innerHTML=s.firstname;
            document.getElementById("lname").innerHTML=s.lastname;
        // }
        //   document.write(s.firstname,"<br>");
        //   const value = response["0"];
        //   document.getElementById("name").innerHTML = value["firstname"];
}
}
 }