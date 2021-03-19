
import React, { Component } from 'react'
import Newdata from "./NewData";


class AddDataButton extends Component {
    Open = () => {
        debugger;
        window.location.href = "https://www.google.com";

    }
    render() {

        return (
            <div>
                <button onClick={this.Open}>ADD DATA</button>

                {/* <Newdata /> */}
            </div>
        )
    }
}


export default AddDataButton
