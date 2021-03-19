import React, { Component } from 'react'
import Data from "./AxiosData";

class table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //  name : "Mahi",
            //  Date : "16-03-2021",
            //  Debit : 5000,
            //  Credit : 0,
            //  Bal : 5000
        }
    }
    

mystyle = {
    color: "black",
    padding: "10px",
    fontFamily: "Arial",
    border : 'solid'
}
    render() {
        return (
            <div>
            
            <table style = {this.mystyle}>
            <tr style = {{    border : 'solid'}}>
    <th>Date</th>
    <th>Discription</th> 
    <th>Credit</th>
    <th>Dedit</th>
    <th>Running Balance</th>

  </tr>
  {/* <tr>
    <td>{this.state.Date}</td>
    <td>{this.state.name}</td>
    <td>{this.state.Debit}</td>
    <td>{this.state.Credit}</td>
    <td>{this.state.Bal}</td>

  </tr> */}
  <tr>
    <td>Hello</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>

            </table>
            {/* <button onClick = {this.fname}>Hii</button> */}
        </div>
        )
    }
}


export default table
