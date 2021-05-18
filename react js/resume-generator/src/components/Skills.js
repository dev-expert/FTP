import React, { Component } from 'react'
import axios from 'axios'

class Skills extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : []
        }

        console.log(this.state.skills)
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

    style = {
        fontWeight: 'bold'
    }
    render() {
        const data = this.state.data.map(data => (
            <div key={data._id}>
                <div >
                  <h5 style={{fontWeight: 'bold',color : "#455a64"}}>SKILLS</h5>
                  <hr
        style={{
            color: "black",
            backgroundColor: "#455a64",
            height: 2
        }} /> 
        
        <p>
        {data.skills.map((skill,index) => (
        <li key={index}>
          {skill}
        </li>
        ))}
            </p>
        {/* <p>2.css</p>
        <p>3.javascript</p>
        <p>4.React js</p> */}
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

export default Skills
