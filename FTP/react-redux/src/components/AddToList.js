import React ,{useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {createItem} from "../actions/listAction";
import DeleteList from './DeleteList';
import List from "./List";


const AddToList=()=>{
    let history =useHistory();
    const dispatch=useDispatch();
    const [item,setItem]=useState("");

    const submitForm=(e)=>{
        e.preventDefault();
        e.target.reset();
        const list={
            item:item,
        };
        dispatch(createItem(list));
        history.push('/');
    }


    return(
        <div>
        <h3>Add Item</h3>
        <form onSubmit={submitForm}>
            <input type ="text"  onChange={(e)=>setItem(e.target.value)} />
            <button type ="submit">Add Item</button>
           
        </form>
            {/* <button type ="submit">Select All</button> */}
        <List/>
        </div>
    );
};
export default AddToList;
