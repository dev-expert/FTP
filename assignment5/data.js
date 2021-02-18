window.addEventListener("load",()=>{
    debugger;
    var alldata = JSON.parse(localStorage.getItem("User"));
   
     var skilldata=alldata["skills"];
     var keys = Object.keys(skilldata);
     str="";
     skill=[];
     for(i=0;i<keys.length;i++){
         var value=skilldata[keys[i]];
         str = `<p>${value}</p>`;
         skill.push(str);
      
     }
     document.getElementById("skill").innerHTML=skill.join('');


})