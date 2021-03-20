import React,{useState,useEffect} from 'react'

export default function MYEffect() {


    let [i,setI] = useState(10);
    let [q,setq] = useState(10);
    let [val,setVal] = useState("coconut");

    useEffect(()=>{
        //alert("My Job is done ");
    },[q])


    const tr =(e)=>{
        //console.log(e.target);
        setVal(e.target.value);
        if(i==50)
        setq(50); 
    }

    const dis = () =>{
        console.log("Function Called " + i);
        setI(i+10);
        tr();
    }

    return (
        <div>
            <h1>Hello</h1>
            <label>
          Pick your favorite flavor:
          <select value = {val} onChange={tr}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
            <button onClick = {dis}>Click</button>
        </div>
    )
}
