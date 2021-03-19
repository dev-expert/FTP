import React, { Component } from 'react'
import axios from 'axios'
// import { response } from 'express'

class AxiosData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : []
        }
    }
    componentDidMount(){
// axios.get("mongodb+srv://user:pass@mahi.bsizi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
// axios.get("https://jsonplaceholder.typicode.com/posts")
axios.get("http://localhost:5555/get")
.then(response =>{
    console.log(response.data)
    this.setState({data : response.data})
})   
.catch (err =>{
    console.log(err)
}) 
}
tableStyle = {
    color: "black",
    padding: "10px",
    fontFamily: "Arial",
    border : 'solid'
}
    render() {
        const {data } = this.state
        return (
            <div>
                <table style = {this.tableStyle}>
                    <tr>
                        <td style = {this.tableStyle}>Date</td>
                        <td style = {this.tableStyle}>TransactionType</td>
                        <td style = {this.tableStyle}>Amount</td>
                        <td style = {this.tableStyle}>Discription</td>
                        <td style = {this.tableStyle}>Balance</td>


                    </tr>
                 {
                     data.length ?
                     data.map(data => <tr style = {this.tableStyle}>
                          <td style = {this.tableStyle}>{data.Date} </td>
                           <td style = {this.tableStyle}>{data.TransactionType}</td>
                            <td style = {this.tableStyle}>{data.Amount}</td> 
                            <td style = {this.tableStyle}>{data.Discription}</td>
                            </tr>) : null
                 }
                 </table>
            </div>
        )
    }
}

export default AxiosData
