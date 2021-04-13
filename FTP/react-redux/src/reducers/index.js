import listReducer from './listReducer';
import {combineReducers} from "redux";

export default combineReducers({
    item:listReducer,
})