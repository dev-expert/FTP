import React from 'react'
import {deleteItem} from "../actions/listAction"; 
//import {useDispatch} from "react-redux";
function DeleteList(props) {
    
    // const dispatch=useDispatch();
    
    return (
        <div>
            <button type ="submit" onClick={props.deleteItems}>Delete Item</button>
        </div>
    )
}

export default DeleteList
