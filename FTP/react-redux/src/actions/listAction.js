import {NEW_LIST,SHOW_LIST,DELETE_LIST} from './types';
import axios from 'axios';


export const createItem =(post)=>async (dispatch)=>{
  
       const result =await axios.post("http://localhost:3000/AddToList",post);
       dispatch(showItem); 
     
      
//     dispatch({type:NEW_LIST,
//     payload:result.data,

// })
console.log("data inserted")
};
export const showItem =async(dispatch)=>{
  
    
    const result =await axios.get("http://localhost:3000/List");
    dispatch({type:SHOW_LIST,
    payload:result.data,

})
console.log(result.data);
console.log("data shown")
};

// export const updateItem = (post) => async (dispatch) => {
//     const result = await axios.put("http://localhost:3000/UpdateList",post);
//     dispatch({
//       type: UPDATE_POST,
//       payload: result.data,
//     });
//   };

export const deleteItem= (arr) => async (dispatch) => {
      console.log( "API",arr);
    const result =await axios.post("http://localhost:3000/DeleteList",arr);
    dispatch(showItem); 
    // const getData = await axios.get("http://localhost:3000/List")
    
    // dispatch({
    //   type: DELETE_LIST,
    //   payload:getData.data,
    // });
  };
  