var n = prompt("Enter the size of the array elements")

var arr =[];
count=0;

for(i=0;i<n;i++){
    var k = prompt("Enter the elements");
    arr.push(k);
}
document.write(arr);
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if(arr[i]==arr[j])
        count=count+1;
    }
    if(count==1){
        document.write(arr[i]);
    }
    count=0;
    
}