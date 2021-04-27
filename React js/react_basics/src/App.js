import React from "react";
import './App.css';
//For importing the icon 
// import { IconContext } from "react-icons"
import { IconContext } from 'react-icons';
import { FaEllo } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
//Importing TOAST 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      < IconContext.Provider value={{ color: 'yellow', size: '10REM' }}>
        <div className="App">
          <FaEllo />
          <FaReact />
        </div>
      </IconContext.Provider >

      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App;
