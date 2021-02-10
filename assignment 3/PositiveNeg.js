var n = parseInt(prompt("Enter the size of the array element"));
var arr=[];
var positive=0;
var negative=0;
var count=0;
for(i=0;i<n;i++){
    var k = parseInt(prompt("enter the array element"));
    arr.push(k);
}
for(i=0;i<n;i++){
    if(arr[i]>0){
        positive=positive+1;
    }
    else if(arr[i]<0){
        negative = negative+1;
    }
    else{
        count=count+1;
    }
}

document.write((positive/n).toPrecision(6),"<br>");
document.write((negative/n).toPrecision(6),"<br>");
document.write((count/n).toPrecision(6));