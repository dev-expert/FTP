import React, { Component } from 'react'
import axios from "axios";
import { format } from "date-fns";

//Creating a Class 
class Form extends Component {

	//Creating a Constructor
	constructor(props) {
		super(props)
//Declaring variables
		this.state = {
			Amount: '',
			Discription: '',
			TransactionType: 'Debit',
            Balance : '',
			today : new Date(),
    Date : '',
	style : {
		borderRadius : '10px',
		display : 'flex',
		padding : "10px",
		marginTop : '10px',
		marginLeft : "30%"
	}
		}
	}
  handleDateChange = event => {                                   //Function to Handle Data Change
    
	var Date = format(this.state.today, "MM/dd/yyyy");

		this.setState({
			Date: Date})
	}
	handleAmountChange = event => {                      //Function to Handle Amount Change
		this.setState({
			Amount: event.target.value
		})
	}

	handleDiscriptionChange = event => {						//Function to Handle Discription Change
		this.setState({
			Discription: event.target.value
		})
	}

	handleTransactionTypeChange = event => { 				//Function to Handle Transaction Type Change
		this.setState({
			TransactionType: event.target.value
		})
	}

	handleSubmit = event => {
if (this.state.TransactionType == 'Debit' && this.state.Balance - this.state.Amount <0 ) {          //Function to Find Balance
alert("Insufficient Balance")	
}
else{
		axios.post('http://localhost:5555/post', this.state)                  // Axios to post Data to Mongo
		.then(data =>{
			console.log(data)
		})
	}
}


    componentDidMount(){
       
        axios.get("http://localhost:5555/get")									 // Axios to get Data from Mongo
        .then(response =>{
            const creditData = response.data.filter(x => x.TransactionType == "Credit");
             const debitData = response.data.filter(x => x.TransactionType == "Debit");
             let creditSum = creditData.reduce((accumulator, current) => Number(accumulator) + Number(current.Amount), 0);
             let debitSum = debitData.reduce((accumulator, current) => Number(accumulator) + Number(current.Amount), 0);
        
                        this.setState({Balance: creditSum - debitSum })                 //Calculating Balance
                        
                    
        })   
        .catch (err =>{
            console.log(err)
        }) 
        }
		


	render() {
		const {Date, Amount, Discription, TransactionType } = this.state       
		return (
				<form onSubmit={this.handleSubmit} >					{/*Creating Form to send Data */}
			

<div>
	{/*Creating DropDown Menu */}
					<select value={TransactionType} onChange={this.handleTransactionTypeChange} style = {this.state.style}>
						<option value="Debit">Debit</option>
						<option value="Credit">Credit</option>
					</select>
				</div>
				<div> 
					<input
						type="number"
						value={Amount}
						onChange={this.handleAmountChange}
						placeholder = "Amount"
						required
						style = {this.state.style}
					/>
				</div>
				<div>
					<textarea
					type = "text"
						value={Discription}
						onChange={this.handleDiscriptionChange}
						placeholder = "Discription"
						required
						style = {this.state.style}
					/>
				</div>
			
				<button type="submit" onClick = {this.handleDateChange} style = {this.state.style}>Submit</button>
                 
			</form>
		)
	}
}

export default Form