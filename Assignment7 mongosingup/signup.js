function register1() {
    var fnam = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var num= document.getElementById('number').value;
    var doo = document.getElementById('dob').value;
    var detail="superuser"

    
     obj = {firstname:fnam,lastname:lname,email:user,password:pass,number:num,dob:doo,usertype:detail}
    
    fetch("http://localhost:8091/register", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
        })
        // .then(response => {
        // debugger;
        // return response.json()
        // })
        .then(data => {
        console.log("Succes :", data);
        })
    }

function register2() {
        var fnam = document.getElementById('firstname').value;
        var lname = document.getElementById('lastname').value;
        var user = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        var num= document.getElementById('number').value;
        var doo = document.getElementById('dob').value;
        var detail="normaluser"
    
        
        obj = {firstname:fnam,lastname:lname,email:user,password:pass,number:num,dob:doo,usertype:detail}
    
        
        fetch("http://localhost:8091/register", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
        })
        // .then(response => {
        // debugger;
        // return response.json()
        // })
        .then(data => {
        console.log("Succes :", data);
        })
}