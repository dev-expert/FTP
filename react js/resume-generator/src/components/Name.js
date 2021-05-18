import React, { Component } from 'react'
import axios from 'axios'

export class Name extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : []
        }
    }

    componentDidMount(){
      axios.get("http://localhost:8090/get")
        .then(response =>{
            this.setState({
                data : response.data
            })
            console.log(response.data)
        }).catch(err =>{
            console.log(err)
        })
    }

    render() {
        const data = this.state.data.map(data => (
        
            <div key={data._id}>
                <h2 style={{backgroundColor:"#455a64",
    border: "solid",
    fontsize: "100px",
    width: "100%",
    color: "white"}}>{data.firstname} {data.lastname}</h2>
            </div>
        ))
        return (
            <div>
                {data}
            </div>
        )
    }
}

export default Name
