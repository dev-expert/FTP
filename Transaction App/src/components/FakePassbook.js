import React, { Component } from 'react'
import axios from 'axios'
import Pagination from "react-js-pagination";

// import { response } from 'express'

class AxiosData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : [],
             Balance : 0,
             activePage: 15

        }
    }
    componentDidMount(){http://localhost:5555/get
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


handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }


    render() {
        const {data } = this.state
        return (
            <div>

                
<div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={45}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
                <table style = {this.tableStyle}>
                    <tr>
                        <td style = {this.tableStyle}>Date</td>
                        {/* <td style = {this.tableStyle}>TransactionType</td> */}
                        
                        <td style = {this.tableStyle}>Debit</td>
                        <td style = {this.tableStyle}>Credit</td>
                        {/* <td style = {this.tableStyle}>Amount</td> */}
                        <td style = {this.tableStyle}>Balance</td>
                        <td style = {this.tableStyle}>Discription</td>


                    </tr>
                 {
                     data.length ?
                     data.reverse().map(data => <tr style = {this.tableStyle}>
                          <td style = {this.tableStyle}>{data.Date} </td>
                           {/* <td style = {this.tableStyle}>{data.TransactionType}</td> */}
                           
                           <td style = {this.tableStyle}>{data.TransactionType == 'Debit' ? <>{data.Amount}</> : <p></p>}</td>
                           <td style = {this.tableStyle}>{data.TransactionType == 'Credit' ? <>{data.Amount}</> : <p></p>}</td>

                            {/* <td style = {this.tableStyle}>{data.Amount}</td>  */}
                            <td style = {this.tableStyle}><>{data.TransactionType == 'Debit' ? <>{Number(data.Balance) - Number(data.Amount)}</> : <>{Number(data.Balance) + Number(data.Amount)}</>}</></td>
                            <td style = {this.tableStyle}>{data.Discription}</td>

                            </tr>) : null
                 }
                 {/* <tr>
                        <td style = {{color: 'red' }}>Total Balance</td>
                        <td ></td>
                        <td ></td>
                        <td style = {this.tableStyle}>{this.state.Balance}</td>
                        <td ></td>


                    </tr> */}
                 </table>



      </div>



            </div>
        )
    }
}

export default AxiosData
