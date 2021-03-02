var arr = [];
i = 1;

debugger;
function add()
{
fname1 = document.getElementById("fname").value;
lname = document.getElementById("lname").value;
 email = document.getElementById("email").value;
school1 = document.getElementById("school1").value;
school2 = document.getElementById("school2").value;
school3 = document.getElementById("school3").value;
qual1 = document.getElementById("qual1").value;
qual2 = document.getElementById("qual2").value;
qual3 = document.getElementById("qual3").value;
mobile = document.getElementById("mobile").value;
role = document.getElementById("role").value;
lnkin = document.getElementById("linkedin").value;
loc1 = document.getElementById("loc2").value;
ins1 = document.getElementById("instagram").value;
git1 = document.getElementById("github").value;
proj1 = document.getElementById("pro1").value;
proj2= document.getElementById("pro2").value;
proj3= document.getElementById("pro3").value;

proj12 = document.getElementById("pro12").value;
proj22= document.getElementById("pro22").value;
proj32= document.getElementById("pro32").value;
// ski1=document.getElementById("sk1").value;
// ski2=document.getElementById("sk2").value;
// ski3=document.getElementById("sk3").value;
// ski4=document.getElementById("sk4").value;
// ski5=document.getElementById("sk5").value;
// ski6=document.getElementById("sk6").value;
Ach1=document.getElementById("ac1").value;
Ach2=document.getElementById("ac2").value;
Ach3=document.getElementById("ac3").value;
o1=document.getElementById("o1").value;
o2=document.getElementById("o2").value;
l1=document.getElementById("l1").value;
l2=document.getElementById("l2").value;
l3=document.getElementById("l3").value;
l4=document.getElementById("l4").value;
h1=document.getElementById("h1").value;
h2=document.getElementById("h2").value;
h3=document.getElementById("h3").value;
h4=document.getElementById("h4").value;
c1=document.getElementById("c1").value;
c2=document.getElementById("c2").value;
c3=document.getElementById("c3").value;
cgpa1=document.getElementById("cgpa1").value;
cgpa2=document.getElementById("cgpa2").value;
cgpa3=document.getElementById("cgpa3").value;
bio=document.getElementById("bio").value;



 obj = {
  fn : fname1,
  ln: lname,
  mail : email,
  scl1: school1,
  scl2: school2,
  scl3: school3,
  qul1 : qual1,
  qul2 : qual2,
  qul3 : qual3,
  mbl: mobile,
  rol : role,
  lnk : lnkin,
  loc : loc1,
  git:git1,
  ins:ins1,
  pro1:proj1,
  pro3:proj3,
  pro2:proj2,
  // s1 : ski1,
  // s2 : ski2,
  // s3 : ski3,
  // s4 : ski4,
  // s5 : ski5,
  // s6 : ski6,
  ac1:Ach1,
  ac2:Ach2,
  ac3:Ach3,
  l1:l1,
  l2:l2,
  l3:l3,
  l4:l4,
  o1:o1,
  o2:o2,
  h1:h1,
  h2:h2,
  h3:h3,
  h4:h4,
  c1:c1,
  c2:c2,
  c3:c3,
  pro12:proj12,
  pro32:proj32,
  pro22:proj22,
  cgpa1:cgpa1,
  cgpa2:cgpa2,
  cgpa3:cgpa3,
  bio:bio
}
  localStorage.setItem("user" , JSON.stringify(obj));


    for(var j =1;j<i;j++)
    {
        arr[j-1] =  document.getElementById("skill"+j).value;
    }
    localStorage.setItem("skills" , JSON.stringify(arr));
}
function sk()
{
  
  
      if(i<=6)
      {
      var sk = document.getElementById("skills");
      
      var newS = document.createElement("input");
      newS.setAttribute("type","text");
      newS.setAttribute("id","skill"+i);
      newS.setAttribute("placeholder","skill"+(i++));
      var pos = sk.childElementCount;
      sk.insertBefore(newS,sk.childNodes[pos]);
      }
      else
      {
          alert("Max skill limit is 6");
      }
  
}