
window.addEventListener('load', () => {


    var value = JSON.parse(localStorage.getItem("User"));
    console.log(value);
    var keys = Object.keys(value); 
    for (i = 0; i < keys.length; i++) {


        var key = keys[i];

        switch (key) {

            case "Name":
                document.getElementById("name").innerHTML = value[key];
                break;
            case "email":
                document.getElementById("email").innerHTML = `<i class="fas fa-envelope-square"></i>  ` + value[key];
                break;
            case "ContactNo-":
                document.getElementById("cont").innerHTML = `<i class="fas fa-phone"></i>  ` + value[key];
                break;
            case "Profile":
                document.getElementById("professional").innerHTML = value[key];
                break;
            case "About":
                document.getElementById("about").innerHTML = value[key];
                break;

            case "image":
                var str = value[key];
                count=0;
                var s="\\";
                var lastIndex = str.lastIndexOf("\\");
                console.log(lastIndex);
                var strslice=str.substr(lastIndex+1, str.length);
            

                document.getElementById("image").src = strslice;
                break;

            case "Graduate":
                document.getElementById("Grad").innerHTML = value[key];
                break;
            case "Intermediate":
                document.getElementById("Inter").innerHTML = value[key];
                break;
            case "Highschool":
                document.getElementById("High").innerHTML = value[key];
                break;

            case "Project1":
                document.getElementById("P1").innerHTML = value[key];
                break;

            case "Project2":
                document.getElementById("P2").innerHTML = value[key];
                break;
            case "Project3":
                document.getElementById("P3").innerHTML = value[key];
                break;
            case "Project4":
                document.getElementById("P4").innerHTML = value[key];
                break;

            case "Skills1":
                document.getElementById("1").innerHTML = value[key];
                break;

            case "Skills2":
                document.getElementById("2").innerHTML = value[key];
                break;
            case "Skills3":
                document.getElementById("3").innerHTML = value[key];
                break;
            case "Skills4":
                document.getElementById("4").innerHTML = value[key];
                break;
            
                case "CM":
                    document.getElementById("CM").innerHTML = value[key];
                    break;
    
                case "start":
                    document.getElementById("start").innerHTML = value[key];
                    break;
                case "end":
                    document.getElementById("end").innerHTML = value[key];
                    break;
                case "Project":
                    document.getElementById("Project").innerHTML = value[key];
                    break;
                    
                case "C1":
                    document.getElementById("C1").innerHTML = value[key];
                    break;
    
                case "C2":
                    document.getElementById("C2").innerHTML = value[key];
                    break;
                case "C3":
                    document.getElementById("C3").innerHTML = value[key];
                    break;
                case "C4":
                    document.getElementById("C4").innerHTML = value[key];
                    break;
                    
                case "C5":
                    document.getElementById("C5").innerHTML = value[key];
                    break;
                    
                case "L1":
                    document.getElementById("L1").innerHTML = value[key];
                    break;
    
                case "L2":
                    document.getElementById("L2").innerHTML = value[key];
                    break;
                case "L3":
                    document.getElementById("L3").innerHTML = value[key];
                    break;
                    
                    
                case "I1":
                    document.getElementById("I1").innerHTML = value[key];
                    break;
    
                case "I2":
                    document.getElementById("I2").innerHTML = value[key];
                    break;
                case "I3":
                    document.getElementById("I3").innerHTML = value[key];
                    break;
                    
                case "S1":
                    document.getElementById("S1").innerHTML =`<i class="fab fa-github-square"></i> `+ value[key];
                    break;
    
                case "S2":
                    document.getElementById("S2").innerHTML = `<i class="fab fa-facebook-f"></i> `+value[key];
                    break;
                case "S3":
                    document.getElementById("S3").innerHTML = `<i class="fab fa-linkedin"></i> `+value[key];
                    break;

        }
    }


})
