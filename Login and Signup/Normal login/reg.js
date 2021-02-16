// function show(){
    
//     function pageRedirect() {
//         window.location.href = "loginpage1.html"
        
//       } 
    
//     // Validation
//     function isValidURL(str) {
//         var pattern = new RegExp('^((https?:)?\\/\\/)?' + // protocol
//         '(?:\\S+(?::\\S*)?@)?' + // authentication
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//         '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locater
//         if (!pattern.test(str)) {
        
//         return false;
//         } else {
//         return true;
//         }
//     }
//     var s=document.getElementById("email").value;
//     // Storing the values in local storage.
//     if(isValidURL(s)){

       
            
//             var email=document.getElementById("email").value;
//             var passwrd=document.getElementById("passwrd").value;
//             // var numbers=document.getElementById("numbers").value;
            
//             localStorage.setItem(email,passwrd);
//             // localStorage.setItem("email",email);
//             // localStorage.setItem("password",passwrd);
//             // localStorage.setItem("number",numbers);
//             alert("Sign Up successfully");
//             pageRedirect();
                
            
            
            
        
//     }
//     else
//     {
//         alert("Invalid email");
//     }
// }