import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import "./App.css";

import AddToList from "./components/AddToList"
import UpdateList from "./components/UpdateList"
import DeleteList from "./components/DeleteList"


function App(){
  return(
    <Provider store ={store}>
      <Router>
        <div className="App">
        <Switch>
     
      <Route exact path ='/' component={AddToList}/>
      <Route exact path ='/UpdateList' component={UpdateList}/>
      <Route exact path ='/DeleteList' component={DeleteList}/>
      </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
