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
var d = x.toFixed(6);
var e = y.toFixed(6);
var f = z.toFixed(6);
document.write( "Ratio of Positive numbers is  : "+ d + "<br></br>")
document.write("Ratio of Negative numbers is : " + e+ "<br></br>")
document.write("Ratio of Zeroes is: " + f)
</script>