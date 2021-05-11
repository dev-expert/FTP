import {BUY_LAPTOP} from '../actions/actionTypes'

const intialState = {
    numOfLaptops :  100
}

const laptopReducer = (state=intialState,action)=>{
    switch(action.type){
        case BUY_LAPTOP : return {
            numOfLaptops : state.numOfLaptops - 1
        }
        default : return state
    }
}

export default laptopReducer