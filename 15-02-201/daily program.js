var number = [];
var len = prompt("Enter the number of Entries :");

for(var i = 0; i < len; i++){
    number[i] = parseInt(prompt("Enter number " + (i+1)));
}

number.sort();

var minimum = 0, maximum = 0;

for(i = 0; i<number.length; i++){
    minimum = parseInt(minimum) + parseInt(number[i]);
}
var x = (number.length-1);
maximum = parseInt(minimum) - parseInt(number[0]);
minimum = parseInt(minimum) - parseInt(number[x]);
alert("Minimum sum " + minimum);
alert("Maximum sum " + maximum);