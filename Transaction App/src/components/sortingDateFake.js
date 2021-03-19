import React, { Component } from 'react'
import axios from 'axios'
// import { response } from 'express'

class AxiosData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : [],
             Balance : 0
        }
    }
    componentDidMount(){
// axios.get("mongodb+srv://user:pass@mahi.bsizi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
// axios.get("https://jsonplaceholder.typicode.com/posts")
axios.get("http://localhost:5555/get")
.then(response =>{
    console.log(response.data)
    const creditData = response.data.filter(x => x.TransactionType == "Credit");
     const debitData = response.data.filter(x => x.TransactionType == "Debit");
     let creditSum = creditData.reduce((accumulator, current) => Number(accumulator) + Number(current.Amount), 0);
     let debitSum = debitData.reduce((accumulator, current) => Number(accumulator) + Number(current.Amount), 0);

                this.setState({ data: response.data, Balance: creditSum - debitSum })
            
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
                        <td style = {this.tableStyle}>Balance</td>
                        <td style = {this.tableStyle}>Discription</td>


                    </tr>
                 {
                     data.length ?
                     data.map(data => <tr style = {this.tableStyle}>
                          <td style = {this.tableStyle}>{data.Date} </td>
                           <td style = {this.tableStyle}>{data.TransactionType}</td>
                            <td style = {this.tableStyle}>{data.Amount}</td> 
                            <td style = {this.tableStyle}></td>
                            <td style = {this.tableStyle}>{data.Discription}</td>

                            </tr>) : null
                 }
                 <tr>
                        <td style = {{color: 'red'}}><b>Total Balance</b></td>
                        <td ></td>
                        <td ></td>
                        <td style = {this.tableStyle}>{this.state.Balance}</td>
                        <td ></td>


                    </tr>
                 </table>
            </div>
        )
    }
}

export default AxiosData
