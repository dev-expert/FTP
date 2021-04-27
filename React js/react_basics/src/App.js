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
import 'react-tippy/dist/tippy.css';
//Importing countup
import CountUp from 'react-countup';

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
        {/* <Tippy content="it's a button">
          <button>tooltip</button>
        </Tippy> */}
      </div>
      <div>
        <CountUp
          start={0}
          end={160527.012}
          duration={2.75}
          separator=" "
          decimals={4}
          decimal=","
          onEnd={() => console.log('Ended! 👏')}
          onStart={() => console.log('Started! 💨')}
        >
          {({ countUpRef, start }) => (
            <div>
              <span ref={countUpRef} />
              <button onClick={start}>Start</button>
            </div>
          )}
        </CountUp>
      </div>
    </div>
  );
}

export default App;
