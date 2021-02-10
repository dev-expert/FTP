var n =prompt("Enter the number");
var arr = [];
for(var i=0;i<n;i++)
{
arr[i]= prompt("Enter the element"); 
}

for(var i=0;i<n;i++)
{
if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]))
{
document.write(arr[i]);
}
}