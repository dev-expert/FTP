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
    render() {
        const {data } = this.state
        return (
            <div>
                 Data {
                     data.length ?
                     data.map(data => <div>On {data.Date} {data.TransactionType}ed Rs.{data.Amount} For {data.Discription}</div>) : null
                 }
            </div>
        )
    }
}

export default AxiosData
