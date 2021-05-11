import axios from 'axios'
import React, { Component } from 'react'

class Table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            Balance: 0
        }
    }

    componentDidMount() {

        axios.get("http://localhost:8090/get")
            .then(response => {
                const creditData = response.data.filter(x => x.TransactionType == "credit")
                let creditSum = creditData.reduce((a, b) => Number(a) + Number(b.Amount), 0)

                const debitData = response.data.filter(x => x.TransactionType == "debit")
                let debitSum = debitData.reduce((a, b) => Number(a) + Number(b.Amount), 0)

                console.log('Credited ' + creditSum)

                console.log('Debited ' + debitSum)

                // this.setState({data : response.data,Balance : creditData - debitData})

                this.setState({ data: response.data, Balance: creditSum - debitSum })

                console.log("Balance" + this.state.Balance)

                // this.setState({data : response.data})

            })
            .catch(error => {
                console.log(error)
            })
    }


    tableStyle = {
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "black",
        padding: "10px",

    }

    render() {
        const { data } = this.state
        return (
            <div>
                <table style={this.tableStyle} >

                    <tr style={{ border: 'solid' }}>

                        <td style={this.tableStyle}>Date</td>
                        <td style={this.tableStyle}>Description</td>
                        <td style={this.tableStyle}>Debit</td>
                        <td style={this.tableStyle}>Credit</td>
                        <td style={this.tableStyle}>Balance</td>

                    </tr>

                    {
                        data.length ?
                            data.map(data => <tr style={this.tableStyle}>

                                <td style={this.tableStyle}>{data.Date}</td>
                                <td style={this.tableStyle}>{data.Description}</td>

                                <td style={this.tableStyle}>{data.TransactionType == "debit" ? <>{data.Amount}</> : <></>}</td>
                                <td style={this.tableStyle}>{data.TransactionType == "credit" ? <>{data.Amount}</> : <></>}</td>

                                <td style={this.tableStyle}><>{data.TransactionType == 'debit' ? <>{Number(data.Balance) - Number(data.Amount)}</> : <>{Number(data.Balance) + Number(data.Amount)}</>}</></td>

                            </tr>) :
                            null
                    }

                    <tr>
                        {/* To Fetch the Total Balance */}
                        <td style={{ color: "red" }}>
                            <b>Total Balance :</b>
                        </td>
                        <td></td>
                        <td></td>

                        <td style={this.tableStyle}>{this.state.Balance}</td>
                        
                        <td></td>
                    </tr>
                </table>


            </div>
        )
    }
}

export default Table
