
window.addEventListener("load",()=>{
var url = JSON.parse(localStorage.getItem("admin"));
let str = "";
url.forEach(element => {
    var admin = "User";
    if (element.isAdmin==true){
         admin = "Admin";
    

    str += `
    <tr>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${admin}</td>
    <td></td>
  </tr>`
    }
    else{
        str += `
        <tr>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${admin}</td>
        <td><button type="button" onclick="deleteOnebyOne('${element.email}') "class="delete-btn">Delete</button></td>
      </tr>`
    }
});
document.getElementById("fetch").innerHTML = str;



})

function deleteOnebyOne(e) {
    debugger;
    
var url = JSON.parse(localStorage.getItem("admin"));
    console.log(url);
    url.forEach(element=>{
      if(element.email==e){
        url.splice(url.indexOf(element),1);
      }
    })
    
    
    localStorage.setItem("admin",JSON.stringify(url));
    window.location.href = "admin.html";
}

