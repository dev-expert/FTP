
		
		function isUrlValid(str) {
			var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
			  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
			  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
			  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
			  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
			  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
			return !!pattern.test(str);
		  }
		 /* function isenter(a)
		  {
			  if(event.key==="Enter")
			  addRow();
		  }*/

		function addRow() {
			var str=document.getElementById("txt1").value;
			if(isUrlValid(str)){

				var tablevalue = document.getElementById("txt1").value;
				var table=document.getElementById("dataTable");
			}
				
			else{
				alert("This is not valid");

			}
				
				var rowCount = table.rows.length;
				var row = table.insertRow(tablevalue);

				var cell1 = row.insertCell(0);
				var element1 = document.createElement("input");
				element1.type = "checkbox";
				element1.name="chkbox[]";
				cell1.appendChild(element1);

				var cell2 = row.insertCell(1);
				cell2.innerHTML = tablevalue;
		


		}

		function deleteRow() 
		{
			try 
			{
			var table = document.getElementById("dataTable");
			var rowCount = table.rows.length;

			for(var i=0; i<rowCount; i++) 
			{
				var row = table.rows[i];
				var chkbox = row.cells[0].childNodes[0];
				if(null != chkbox && true == chkbox.checked) 
				{
					table.deleteRow(i);
					rowCount--;
					i--;
				}


			}
			}
			catch(e)
			 {
				alert(e);
			}
		}
		function selectAll()
		{
					
			var ele=document.getElementsByName('chkbox[]');  
			for(var i=0; i<ele.length; i++)
			{  
				if(ele[i].type=='checkbox')  
					{ele[i].checked=true;  
					}
					}
					

		}
		function deselectAll()
		{
					
			var ele=document.getElementsByName('chkbox[]');  
                for(var i=0; i<ele.length; i++){  
                    if(ele[i].type=='checkbox')  
                       { ele[i].checked=false; 
							}
							
				}
		}
		function open_page()
	{
		
			
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
	function redirect()
	{
		localStorage.removeItem("df");
		window.location.href = "file:///C:/Users/APPWRK/Documents/Login/register.html";
		
		window.history.forward();
			setTimeout("preventBack()", 0);
		window.onunload=function(){null};
	}