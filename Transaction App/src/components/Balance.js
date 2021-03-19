import React, { Component } from 'react'
import axios from 'axios'
// import { response } from 'express'

class AxiosData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            Balance: 0
        }
    }
    componentDidMount() {
        // axios.get("mongodb+srv://user:pass@mahi.bsizi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        axios.get("http://localhost:5555/get")
            .then(response => {
                console.log(response.data)
                const creditData = response.data.filter(x => x.TransactionType == "Credit");
                const debitData = response.data.filter(x => x.TransactionType == "Debit");
                let creditSum = creditData.reduce((accumulator, current) => Number(accumulator) + Number(current.Amount), 0);
                let debitSum = debitData.reduce((accumulator, current) => Number(accumulator) + Number(current.Amount), 0);

                this.setState({ data: response.data, Balance: creditSum - debitSum })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <h1>Balance : {this.state.Balance}</h1>
                {
                    data.length ?
                        data.map(data => <tr style={this.tableStyle}>
                            {
                                data.TransactionType == "Credit" &&
                                <h1>Credit</h1>
                            }
                            {
                                data.TransactionType != "Credit" &&
                                <h1>Debit</h1>
                            }

                            {/* <td style = {this.tableStyle}>{ (data.TransactionType == Credit) &&
                               console.log({data.Amount})
                           }</td> */}
                        </tr>) : null
                }

            </div>
        )
    }
}

export default AxiosData
