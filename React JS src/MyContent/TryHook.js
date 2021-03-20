import React, {useState} from 'react'

// let i = 0,setCount = 0;

// const dis = () =>{
//     i = i+10;
//     setCount(i);
// };

//  function TryHook() {
//     [i,setCount]  = useState(0); 
//     return (
//         <div>
//             <h1>{i}</h1>
//             <button onClick = {dis}> Click Me </button>
//         </div>
//     )
// }


let myTime = new Date().toLocaleTimeString();
let setCount;

var dis = () =>{
    setCount(new Date().toLocaleTimeString());
}

function TryHook(){
    [myTime,setCount] = useState(myTime);
    return (
        <div>
            <h1>{myTime}</h1>
            <button onClick = {dis}> Get Time </button>
        </div>
    ) 
}

export default TryHook;
