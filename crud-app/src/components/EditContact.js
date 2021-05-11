import React, { Component } from 'react'

class EditContact extends Component {
    constructor(props) {
        super(props)
        const {id,name,email} = props.location.state.contact

        this.state = {
           id,
           name,
           email,  
        }
    }
    

    update = (e)=>{
        e.preventDefault()
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory")
            return
        }
        this.props.updateContactHandler(this.state);
        this.setState({name : "",email:""})
        this.props.history.push("/")
    }

    render() {
        return (
            <div> 
            <div className="ui main"> 
                <div> <h2>Edit Contact</h2></div> 
                <form className="ui form" onSubmit={this.update}>
                    <div className="field1">
                        <label>Name</label>
                        <input type="text"
                          name="name"
                         placeholder="Name"
                         value = {this.state.name}
                         onChange={(e)=>this.setState({name : e.target.value})}/>   
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" 
                        name="email" 
                        placeholder="Email"
                        value = {this.state.email}
                        onChange={(e)=>this.setState({email : e.target.value})} />
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
            </div>
        );
    }
}

export default EditContact;
