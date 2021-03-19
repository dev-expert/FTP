import React, { Component } from 'react'
import App from "./App";
const fetch = require("node-fetch");

class data extends Component {
    fetch = ()=>{
        fetch("http://localhost:5555/login")
.then(res => res.text())
.then(text =>{
    var keys = JSON.parse(text);

// console.log(text)
        // var str=text;
        // for(i=0;i<keys.length;i++)
        // {
        //    document.write(
        //        '${s.HI}')
                                                                        
        // }
        var x = keys[0]
console.log(x.HI)

        // document.writ   e("Hello")  
  }) 
    }
    render() {
        return (
            <div>
              {/* <p>{this.state.x}</p> */}
            </div>
        )
    }
}

export default data


// fetch("http://localhost:5555/login")
// .then(res => res.text())
// .then(text =>{
//     var keys = JSON.parse(text);

// // console.log(text)
//         // var str=text;
//         // for(i=0;i<keys.length;i++)
//         // {
//         //    document.write(
//         //        '${s.HI}')
                                                                        
//         // }
//         x = keys[0]
// console.log(x.HI)
//         // document.write("Hello")  
//   }) 