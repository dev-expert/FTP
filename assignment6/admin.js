
window.addEventListener("load", async () => {
  // var url = JSON.parse(localStorage.getItem("admin"));

  
  refreshHTML();


})

async function refreshHTML() {
  
  var response = await fetch('http://localhost:8080/admin');
  const getData = await response.json();
  console.log(getData);

  let str = "";
  if(getData.length>0){
  getData.forEach(element => {



    var admin = "User";
    if (element.isAdmin==true){
         admin = "Admin";
    

    str += `
    <tr>
    <td>${element.firstname}</td>
    <td>${element.email}</td>
    <td>${admin}</td>
    <td></td>
  </tr>`
    }
    else{
        str += `
        <tr>
        <td>${element.firstname}</td>
        <td>${element.email}</td>
        <td>${admin}</td> 
        <td><button type="button" onclick="deleteOnebyOne('${element.email}') "class="btn-danger">Delete</button></td>
      </tr>`
    }

  });
  document.getElementById("fetch").innerHTML = str;
}
else{
  
  document.getElementById("fetch").innerHTML = "";
  document.getElementById("empty").innerHTML = "product not found";
}


}

async function deleteOnebyOne(e) {

  if(confirm(`Are you sure to delete ${e}`)){
  // var url = JSON.parse(localStorage.getItem("admin"));
  const response =await fetch('http://localhost:8080/delete/' + e);
 const res= await response.json();
console.log(res);
  refreshHTML();
}
  else{
    refreshHTML();
  }
}

