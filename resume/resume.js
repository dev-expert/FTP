 function store() {

    if (confirm("Are you Sure to save the details") == true) {
        
        var names = document.getElementsByName('val[]');
        
        var keys = document.getElementsByName('key[]');

        let objArray = {};

        for (i = 0; i < names.length; i++) {
            if (names[i].value != "") 
            {
                
                var val= names[i].value;
                var key = keys[i].value;
                objArray[key]=val;
            } 
             
           
        }
        
        localStorage.setItem("User",JSON.stringify(objArray));

    }
    else {
        return window.location.href = "resume.html";
    }


}
window.addEventListener('load',()=>{
//function showdata()
debugger;
    var key=JSON.parse(localStorage.getItem("User"));

      // alerkeys.pro);
        if(key!=null){
            var keys=Object.keys(key);
           for(i=0;i<keys.length;i++)
            {      
                var keyVal= keys[i];
               

                switch (keyVal) {
case "name":          
        document.getElementById("name").innerHTML=key[keyVal];
        break;
        case "qual":
        document.getElementById("qual").innerHTML=key[keyVal];
       break;
        case "email":
        
        document.getElementById("email").innerHTML=key[keyVal];
      break;
      case "address":
        document.getElementById("address").innerHTML=key[keyVal];
      break;
      case "phno":  
      document.getElementById("phno").innerHTML=key[keyVal];
       break;
       case "edu":
        document.getElementById("edu").innerHTML=key[keyVal];
       break;
       case "pro":

        document.getElementById("pro").innerHTML=key[keyVal];
       break;
       case "achi":
        document.getElementById("achi").innerHTML=key[keyVal];
      break;
      case "assess":
            document.getElementById("assess").innerHTML=key[keyVal];
            break;
            case "semi":
            document.getElementById("semi").innerHTML=key[keyVal];
            break;
            case "exrta":
            document.getElementById("extra").innerHTML=key[keyVal];
            break;
            case "per":
            document.getElementById("per").innerHTML=key[keyVal];
            break;
            case "web":
            document.getElementById("web").innerHTML=key[keyVal];
           break;
           case "pd":
            document.getElementById("pd").innerHTML=key[keyVal];
               break;
        
       }
        //document.getElementById("data").innerHTML=keys.pro;
}
        }})
