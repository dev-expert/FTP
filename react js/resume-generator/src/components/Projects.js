import React, { Component } from 'react'
import axios from 'axios'

export class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8090/get")
            .then(response => {
                this.setState({
                    data: response.data
                })
                console.log(response.data)
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        const data = this.state.data.map(data => (
            <div>
                <div key={data._id}>
                    <h5 style={{ fontWeight: 'bold', color: "#455a64" }}>PROJECTS</h5>
                    <hr
                        style={{
                            color: "black",
                            backgroundColor: "#455a64",
                            height: 2
                        }} />
                    <h5>
                        {/* {data.projects.map((projectname,index) => ( */}
                        <li >
                            {data.projects[0]}

                        </li>
                        {/* ))} */}
                    </h5>

                    <p>
                        {/* {data.desc.map((description,index) => ( */}
                        <li >
                            {data.desc[0]}
                        </li>
                        {/* ))} */}
                    </p>
                    {/* <p>2.Resume Generator</p>
        <p>3.Transaction App</p> */}

                    <h5>
                        {/* {data.projects.map((projectname,index) => ( */}
                        <li >
                            {data.projects[1]}

                        </li>
                        {/* ))} */}
                    </h5>

                    <p>
                        {/* {data.desc.map((description,index) => ( */}
                        <li >
                            {data.desc[1]}
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

export default Projects
