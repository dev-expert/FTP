function cal(value)
    {
        var num1 = parseInt(document.getElementById("num1").value)
        var num2 = parseInt(document.getElementById("num2").value)
       
        switch(value)
        {
            case "Add": 
        document.getElementById("res").value = (num1 + num2);
            break;

            case "Sub":
        document.getElementById("res").value= (num1 -num2);
        break;

            case "Mul":
        document.getElementById("res").value=(num1 * num2);
        break;

            case "Div":
        document.getElementById("res").value=(num1 / num2);
        break;

        }

    
    
    }     