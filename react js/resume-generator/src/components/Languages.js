import React, { Component } from 'react'
import axios from 'axios'

export class Languages extends Component {
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
                <div  key={data._id}>
                  <h5 style={{fontWeight: 'bold',color : "#455a64"}}>LANGUAGES</h5>
                  <hr
        style={{
            color: "black",
            backgroundColor: "#455a64",
            height: 2
        }} /> 

        <p>
        {data.languages.map((language,index) => (
        <li key={index}>
          {language}
        </li>
        ))}
        </p>
        {/* <p>2.Telugu</p>
        <p>3.Hindi</p> */}
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

export default Languages
