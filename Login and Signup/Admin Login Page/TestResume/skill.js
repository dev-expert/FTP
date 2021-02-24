var skill ="";
var skills=[];
let skillCount=1;
function addskills(){
    
    
skillCount++;
skill = `
<input type="text" name="SkillValue[]" placeholder="SKill ${skillCount}"required>
<br>
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

    