// function cal()
// {debugger;
// var a=document.getElementById("obtained10").value;
// var b=document.getElementById("total10").value;
// var c=(a/b)*100;
// document.getElementById("percent10").innerHTML=c;

// }

// function calc()
// {debugger;
//     var a=document.getElementById("obtained12").value;
//     var b=document.getElementById("total12").value;
//     var c=(a/b)*100;
//     document.getElementById("percent12").innerHTML=c;
    
// }



function store() 
{debugger;
     if (confirm("Are you Sure to save the details") == true)
     {
         var s=JSON.parse(localStorage.getItem("info"));
         var firstname=document.getElementById("firstname").value;
         var lastname=document.getElementById("lastname").value;
         var email=document.getElementById("email").value;
         var phonenumber=document.getElementById("phone_number").value;
         var address=document.getElementById("address").value;
         var weblink=document.getElementById("weblink").value;
         
         var hobbies=document.getElementById("hobbies").value;
         
         var education=document.getElementById("education").value;
         var skills=document.getElementById("skills").value;
         var projects=document.getElementById("projects").value;
         var dob=document.getElementById("dob").value;
         var graduation=document.getElementById("graduation").value;
         var collegename=document.getElementById("collegename").value;
         var marksg=document.getElementById("marksg").value;
         var postgrad=document.getElementById("postgrad").value;
         var college=document.getElementById("college").value;
         var marksp=document.getElementById("marksp").value;
       

        
         
             var info={
                 firstname:firstname,
                 lastname:lastname,
                 email:email,
                 phonenumber:phonenumber,
                 address:address,
                 weblink:weblink,
                 
                 hobbies:hobbies,
                 
                 education:education,
                 skills:skills,
                 projects:projects,
                 dob:dob,
                 oview:oview,
                 graduation:graduation,
                 collegename:collegename,
                 marksg:marksg,
                 postgrad:postgrad,
                 college:college,
                 marksp:marksp
             }
          
            
            localStorage.setItem("info", JSON.stringify(info));
            
         }

        
        }
    

   
   function showdata(){
       debugger;
        var data=JSON.parse(localStorage.getItem("info"));
    var keys = Object.keys(data);
        if(keys!=null){
            for(i=0;i<keys.length;i++)
            {
              var s=keys[i];
              switch(s)
              {
                  case "firstname":
                document.getElementById("firstname").innerHTML= data[s];
                break;
                case "lastname":
                document.getElementById("lastname").innerHTML= data[s];
                break;
                case "email":
                document.getElementById("email").innerHTML= data[s];
                break;
                case "phonenumber":
                document.getElementById("phonenumber").innerHTML= data[s];
                break;
                case "address":
                document.getElementById("address").innerHTML= data[s];
                break;
                case "weblink":
                document.getElementById("weblink").innerHTML=data[s];
                break;
                // case "female":
                // document.getElementById("gender").innerHTML= data[s];
                // break;
                case "hobbies":
                document.getElementById("hobbies").innerHTML= data[s];
                break;
                
            
                case "skills":
                document.getElementById("skills").innerHTML= data[s];
                break;
                case "projects":
                document.getElementById("projects").innerHTML= data[s];
                break;
                case "dob":
                document.getElementById("dob").innerHTML= data[s];
                break;
                case "oview":
                document.getElementById("oview").innerHTML= data[s];
                break;
                case "graduation":
                document.getElementById("graduation").innerHTML= data[s];
                break;
                case "collegename":
                document.getElementById("collegename").innerHTML= data[s];
                break;
                case "marksg":
                document.getElementById("marksg").innerHTML= data[s];
                break;
                case "postgrad":
                document.getElementById("postgrad").innerHTML= data[s];
                break;
                case "college":
                document.getElementById("college").innerHTML= data[s];
                break;
                case "marksp":
                document.getElementById("marksp").innerHTML= data[s];
                break;
              }
         
            
            }   
        }
}

