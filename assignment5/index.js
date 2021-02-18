function information() {
    debugger;

    if (confirm("Are you Sure to save the details") == true) {
        
        var names = document.getElementsByName('name[]');
        
        var keys = document.getElementsByName('key[]');
        var Project = document.getElementsByName('Project[]');
        
        var ProjectValue = document.getElementsByName('ProjectValue[]');
        var Skill = document.getElementsByName('Skill[]');
        
        var SkillValue = document.getElementsByName('SkillValue[]');

        let objArray = {};

        for (i = 0; i < names.length; i++) {
            if (names[i].value != "") {
                var key = keys[i].value;
                var name= names[i].value;
                objArray[key] = name;
            } 
             
           
        }
        let Projects ={};
        for (i = 0; i < Project.length; i++) {
            if (Project[i].value != "") {
                var key = Project[i].value;
                var name=ProjectValue[i].value;
                Projects[key] = name;
            } 
             
           
        }
        objArray.Projects=Projects;
        let Skills ={};
        for (i = 0; i < Skill.length; i++) {
            if (Skill[i].value != "") {
                var key = Skill[i].value;
                var name=SkillValue[i].value;
                Skills[key] = name;
            } 
             
           
        }
        objArray.Skills=Skills;
        
        localStorage.setItem("User",JSON.stringify(objArray));

    }
    else {
        return window.location.href = "index.html";
    }


}

var str ="";
var arr=[];


let buttonCount =1;
function addinput(){
   
    
buttonCount++;
str = `<label for="lname">Project ${buttonCount}:</label><br>
<input type="text" name="ProjectValue[]" placeholder="Project ${buttonCount}"required>
<input type="hidden" name="Project[]" value="Project ${buttonCount}"><br>

`

arr.push(str);
if(arr!=null){
     document.getElementById("minus").style.display="inline-block";
}
else{
    document.getElementById("minus").style.display="none"; 
}
document.getElementById("projectIncrease").innerHTML=arr.join('');


}


let subCount;
function subInput(){
  
  
  arr.pop();
  
  
document.getElementById("projectIncrease").innerHTML=arr.join('');
buttonCount--;
if(arr!=null){
    document.getElementById("minus").style.display="inline-block";
}
else{
   document.getElementById("minus").style.display="none"; 
}


  
  
}
var skill ="";
var skills=[];
let skillCount=1;
function addskills(){
    debugger;
    
skillCount++;
skill = `<label for="lname">Skill ${skillCount}:</label><br>
<input type="text" name="SkillValue[]" placeholder="SKill ${skillCount}"required>
<input type="hidden" name="Skill[]" value="Skill ${skillCount}"><br>

`

skills.push(skill);
if(skills!=null){
     document.getElementById("minusSkills").style.display="inline-block";
}
else{
    document.getElementById("minusSkills").style.display="none"; 
}
document.getElementById("skillIncrease").innerHTML=skills.join('');


}
function subskills(){
    debugger;
  
  skills.pop();
  
  
document.getElementById("skillIncrease").innerHTML=skills.join('');
skillCount--;
if(skills.length!=0){
    document.getElementById("minusSkills").style.display="inline-block";
}
else{
   document.getElementById("minusSkills").style.display="none"; 
}


  
  
}