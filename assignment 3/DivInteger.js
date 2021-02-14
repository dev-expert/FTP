var n =prompt("Enter the digits");
var len = n.length;
count=0;

for(i=0;i<len;i++){
    if(n%n[i]==0){
        count=count+1;
    }
}
document.write(count+"divisor");
