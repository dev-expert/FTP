import React, { Component } from 'react'
import axios from "axios";

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			Amount: '',
			Discription: '',
			TransactionType: 'Debit',
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
			</form>
		)
	}
}

export default Form