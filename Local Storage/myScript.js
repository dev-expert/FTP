function store() {
        var tempName = document.getElementById('nme').value;
        var tempPw = document.getElementById('pw').value;

        for (var i = 0; i < localStorage.length; i++){
            var lc_name = localStorage.key(i);
            if(tempName == lc_name){
                alert("user Exists")
            }

            else
                localStorage.setItem(tempName, tempPw);
        }
}


function check() {
    let userName = document.getElementById('userName').value;
    let userPw = document.getElementById('userPw').value;
    //alert(localStorage.length);
    for (var i = 0; i < localStorage.length; i++){
        var lc_name = localStorage.key(i);
        var lc_pw = localStorage.getItem(lc_name);
        
        if(userName == lc_name && userPw == lc_pw) {
            alert("Logged In");
        }
    }
}