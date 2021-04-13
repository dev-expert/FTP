import React, { useEffect, useState } from 'react';
import { showItem, deleteItem } from "../actions/listAction";
import { useDispatch, useSelector } from "react-redux";
import DeleteList from "./DeleteList";




const List = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showItem);
        dispatch(deleteItem);
    }, []);

    


    const lists = useSelector((state) => state.item.list);
    const arr = [];
    function handleChange(item) {
    //alert(item);
        const it= arr.includes(item);
        //debugger;
        //console.log(arr.indexOf(item))
        if(it===true){
           
        arr.splice(arr.indexOf(item),1);
      
        }
        else{
        arr.push(item);
        }
        console.log(arr)
    }
    const handleDelete=()=>{
        //debugger;
        //alert("hello");
        dispatch(deleteItem(arr))
    }
   
    
    return (
       
<div><DeleteList deleteItems= {handleDelete}/>
            
            <ul>
                {lists.map((lists) => <li>{lists.item}
                    <input type="checkbox" onChange={() => handleChange(lists.item)} /><DeleteList  deleteItems= {handleDelete}/></li>)}

            </ul>
        </div>

    );
}
export default List;

//<p>{<DeleteList item={lists.item}/>}</p>