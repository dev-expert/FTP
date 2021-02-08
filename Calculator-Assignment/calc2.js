function cal(value)
{
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    
switch(value){
    case "Add":
    document.getElementById("result").value = (num1 + num2);
    break;
    case "Sub":
    document.getElementById("result").value = (num1 - num2);
    break;
    case "Mul":
    document.getElementById("result").value = (num1 * num2);
    break;
    case "Div":
    document.getElementById("result").value = (num1 / num2);
    break;
                        
    
}
}