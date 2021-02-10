<script>
a = [1,1,0,-1,-1]
l = a.length;
pos = 0;
neg = 0;
zero = 0;
for(i=0;i<l;i++)
{
if(a[i]>0)
{pos++;}
else if (a[i]<0)
{neg++;}
else
{zero++;}
}
x = pos/l;
y = neg / l;
z = zero / l;

document.write( "Ratio of Positive numbers is  : "+ x.toFixed(6) + "<br></br>")
document.write("Ratio of Negative numbers is : " +y.toFixed(6)+ "<br></br>")
document.write("Ratio of Zeroes is: " + z.toFixed(6))
</script>
