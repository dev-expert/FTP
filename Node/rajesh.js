const { rejects } = require("assert");

async function main(){
    let a = 10;
    console.log("first",a); //10
    await secondFn();
    console.log("third",a); //5
    a = 100;
    console.log("fourth",a); //100
}

function secondFn(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            a = 5;
            console.log("second",a); //5
            resolve();
          }, 2000);
    })
  
}

main()