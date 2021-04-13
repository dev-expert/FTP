
import {NEW_LIST,SHOW_LIST,DELETE_LIST} from "../actions/types";

const initialState ={
    list:[],
    
};
export default (state=initialState,{type,payload})=>{
    var newlist = state.list;
    switch(type){
        case NEW_LIST:
            
            return{...state, list: payload.push(newlist)};
            case SHOW_LIST:
             
             return{...state,list:payload};
            // return{...state,list:[payload,...state.list]};
            case DELETE_LIST:
                
                console.log("delete",payload)
                return {
                  ...state,
                  list: payload ,
                };
            default:
                return state;
    }
};
