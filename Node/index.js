let a=5;
console.log(a);
a=10;
console.log(a);
a=100;
console.log(a);
a=10;
let x=setInterval(function()
{   if(a>0)
    {

    a=21;
    console.log(a);
    a=a-1;
    }
},1000)
a=5;
console.log(a);
