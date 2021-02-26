
window.addEventListener("load", async () => {
  // var url = JSON.parse(localStorage.getItem("admin"));

  debugger;
  refreshHTML();


})

async function refreshHTML() {
  var response = await fetch('http://localhost:8080/admin');
  const getData = await response.json();
  console.log(getData);

  let str = "";
  getData.forEach(element => {



    str += `
        <tr>
        <td>${element.firstname}</td>
        <td>${element.email}</td>
        <td>${element.number}</td>
        <td><button type="button" onclick="deleteOnebyOne('${element.email}') "class="delete-btn">Delete</button></td>
      </tr>`

  });
  document.getElementById("fetch").innerHTML = str;

}

async function deleteOnebyOne(e) {
  debugger;

  // var url = JSON.parse(localStorage.getItem("admin"));
  await fetch('http://localhost:8080/delete/' + e);

  refreshHTML();
}

