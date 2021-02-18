/*
function sendData(){
window.addEventListener('load',()=>{
    const params = (new URL(document.location)).searchParams;
    const name=params.get('fname');
    const mobile=params.get('mobile');
    document.getElementById('namee').innerHTML=name;
    document.getElementById('mobilee').innerHTML=mobile;
})
*/

function sendData(){

    const name=document.getElementById('fname').value;
    const mobile=document.getElementById('mobile').value;
   
    const email=document.getElementById('email').value;
    const linkedin=document.getElementById('linkedin').value;
    const age=document.getElementById('age').value;
    const aboutme=document.getElementById('aboutme').value;
    const postgraduation=document.getElementById('postgraduation').value;
    const postgraduationuniversity=document.getElementById('postgraduationuniversity').value;
    const postgraduationcomplete=document.getElementById('postgraduationcomplete').value;
    const graduation=document.getElementById('graduation').value;
    const graduationuniversity=document.getElementById('graduationuniversity').value;
    const graduationcgpa=document.getElementById('graduationcgpa').value;
    const graduationcomplete=document.getElementById('graduationcomplete').value;
    const twelthstream=document.getElementById('12thstream').value;
    const schoolname12th=document.getElementById('schoolname12th').value;
    const schoolboard12th=document.getElementById('schoolboard12th').value;
    const percentage12th=document.getElementById('percentage12th').value;
    const complete12th=document.getElementById('complete12th').value;
    const school10th=document.getElementById('school10th').value;
    const school10thboard=document.getElementById('school10thboard').value;
    const percentage10th=document.getElementById('percentage10th').value;
    const complete10th=document.getElementById('complete10th').value;
    const certification1=document.getElementById('certification1').value;
    const certification2=document.getElementById('certification2').value;
    const certification3=document.getElementById('certification3').value;
    const skill1=document.getElementById('skill1').value;
    const skill2=document.getElementById('skill2').value;
    const skill3=document.getElementById('skill3').value;
    const skill4=document.getElementById('skill4').value;
    const skill5=document.getElementById('skill5').value;
    const skill6=document.getElementById('skill6').value;
    const computerproficiency=document.getElementById('computerproficiencyy').value;
    const languages=document.getElementById('languagess').value;
    const personalinterest1=document.getElementById('personalinterest1').value;
    const personalinterest2=document.getElementById('personalinterest2').value;
    const fathernamee=document.getElementById('fathername').value;
    const gender=document.getElementById('genderr').value;
    const maritalstatus=document.getElementById('maritalstatuss').value;
    const nationality=document.getElementById('nationalityy').value;
    const electronicsign=document.getElementById('electronicsignn').value;
    const place=document.getElementById('placee').value;
    const myFile=document.getElementById('img').value;

    



    localStorage.setItem("Name",name);
    localStorage.setItem("Mobile",mobile);
    localStorage.setItem("Email",email);
    localStorage.setItem("Linkedin",linkedin);
    localStorage.setItem("Age",age);
    localStorage.setItem("About Me",aboutme);
    localStorage.setItem("Post Graduation",postgraduation);
    localStorage.setItem("Post Graduation University",postgraduationuniversity);
    localStorage.setItem("Post Graduation Complete",postgraduationcomplete);
    localStorage.setItem("Graduation",graduation);
    localStorage.setItem("Graduation University",graduationuniversity);
    localStorage.setItem("Graduation CGPA",graduationcgpa);
    localStorage.setItem("Graduation Complete",graduationcomplete);
    localStorage.setItem("12th Stream",twelthstream);
    localStorage.setItem("12th School Name",schoolname12th);
    localStorage.setItem("12th School Board",schoolboard12th);
    localStorage.setItem("12th Percentage",percentage12th);
    localStorage.setItem("12th Complete",complete12th);
    localStorage.setItem("10th School",school10th);
    localStorage.setItem("10th School Board",school10thboard);
    localStorage.setItem("10th School Percentage",percentage10th);
    localStorage.setItem("10th School Complete",complete10th);
    localStorage.setItem("Certification 1",certification1);
    localStorage.setItem("Certification 2",certification2);
    localStorage.setItem("Certification 3",certification3);
    localStorage.setItem("Skill 1",skill1);
    localStorage.setItem("Skill 2",skill2);
    localStorage.setItem("Skill 3",skill3);
    localStorage.setItem("Skill 4",skill4);
    localStorage.setItem("Skill 5",skill5);
    localStorage.setItem("Skill 6",skill6);
    localStorage.setItem("Computer Proficiency",computerproficiency);
    localStorage.setItem("Languages",languages);
    localStorage.setItem("Personal Interest 1",personalinterest1);
    localStorage.setItem("Personal Interest 2",personalinterest2);
    localStorage.setItem("Father Name",fathernamee);
    localStorage.setItem("Gender",gender);
    localStorage.setItem("Marital Status",maritalstatus);
    localStorage.setItem("Nationality",nationality);
    localStorage.setItem("Electronic Sign",electronicsign);
    localStorage.setItem("Place",place);
    localStorage.setItem("Image",myFile);



}



/* function sendData(){
     var name=document.getElementById('fname').value;
     var mobile=document.getElementById('mobile').value;
     var email=document.getElementById('email').value;
     var linkedin=document.getElementById('linkedin').value;
     var age=document.getElementById('age').value;
     var aboutme=document.getElementById('aboutme').value;

     document.getElementById('namee').innerHTML=name;
     document.getElementById('linkedin').innerHTML=linkedin;
     document.getElementById('mobilenumber').innerHTML=mobile;
     document.getElementById('agee').innerHTML=age;
     document.getElementById('aboutmee').innerHTML=aboutme;
     document.getElementById('emaill').innerHTML=email;
/*
        function sendData()
        {
        check();
        function getParams(){
            var idx = document.URL.indexOf('?');
            var params = new Array();
           
            if (idx != -1) {
                var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
                for (var i=0; i<pairs.length; i++){
                    nameVal = pairs[i].split('=');
                    params[nameVal[0]] = nameVal[1];
                }
            }
            return params;
        }
        function check()
        {
        params=getParams();
        
        firstname = unescape(params["fname"]);
        email = unescape(params["email"]);
        age = unescape(params["age"]);
        mobile=unescape(params["mobile"])
        linkedin= unescape(params["linkedin"]);
        aboutme=unescape(params["aboutme"]);

        document.getElementById("namee").innerHTML=firstname;
        document.getElementById("linkedin").value=linkedin;
        document.getElementById("mobilenumber").value=mobile;
        document.getElementById("agee").value=age;
        document.getElementById("aboutmee").value=aboutme;
        document.getElementById("emaill").value=email;

        
        
        }
*/
