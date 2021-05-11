import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'date-fns';

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             TransactionType : 'debit',
             Amount : '',
             Description : '',
             today : new Date(),
             Date : '',
             Balance : 0

        }
    }

    handleDateChange = event => {
        var Date = format(this.state.today, "MM/dd/yyyy")

        this.setState({
            Date : Date
        })
        console.log(this.state.Date)
    }

    handleTransactionType= (event)=>{
        this.setState({
            TransactionType : event.target.value
        })
    }

    handleAmountChange = (event) =>{
        this.setState({
            Amount : event.target.value
        })
    }

    handleDescriptionChange = (event)=>{
        this.setState({
            Description : event.target.value
        })
    }
    
    // data = {
    //     type: this.TransactionType,
    //     amount : this.Amount,
    //     disc : this.Description
    // }

    handleSubmit=(event)=>{
        // alert(`${this.state.TransactionType} ${this.state.Amount} ${this.state.Description}`)
        if(this.state.TransactionType == "debit" && this.state.Balance - this.state.Amount <0)
        {
            alert("Insufficient Balance");
        }    else{
        
        axios.post("http://localhost:8090/post",this.state)

        // event.preventDefault()
    }
}

   componentDidMount= ()=>{
       axios.get("http://localhost:8090/get")
       .then(response =>{
        
        const creditData = response.data.filter(x => x.TransactionType =="credit")
        let creditSum = creditData.reduce((a, b) => Number(a) + Number(b.Amount), 0)

        console.log(creditSum)

        const debitData = response.data.filter(x => x.TransactionType == "debit")
        let debitSum = debitData.reduce((a, b) => Number(a) + Number(b.Amount), 0)

          console.log(debitSum)
    
           this.setState({
               Balance : creditSum  - debitSum
           })
        
          console.log(this.state.Balance)
       })
       .catch(err => {
           console.log(err)
       })
   }

    
    render() {
        const {TransactionType , Amount , Description} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                   <label>Transaction Type</label>
                   <select 
                   value={TransactionType}
                   onChange={this.handleTransactionType}>
                       <option value="credit">Credit</option>
                       <option value="debit">Debit</option>
                   </select>
               </div>

               <div>
                   <label>Amount</label>
                   <input type="number" 
                   value={Amount}
                   onChange={this.handleAmountChange}></input>
               </div>

               <div>
                   <label>Description</label>
                   <textarea 
                   value={Description}
                   onChange={this.handleDescriptionChange}></textarea>
               </div>
               <button type="submit" onClick={this.handleDateChange} style = {this.state.style}>Submit</button>
            </form>
        )
    }
}

export default Form
