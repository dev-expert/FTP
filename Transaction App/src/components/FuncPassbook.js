import React, { Component } from 'react'
import axios from "axios";

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			Amount: '',
			Discription: '',
			TransactionType: 'Debit',
            Balance : '',
    //   Date : '2021-03-17'
    Date : ''
		}
	}
  handleDateChange = event => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
		this.setState({
			Date: today
		})
	}
	handleAmountChange = event => {
		this.setState({
			Amount: event.target.value
		})
	}

	handleDiscriptionChange = event => {
		this.setState({
			Discription: event.target.value
		})
	}

	handleTransactionTypeChange = event => {
		this.setState({
			TransactionType: event.target.value
		})
	}

	handleSubmit = event => {
		// alert(`${this.state.Date} ${this.state.Amount} ${this.state.Discription} ${this.state.TransactionType}`)
		// console.log(this.state)
		// event.preventDefault()

		axios.post('http://localhost:5555/post', this.state)
		.then(data =>{
			console.log(data)
		})
	}


    componentDidMount(){
       
        axios.get("http://localhost:5555/get")
        .then(response =>{
            const creditData = response.data.filter(x => x.TransactionType == "Credit");
             const debitData = response.data.filter(x => x.TransactionType == "Debit");
             let creditSum = creditData.reduce((accumulator, current) => Number(accumulator) + Number(current.Amount), 0);
             let debitSum = debitData.reduce((accumulator, current) => Number(accumulator) + Number(current.Amount), 0);
        
                        this.setState({Balance: creditSum - debitSum })
                        
                    
        })   
        .catch (err =>{
            console.log(err)
        }) 
        }


	render() {
		const {Date, Amount, Discription, TransactionType } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
        {/* <div>
					<label>Date </label>
					<input
						type="date"
						value={Date}
						onChange={this.handleDateChange}
						required
					/>
				</div> */}
				<div>
					<label>Amount </label>
					<input
						type="number"
						value={Amount}
						onChange={this.handleAmountChange}
						required
					/>
				</div>
				<div>
					<label>Discription</label>
					<textarea
						value={Discription}
						onChange={this.handleDiscriptionChange}
						required
					/>
				</div>
				<div>
					<label>TransactionType</label>
					<select value={TransactionType} onChange={this.handleTransactionTypeChange}>
						<option value="Debit">Debit</option>
						<option value="Credit">Credit</option>
					</select>
				</div>
				<button type="submit" onClick = {this.handleDateChange}>Submit</button>
                {/* <h1>{this.state.Balance}</h1> */}
                {/* <h1>{this.state.TransactionType == 'Debit' ? <>{Number(this.state.Balance) - Number(this.state.Amount)}</> : <>{this.state.Balance} + {this.state.Amount}</>}</h1> */}
                
			</form>
		)
	}
}

export default Form