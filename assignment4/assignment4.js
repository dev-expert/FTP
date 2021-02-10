
var n=prompt("enter the size of array");
var arr=[];
var countpos=0,countneg=0;countzero=0;
for(var i=0;i<n;i++)
    {
        var k=prompt("enter the elements of array");
        arr.push(k);
    }
    document.write("array elements are:",arr);
    document.write(`<br>`);
    for(i=0;i<n;i++)
    {
        if(arr[i]==0)
        {
        countzero++;
        }
        else if(arr[i]<0)
        {
        countneg++;
        }
        else if(arr[i]>0)
        {
        countpos++;
        }
    }
  document.write("ratio of positive elements:",(countpos/n));
  document.write(`<br>`);
  document.write("ratio of negative elements:",(countneg/n));
  document.write(`<br>`);
  document.write("ratio of zero elements:",(countzero/n));