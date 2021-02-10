var n = prompt("enter the array");
var arr = [];
for(i=0;i<=n-1;i++)
{
    arr[i]=prompt("enter the number");
}

    positive=0;
    negative=0;
    zero=0;

for(i=0;i<=n-1;i++)
{    if(arr[i]>0)
    {
        positive++;
    }
     else if(arr[i]<0)
    {
        negative++;
        
    }
    else{
        zero++;
    }
        var x = parseFloat(positive/n); 
        var y = parseFloat(negative/n);
        var z = parseFloat(zero/n);
}
    document.write(x.toFixed(6)+"<br>");
    document.write(y.toFixed(6)+"<br>");
    document.write(z.toFixed(6));
