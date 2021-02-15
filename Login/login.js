function check()
{
        var semail=document.getElementById("email").value;
        var spwd=document.getElementById("password").value;
        var stype=document.getElementById("user_type").value;
        var keys=JSON.parse(localStorage.getItem("data_fields"));
        
        if(keys!=null)
        {
            
            for(i=0;i<keys.length;i++)
            {
              var s=keys[i];
               if(semail===s.email&&spwd===s.pwd&&stype===s.type)
               {
                if(stype=="Admin")
                {
               alert("loggedin as admin");
               window.location.href ="C:/Users/APPWRK/Documents/Login/admin_portal.html";
                 }
                else if(stype=="User")
                {
                alert("logged in as user");
                window.location.href ="C:/Users/APPWRK/Documents/Login/user_portal.html";
                }
                else if(stype=="Both")
                {
                alert("logged in as both user and admin");
                }
                


}}}
else
{
    alert("Error logging in");
}

        }
function redirect()
{
    window.location.href = "file:///C:/Users/APPWRK/Documents/Login/register.html";
}