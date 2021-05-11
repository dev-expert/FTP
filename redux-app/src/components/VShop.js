import React, { Component } from 'react'
import {connect,useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import './style.css'
import { buyLaptop ,buyMobile, fetchUsers} from '../redux/actions'

function VShop(props){
    let users  = useSelector(state=>state.users.users)
    let numOfLaptops  = useSelector(state=>state.laptops.numOfLaptops)
    let numOfMobiles  = useSelector(state=>state.mobiles.numOfMobiles)
    // state={
    //     numOfLaptops : 100 
    // }

    // buyLaptop=()=>{
    //     this.setState({
    //         numOfLaptops : this.state.numOfLaptops - 1
    //     })
    // }

        return (
            <div>
                <h1 className="title">Welcome to Vshop</h1>
                <div className="items">
                <div className="item">
                    <p>Dell Inspiron Laptop</p>
                    <p>Available:{numOfLaptops}</p>
                    <button onClick={props.buyLaptop}>BUY</button>
                </div>

                <div className="item">
                    <p>Redme Note 7</p>
                    <p>Available:{numOfMobiles}</p>
                    <button onClick={props.buyMobile}>BUY</button>
                </div>

                <div className="item">
                    <p>Get users data</p>
                    <p>Count : {users.length}</p>
                    <button onClick={props.fetchUsers}>Call API</button>
                </div>
                </div>
            </div>
        )
    }




const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(
            {
                buyLaptop,
                buyMobile,
                fetchUsers
            },dispatch
        )
    
}
    

export default connect(null,mapDispatchToProps)(VShop)
