n = parseInt(prompt("enter the number"));
count=0;
a=n;
while(a>0)
{
k=a%10;
if(n%k==0)
{
count++;
}
a=parseInt(a/10);
}
document.write("the nuumber is" + n)
document.write("<br> the result is" + count)
