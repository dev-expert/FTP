import React , {useState} from 'react'


let myTime1 = new Date().toLocaleTimeString();
    let setTime1;
 function MyClock() {

    [myTime1,setTime1] = useState(myTime1);


    const dis = ()=>{
        setTime1(new Date().toLocaleTimeString()); 
    };
    setInterval(dis,1000);
    return (
        <div>
            <h1>{myTime1}</h1>
        </div>
    )
}

export default MyClock;