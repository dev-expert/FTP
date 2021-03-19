// import logo from './logo.svg';
import './App.css';
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

import SortDate from "./components/sortingDateFake";

function App() {
  return (
    <div className="App" id = "Data">
      {/* <Switch>
        <Route exact path='/add-data' component={Newdata} />
        <Route path='/old-data' component={FakePassbook} />
      </Switch>
      
       <button> <Link to='/add-data'>Add Transaction</Link></button><br></br>
       <button>  <Link to='/old-data'>Passbook</Link></button>
       */}
      {/* <FakePassbook /> */}
      {/* <Balance /> */}
      {/* <Copy /> */}
      {/* <Newdata /> */}
      {/* <button > Hello </button> */}
      {/* <Waste /> */}
      {/* <AxiosData /> */}
      {/* <Table /> */}
    <SortDate />
    </div>
  );
}

export default App;
