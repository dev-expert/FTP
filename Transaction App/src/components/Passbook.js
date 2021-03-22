import React, { Component } from 'react'
import axios from 'axios'


//Creating a Class Function
class AxiosData extends Component {
    constructor(props) {
        super(props)
    // Declaring Variables
        this.state = {
             data : [],
             Balance : 0
        }
    }
    componentDidMount(){
axios.get("http://localhost:5555/get")                        //Using Axio store variables
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
                        <td style = {this.tableStyle}>Discription</td>

                        <td style = {this.tableStyle}>Debit</td>
                        <td style = {this.tableStyle}>Credit</td>
                        <td style = {this.tableStyle}>Balance</td>


                    </tr>
                 {
                     data.length ?
                     data.reverse().map(data => <tr style = {this.tableStyle}>
                          <td style = {this.tableStyle}>{data.Date} </td>
                          <td style = {this.tableStyle}>{data.Discription}</td>

                           
                           <td style = {this.tableStyle}>{data.TransactionType == 'Debit' ? <>{data.Amount}</> : <p></p>}</td>
                           <td style = {this.tableStyle}>{data.TransactionType == 'Credit' ? <>{data.Amount}</> : <p></p>}</td>

                            <td style = {this.tableStyle}><>{data.TransactionType == 'Debit' ? <>{Number(data.Balance) - Number(data.Amount)}</> : <>{Number(data.Balance) + Number(data.Amount)}</>}</></td>

                            </tr>) : null
                 }
                
                 </table>
            </div>
        )
    }
}

export default AxiosData
