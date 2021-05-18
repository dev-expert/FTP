import React, { Component } from 'react'
import axios from 'axios'

class Achievements extends Component {
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
            <div>
                 <div key={data._id}>
                  <h5 style={{fontWeight: 'bold',color : "#455a64"}}>ACHIEVEMENTS</h5>
                  <hr
        style={{
            color: "black",
            backgroundColor: "#455a64",
            height: 2
        }} /> 
        <p>
        {data.achieves.map((achieve,index) => (
        <li key={index}>
          {achieve}
        </li>
        ))}
        </p>
        
                </div> 
            </div>
        ))
     return (
                <div>
                    {data}
                </div>
        )
    }
}

export default Achievements
