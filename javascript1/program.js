let n= prompt("enter the array")
var arr = [];
for(i=0;i<=n-1;i++)
{
  arr[i] = prompt("enter the number");  
}

for(i=0;i<=n-1;i++)
{
let count=0;
 for(j=0;j<=n-1;j++)
 {
  if(arr[i]==arr[j])
  {
  count++;
  }
}

if(count==1)
  {
  document.write(arr[i]+" ");
  }
}



