import {BUY_MOBILE} from '../actions/actionTypes'

const intialState = {
    numOfMobiles :  100
}

const mobileReducer = (state=intialState,action)=>{
    switch(action.type){
        case BUY_MOBILE : return {
            numOfMobiles : state.numOfMobiles - 1
        }
        default : return state
    }
}

export default mobileReducer