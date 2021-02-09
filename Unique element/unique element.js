a = [1,2,3,4,3,2,1]
l = a.length;
k='';
for(i=0;i<l;i++)
{
  count=0
 
  for(j=0;j<l;j++)
  {
    if(a[i]==a[j])
    {
    count++;
    }
   
  }
  if(count==1)
  {
    k = k+ a[i];
  }
}
document.write(k[0]);