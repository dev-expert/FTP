import React, { useState } from 'react';
import axios from 'axios';


export default class Form extends React.Component {


  constructor(props) {
    super(props);
    let d=JSON.parse(localStorage.getItem('data'));
    if(d){
      this.state = {
        data:d,
          date:'',
        transtype:'',
        amount: '',
        desc: '',}
        

    }
    else{
      this.state = {
        data:[],
          date:'',
        transtype:'',
        amount: '',
        desc: '',}
    }
    this.add=this.add.bind(this);
  }
    add(e){
      alert("sucess");
      let data= this.state.data;
      let date=this.state.date;
      let transtype=this.state.transtype;
      let amount=this.state.amount;
      let desc=this.state.desc;
      if(transtype&&amount){
        data.push({data:data, amount:'',transtype:''});
        localStorage.setItem('data',JSON.stringify(data));

      }
    }
 


  
  render() {
      
    return (

      <div>
        <div >,
            
            <h1>New Transaction</h1>
            <label>Transaction Type </label>
            <input type="text" id ="transtype" name="transtype" value={this.state.transtype} onChange={this.update} /><br />
            <label>Amount</label>
            <input type="text" id="amount" name="amount" value={this.state.amount} onChange={this.update} /><br />
            <label>Description</label>
            <input type="text" id="desc " name="desc" value={this.state.desc} onChange={this.update} /><br />
          
          <button type="submit" onClick={this.add}>  + Add Transaction </button>
          <button>Cancel</button>
        </div>
        <hr />
        <table>

          <thead>
            <tr>
              <th>
                Date
              </th>
              <th>
                Description
              </th>
              <th>
                Credit
              </th>
              <th>
                Debit
              </th>
              <th>
                Running Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {this.renderRows()} */}
          </tbody>
        </table>

      </div>
    );
  }
}














  // updateMessage(event) {
  //   this.setState({
  //     transtype: event.target.value,
  //     amount: event.target.value,
  //     desc: event.target.value
  //   });
  // }
  // handleClick(event) {
  //   event.preventDefault();
  //   alert("data saved");
  //   let items = [...this.state.items];
  //   items.push({
  //     transtype: this.state.transtype,
  //     amount: this.state.amount,
  //     desc: this.state.desc
  //   });
  //   this.setState({
  //     items,
  //     transtype: '',
  //     amount: '',
  //     desc: '',
  //   });


  // };

  // handleItemChanged(i, event) {
  //   var items = this.state.items;
  //   items[i] = event.target.value;
  //   //let input =event.target;
  //   //let name=event.target.name;
  //   //let value=imput.value;
  //   this.setState({
  //     [transtype]: event.target.value,
  //     [amount]: event.target.value,
  //     [desc]: event.target.value
  //     //   items:items
  //   });
  // }
  // //   handleItemDeleted(i){
  // //     var items =this.state.items;
  // //     items.splice(i,1);
  // //     this.setState({
  // //       items:items
  // //     });
  // //   }

































// import React, { useState } from 'react';
// const Api_Host ="http://localhost:3000";
// const Transaction_Api_Url =`${Api_Host}/transaction`;
// function App() {
//   const [data ,setData]=useState([]);
//   const fetchTransaction =()=> {
//     fetch(`${Transaction_Api_Url}`)
//     .then(res=>res.json())
//     .then(json=>setData(json));
//   }
//    useEffect(()=>{
//     fetchTransaction();
//   },[]);

//   return (
//       <div className="container">
//           <h1></h1>
//           <table>
//               <thead>
//               <tr>
//                   <th>Date</th>
//                   <th>Description</th>
//                   <th>Credit</th>
//                   <th>Debit</th>
//                   <th>Running Balance</th>
//               </tr>
//               </thead>
//               <tbody>
//                   <tr>
//                       <td/>
//                       <td/>
//                       <td/>
//                       <td/>
//                       <td/>
//                   </tr>
//               </tbody>
//           </table>
//       </div>
//   );
// }

// export default App;












































































































































































































































// //port React, {useState} from 'react';
// //import './AddTransactionPage.css';
// //import App from './App';

// const Appp =()=>{
//     handleClick(){
//         var items =this.state.items;
//         items.push(this.state.message);
//         this.setState({
//           items:items,
//         message:""
//         });
//     }

//     return(
//         <>
//             <div >,
//             <form>
//             <h1>New Transaction</h1>
//             <label>Transaction Type </label>
//             <input type="text"/><br/>
//             <label>Amount</label>
//             <input type="text"/><br/>
//             <label>Description</label>
//             <input type= "textArea"/><br/>
//             <button onClick ={this.handleClick.bind(this)}>Save</button>
//             <button>Cancel</button>
//             </form>



//             </div>
//         </>

//     );
// }
// //export default Appp;