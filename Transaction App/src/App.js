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
import PagePassbook from './components/pagePassbook';

function App() {
const[modalIsOpen,setModalisOpen] = useState(false)








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
{/* <PagePassbook /> */}
    {/* <FakeAddDAta /> */}
    <button onClick = {()=> setModalisOpen(true)} >Add Transaction</button>
    {/* <FakePassbook /> */}
<Passbook />
    <Modal isOpen = {modalIsOpen} onRequestClose={()=>setModalisOpen(false)}>
     <h1>Add Transaction</h1>
            <FuncPassbook />

      <button onClick = {()=> setModalisOpen(false)}>Close</button>
    </Modal>

    </div>
  );
}

export default App;
