import React,{useState} from 'react'

function MyEvent(){


    const purple = "#8e44ad";
    let [bg, setBG] = useState(purple);
    let [name,setName] = useState("Click Me");

    const bgChange = ()=>{
        setBG("#34495e");
        setName("OK : shark ");
        console.log("Hii ");
    }

    const backB = () =>{

        setBG(purple);
        setName("Click Me");
    }

    return (
        <>
        <div style = {{backgroundColor: bg}}>
        <button onClick = {bgChange} onDoubleClick = {backB}>{name}</button>
        </div>
        </>
    )
}

export default MyEvent;