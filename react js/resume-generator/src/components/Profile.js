import React, { Component } from 'react'
import ImgProfile from '../images/1.jpg'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { HashLink as Link } from 'react-router-hash-link'
import ReactRoundedImage from "react-rounded-image";
import axios from 'axios'

export class Profile extends Component {

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
                {/* <ReactRoundedImage image={ImgProfile} roundedSize="0" imageWidth="150" imageHeight="150" /> */}
                {/* <div class="col s12 m8  l3 "> */}
                
                
                <div className="card" key={data._id}>

                    <div class="col s12 m11 l10">
                        {/* <div class="card-panel grey lighten-5 z-depth-1"> */}
                        <div class="row valign-wrapper">
                            <div class="col s11 l17">
                                <img src={ImgProfile} alt="" class="circle responsive-img"  >
                                </img>
                            </div>
                        </div>

                        <div className="card-action" class="left">
                            <div class="col s10" >
                                <p className="flex-container " class="left-align">
                                    <div>
                                    <i class="small material-icons ">email</i>
                                    </div>

                                    <div>
                                        <p>{data.email}</p>
                                    </div>

                                    <div>
                                    <i class="small material-icons">call</i>
                                    </div>

                                    <div>
                                        <p>{data.number}</p>
                                    </div>

                                    <div>
                                    <i class="small material-icons">add_location</i>
                                    </div>

                                    <div>
                                        {data.address}
                                    </div>

                                    <div>
                                    <i className="fab fa-linkedin fa-2x grey-text text-darken-4 social-style"></i>
                                    </div>

                                    <div>
                                        <p>{data.linkedin}</p>
                                    </div>

                                    <div>
                                    <i className="fab fa-github fa-2x grey-text text-darken-4 social-style"></i>
                                    </div>   

                                    <div>
                                        <p>{data.github}</p>
                                    </div>
                                </p>
                            </div>
                        </div>

                       
                    </div>
                    {/* </div> */}
                </div>
            </div>
            ))

             return (
                <div>
                  {data}
                </div>
              );

        
    }
}

export default Profile
