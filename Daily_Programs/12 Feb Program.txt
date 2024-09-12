var number = prompt("Enter the Number :");
var temp = parseInt(number);
var arr = [];
var i = 0; sum = 0;

while(temp > 0) {
    sum = temp % 10;
    arr[i] = sum;
    i++;
    temp = Math.floor(temp / 10);
}
    
sum = 0;
for(i = 0; i<arr.length; i++){
    if(number%arr[i] == 0)
        sum++;
    
}
console.log(sum);