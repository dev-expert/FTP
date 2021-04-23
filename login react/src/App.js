import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Signup} path="/signup" />
  
          <PrivateRoute exact component={Dashboard} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;



















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
