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
//importing for credit card animation 
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
//Importing react spinner
import { css } from "@emotion/core";
import { ClipLoader, PacmanLoader } from "react-spinners";

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
const override = css`
  display: block;
  margin: 2;
  border-color: red;
  size:25;
`;

function App() {

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  //setting values in hooks 
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //for the loader
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");


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
          onEnd={() => console.log('Ended! ')}
          onStart={() => console.log('Started! ')}
        >
          {({ countUpRef, start }) => (
            <div>
              <span ref={countUpRef} />
              <button onClick={start}>Start</button>
            </div>
          )}
        </CountUp>
      </div>
      <div >
        {/* credit card */}
        <Cards
          number={number}
          name={name}
          cvc={cvc}
          expiry={expiry}
          focused={focus}
        />
        <form style={{ alignItems: 'center', justifyContent: 'center' }}>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={e => { setNumber(e.target.value) }}
            onFocus={e => { setFocus(e.target.name) }}
          />
          <input
            type="tel"
            name="name"
            placeholder="Name"
            value={name}
            onChange={e => { setName(e.target.value) }}
            onFocus={e => { setFocus(e.target.name) }}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="MM/YY Expiry"
            value={expiry}
            onChange={e => { setExpiry(e.target.value) }}
            onFocus={e => { setFocus(e.target.name) }}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={e => { setCvc(e.target.value) }}
            onFocus={e => { setFocus(e.target.name) }}
          />

        </form>
      </div>
      <div className="PacmanLoader">
        {/* Loader */}
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <PacmanLoader loading />
        <ClipLoader color={color} loading={loading} css={override} size={150} />
      </div>
    </div>
  );
}

export default App;
