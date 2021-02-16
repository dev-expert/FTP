let arr = [];
let negative = 0, positive = 0, zero = 0;

let size = prompt("Enter The Size");
if (size != null) {
    for(var temp = 0; temp<size; temp++){
        arr[temp] = prompt("Enter The Number");
        
        if(arr[temp]<0)
            negative++;
        
        else if(arr[temp]>0)
            positive++;
            
        else
            zero++;
    }
}

function decimal(num){
    num = num/arr.length;
    num = num.toFixed(6);
    return num;
}

document.write( "Positive Ratio - " + decimal(positive) + "<br>")
document.write( "Negative Ratio - " + decimal(negative) + "<br>")
document.write( "Zero Ratio - " + decimal(zero) + "<br>")