// import logo from './logo.svg';
import './App.css';
import Modal from "react-modal";
import react , { useState } from "react";
// import Table from "./components/table"
// import Newdata from "./components/NewData";
// import Button from "./components/AddDataButton";
import { Link, Switch, Route } from 'react-router-dom'
import Newdata from "./components/AddData";
// import Waste from "./data";
import AxiosData from './components/AxiosData';
import Passbook from "./components/Passbook";
import FakePassbook from "./components/FakePassbook";
import Balance from "./components/Balance";
import FakeAddDAta  from "./components/FAKE ADD DATA";

import SortDate from "./components/sortingDateFake";
import FuncPassbook from './components/FuncPassbook';

function App() {
const[modalIsOpen,setModalisOpen] = useState(false)


const style={
  overlay: {
    position: 'fixed',
    top: '250 px',
    left: '250 px',
    right: '250 px',
    bottom: '250 px',
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '450px',
    left: '450px',
    right: '450px',
    bottom: '450px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}






  return (
    <div className="App" id = "Data">
      {/* <Switch>
        <Route exact path='/add-data' component={Newdata} />
        <Route path='/old-data' component={FakePassbook} />
      </Switch>
      
       <button> <Link to='/add-data'>Add Transaction</Link></button><br></br>
       <button>  <Link to='/old-data'>Passbook</Link></button>
       */}
      {/* <Balance /> */}
      {/* <Copy /> */}
      {/* <Newdata /> */}
      {/* <button > Hello </button> */}
      {/* <Waste /> */}
      {/* <AxiosData /> */}
      {/* <Table /> */}
    {/* <SortDate /> */}
    {/* <FuncPassbook/> */}

    {/* <FakeAddDAta /> */}
    <button onClick = {()=> setModalisOpen(true)} >Add Transaction</button>
    <FakePassbook />

    <Modal isOpen = {modalIsOpen} onRequestClose={()=>setModalisOpen(false)} style = {{style}}>
     <h1>Add Transaction</h1>
            <FuncPassbook />

      <button onClick = {()=> setModalisOpen(false)}>Close</button>
    </Modal>

    </div>
  );
}

export default App;
