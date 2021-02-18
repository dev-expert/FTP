function check()

{  
        var semail=document.getElementById("email").value;
        var spwd=document.getElementById("password").value;
        var keys=JSON.parse(localStorage.getItem("data_fields"));
        
        if(keys!=null)
        {
            
            for(i=0;i<keys.length;i++)
            {

              var s=keys[i];
              var stype=keys[i].type;
               if(semail===s.email&&spwd===s.pwd)
                { 
                            var df={
                                name:s.name,     
                                mail:semail};
                        
                            
                        localStorage.setItem("df", JSON.stringify(df));
                        
                        if(stype=="Admin")
                        {
                                //alert("loggedin as admin");
                                window.location.href ="C:/Users/APPWRK/Documents/Login/admin_portal.html";
                        }
                        else if(stype=="User")
                        {
                                //alert("logged in as user");
                                window.location.href ="C:/Users/APPWRK/Documents/Login/user_portal.html";
                        }     
                 
               }
               
            }}
            else
                {
                    alert("Error logging in");
                }  
            
        }

                

    
function redirect()
{
    window.location.href = "file:///C:/Users/APPWRK/Documents/Login/register.html";
}


function Toggle() { 
    var temp = document.getElementById("password"); 
    if (temp.type === "password") 
    { 
        temp.type = "text"; 
    } 
    else { 
        temp.type = "password"; 
    } 
} 

