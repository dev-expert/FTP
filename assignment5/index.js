function information() {

    if (confirm("Are you Sure to save the details") == true) {
        
        var names = document.getElementsByName('name[]');
        
        var keys = document.getElementsByName('key[]');

        let objArray = {};

        for (i = 0; i < names.length; i++) {
            if (names[i].value != "") {
                var key = keys[i].value;
                var name= names[i].value;
                objArray[key] = name;
            } 
             
           
        }
        
        localStorage.setItem("User",JSON.stringify(objArray));

    }
    else {
        return window.location.href = "index.html";
    }


}