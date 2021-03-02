
async function call() {
	debugger;
	'use strict';
	// var get, create, text, i;
	// get = localStorage.getItem("data_fields");
	// create = JSON.parse(get);
	const show = await fetch("http://localhost:3000");
	const data = await show.json();
	console.log("data displayed");
	let str = "";

	for (i = 0; i < data.length; i++) {
		var email = data[i].email;
		var utype = data[i].type;
		if (utype == "User") {
			str += `<tr>
					<td>${data[i].name}</td>
					<td>${data[i].email}</td>
					<td>${data[i].phno}</td>
					<td>${data[i].dob}</td>
					<td>${data[i].type}</td>
					<td><button type="button" onclick="deleteRow('${email}')">Delete</button></td>
					<tr>`;
		}
		else {
			str += `<tr>
					<td>${data[i].name}</td>
					<td>${data[i].email}</td>
					<td>${data[i].phno}</td>
					<td>${data[i].dob}</td>
					<td>${data[i].type}</td><tr>`;
		}



	}
	document.getElementById("dtable").innerHTML = str;

}
async function deleteRow(e) {
	debugger;
	var x = confirm("Are you sure you want to delete?");
	if (x == true) {

		// var url = JSON.parse(localStorage.getItem("data_fields"));
		const show = await fetch("http://localhost:3000/delete/"+e);
		const data = await show.json();
		if (data) {
			alert("delete data");
			window.location.href = "admin_portal.html";
		}


	}
	else
		window.location.href = "admin_portal.html";
}

function redirect() {
	localStorage.removeItem("df");
	window.location.href = "register.html";

	window.history.forward();
	setTimeout("preventBack()", 0);
	window.onunload = function () { null };
}
function display_name() {
	// var create1=JSON.parse(localStorage.getItem("df"));
	// var q=create1[0];
	//document.getElementById("sam").innerHTML=q.name;

	var login = JSON.parse(localStorage.getItem("df"));
	//  var a=login[0];
	//  var name=login[name];
	//  document.getElementById("username").innerHTML=name;


	if (login === null) {
		window.location.href = "login.html";
	}
	var uname = login["name"];

	document.getElementById("username").innerText = uname;
}
