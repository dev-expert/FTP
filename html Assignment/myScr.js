function store() {
    var eml = document.getElementById('nm').value;
    var pwd = document.getElementById('pw').value;
    var a = document.getElementById("user1").value;
    var obj = { email: eml, password: pwd,   Admin:a };
    var old = JSON.parse(localStorage.getItem("person1"));
    if (!old) {
        old = [];
    }
        old.push(obj);

    localStorage.setItem("person1", JSON.stringify(old));
}
function check() {
    let userName = document.getElementById('userName').value;
    let userPw = document.getElementById('userPw').value;
            var person = JSON.parse(localStorage.getItem("person1")); 
            var q = person.find(x=>x.email == userName)
            if(userPw == q.password)
            {
                if(q.Admin == "true")
            {
                alert("Welcome Admin");
                arr=[];
                obj={
                    email:userName,
                    password:userPw
                };
                arr.push(obj);
                localStorage.setItem("presentuser",JSON.stringify(arr));
                window.open("table.html");
            }
            else{
                alert("Entered as a Normal User");
                window.open("form.html.html");
            }
        }
               
}
