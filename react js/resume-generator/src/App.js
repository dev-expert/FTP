import './App.css';
import Form from './components/Form'
import Resume from './components/Resume'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Route  exact path="/" component={Form} />
         <Switch>
           <Route path ="/resume" component={Resume} />
         </Switch>
        </>
      </Router>
      
    </div>
  );
}

export default App;
