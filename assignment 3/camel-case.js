var string =  prompt("enter the string");
var len = string.length;
var count=1;
for (i=0;i<len;i++){
   var val= string.charCodeAt(i);
   if(val<=90){
       count=count+1;
   }
  
}
 console.log(count);