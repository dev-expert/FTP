import React from "react";
import './App.css';
//For importing the icon 
// import { IconContext } from "react-icons"
import { IconContext } from 'react-icons';
import { FaEllo } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function App() {
  return (
    < IconContext.Provider value={{ color: 'yellow', size: '10REM' }}>
      <div className="App">
        <FaEllo />
        <FaReact />
      </div>
    </IconContext.Provider >
  );
}

export default App;
