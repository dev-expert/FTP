import React, { useState } from "react";

import './App.css';
//For importing the icon 
// import { IconContext } from "react-icons"
import { IconContext } from 'react-icons';
import { FaEllo } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
//Importing TOAST 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Importing modal 
import Modal from 'react-modal';
//Importing tooltip 
import ReactTooltip from 'react-tooltip';

//styling for modal 
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function App() {

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const notify = () => { toast("Wow so easy!", { position: toast.POSITION.TOP_LEFT }) };
  return (
    <div>
      <div>
        {/* Icons */}
        < IconContext.Provider value={{ color: 'yellow', size: '10REM' }}>
          <div className="App">
            <FaEllo />
            <FaReact />
          </div>
        </IconContext.Provider >
      </div>
      <div>
        {/* Toast notification */}
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
      <div>
        {/* Modal  */}
        <button onClick={() => { setModalIsOpen(true) }} >Open modal </button>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <h2>Modal box</h2>
          <p>yes</p>
          <button onClick={() => { setModalIsOpen(false) }} >Close  modal </button>
        </Modal>
      </div>
      <div>
        {/* tooltip */}
        <p data-tip="hi there">Tooltip</p>

        <ReactTooltip />
      </div>
    </div>
  );
}

export default App;
