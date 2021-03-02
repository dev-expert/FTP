


window.addEventListener('load', async() => {
myresume();
})
async function myresume(){

    var login_info = JSON.parse(localStorage.getItem("login"));
    var value = login_info["email"];

    
  var response = await fetch('http://localhost:8080/checkuser/'+value);
  const getData = await response.json();
 if (getData.length>0){
const data = getData[getData.length-1];

    var keys = Object.keys(data); 
    for (i = 0; i < keys.length; i++) {


        var key = keys[i];

        switch (key) {

            case "Name":
                document.getElementById("username").innerHTML = data[key];
                break;
            case "email":
                document.getElementById("email").innerHTML = `<i class="fas fa-envelope-square"></i>  ` + data[key];
                break;
            case "ContactNo-":
                document.getElementById("cont").innerHTML = `<i class="fas fa-phone"></i>  ` + data[key];
                break;
            case "Profile":
                document.getElementById("professional").innerHTML = data[key];
                break;
            case "About":
                document.getElementById("about").innerHTML = data[key];
                break;

            case "image":
                var str = data[key];
                count=0;
                
                var lastIndex = str.lastIndexOf("\\");
                console.log(lastIndex);
                var strslice=str.substr(lastIndex+1, str.length);
            

                document.getElementById("image").src = strslice;
                break;

            case "Graduate":
                document.getElementById("Grad").innerHTML = data[key];
                break;
            case "Intermediate":
                document.getElementById("Inter").innerHTML = data[key];
                break;
            case "Highschool":
                document.getElementById("High").innerHTML = data[key];
                break;

            case "Projects":

   
                var projectdata=data["Projects"]; 
                var projectKey = Object.keys(projectdata);
                str="";
                Project=[];
                for(j=0;j<projectKey.length;j++){
                    var val=projectdata[projectKey[j]];
                    str = `<p>${val}</p>`;
                    Project.push(str);
                 
                }
                document.getElementById("Projects").innerHTML=Project.join('');
            
                
                break;

           

            case "Skills":
            
   
                var skilldata=data["Skills"];
                var skillkey = Object.keys(skilldata);
                str="";
                skill=[];
                for(k=0;k<skillkey.length;k++){
                    var skillVal=skilldata[skillkey[k]];
                    str = `<span>${skillVal}</span>`;
                    skill.push(str);
                 
                }
                document.getElementById("skill").innerHTML=skill.join('');
                
                break;

            
                case "CM":
                    document.getElementById("CM").innerHTML = data[key];
                    break;
    
                case "start":
                    document.getElementById("start").innerHTML = data[key];
                    break;
                case "end":
                    document.getElementById("end").innerHTML = data[key];
                     break;
                case "Project":
                    document.getElementById("Project").innerHTML = data[key];
                    break;
                    
                case "C1":
                    document.getElementById("C1").innerHTML = data[key];
                    break;
    
                case "C2":
                    document.getElementById("C2").innerHTML = data[key];
                    break;
                case "C3":
                    document.getElementById("C3").innerHTML = data[key];
                    break;
                case "C4":
                    document.getElementById("C4").innerHTML = data[key];
                    break;
                    
                case "C5":
                    document.getElementById("C5").innerHTML = data[key];
                    break;
                    
                case "L1":
                    document.getElementById("L1").innerHTML = data[key];
                    break;
    
                case "L2":
                    document.getElementById("L2").innerHTML = data[key];
                    break;
                case "L3":
                    document.getElementById("L3").innerHTML = data[key];
                    break;
                    
                    
                case "I1":
                    document.getElementById("I1").innerHTML = data[key];
                    break;
    
                case "I2":
                    document.getElementById("I2").innerHTML = data[key];
                    break;
                case "I3":
                    document.getElementById("I3").innerHTML = data[key];
                    break;
                    
                case "S1":
                    document.getElementById("S1").innerHTML =`<i class="fab fa-github-square"></i> `+ data[key];
                    break;
    
                case "S2":
                    document.getElementById("S2").innerHTML = `<i class="fab fa-facebook-f"></i> `+data[key];
                    break;
                case "S3":
                    document.getElementById("S3").innerHTML = `<i class="fab fa-linkedin"></i> `+data[key];
                    break;

        }
    }

 }
 else{
     document.getElementById("cv").style.display="none";
     document.getElementById("notfound").style.display="block";
 }
}

