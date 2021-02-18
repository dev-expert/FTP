
function call()
	 {	
		
			'use strict';
			var get, create, text, i;
			get = localStorage.getItem("data_fields");
			create = JSON.parse(get);
			let str = "";

			for (i = 0; i < create.length; i++) 
			{ 
				var email = create[i].email;
				var utype=create[i].type;
				if(utype=="User")
				{
			str+=`<tr>
					<td>${create[i].name}</td>
					<td>${create[i].email}</td>
					<td>${create[i].phno}</td>
					<td>${create[i].dob}</td>
					<td>${create[i].type}</td>
					<td><button type="button" onclick="deleteRow('${email}')">Delete</button></td>
					<tr>`;
					}
					else{
						str+=`<tr>
					<td>${create[i].name}</td>
					<td>${create[i].email}</td>
					<td>${create[i].phno}</td>
					<td>${create[i].dob}</td>
					<td>${create[i].type}</td><tr>`;
					}



			}
			document.getElementById("dtable").innerHTML = str;

		}
function deleteRow(e) 
		{
			
			
		var url = JSON.parse(localStorage.getItem("data_fields"));
	    console.log(url);
    	url.forEach(element=>{
        if(element.email==e)
		{
        url.splice(url.indexOf(element),1);
        }
        })
        localStorage.setItem("data_fields",JSON.stringify(url));
        window.location.href = "admin_portal.html";
		}

function redirect()
		{
			localStorage.removeItem("df");
			window.location.href = "file:///C:/Users/APPWRK/Documents/Login/register.html";
			
			window.history.forward();
   			 setTimeout("preventBack()", 0);
    		window.onunload=function(){null};
		}
function display_name()
		{ 
			// var create1=JSON.parse(localStorage.getItem("df"));
			// var q=create1[0];
			//document.getElementById("sam").innerHTML=q.name;
			
		 var login=JSON.parse(localStorage.getItem("df"));
		//  var a=login[0];
		//  var name=login[name];
		//  document.getElementById("username").innerHTML=name;
		 
		
		 if(login===null)
		 {
			window.location.href="login.html";
		 }
		 var uname=login["name"];
		 
		 document.getElementById("username").innerText=uname;
		}
