import React, { Component } from 'react'
import axios from 'axios'

export class Education extends Component {
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
                  <h5 style={{fontWeight: 'bold',color : "#455a64"}}>EDUCATION</h5>
                  <hr
        style={{
            color: "black",
            backgroundColor: "#455a64",
            height: 2
        }} /> 
            <h5 style={{fontWeight:"bold",color: "#455a64"}}> 
            {/* {data.courses.map((course,index) => (  */}
            <li >
            {data.courses[0]} 
            </li>
             {/* ))} */}
             </h5>
             
        </div>
        <div>
            <p style={{fontWeight:'bold'}}>
            {/* {data.colleges.map((college,index) => ( */}
            <li >
            {data.colleges[0]}
            </li>
             {/* ))} */}
             </p>
        </div>
        <div>
         <p>
            {/* {data.streams.map((stream,index) => ( */}
            <li >
            {data.streams[0]}
            </li>
             {/* ))} */}
        </p>
         <p>
          {/* {data.years.map((year,index) => ( */}
            <li >
            {data.years[0]}
            </li>
             {/* ))} */}
        </p>
            <p>
            {/* {data.places.map((place,index) => ( */}
            <li >
            {data.places[0]}
            </li>
             {/* ))} */}
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

export default Education
