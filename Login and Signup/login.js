function showlogin() {
    

    var flag=0;
    var email1 = document.getElementById('email1').value;
    var passwrd1 = document.getElementById('passwrd1').value;

    
    // Traverse the local storage for the key value.
    for (var i = 0; i < localStorage.length; i++) {
        var email_id = localStorage.key(i);
        var passwd_id = localStorage.getItem(localStorage.key(i));

        if (email_id == email1 && passwd_id == passwrd1) {
            
            alert('You are loged in');
            window.location.href = "index.html";
            flag=1;
        }

    }

    if(flag==0)
    {
        alert("Invalid passwrd or username")
        location.reload();
    }

    
}