import './App.css';
import {Button , Modal } from "react-bootstrap";

import react , { useState } from "react";
import Newdata from "./components/AddData";
import Passbook from "./components/Passbook";


function App() {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const style = {
    height : '450px',
    width : '600px',
    overflow: 'auto',
    marginLeft : '50px'
  }

  return (<>
    
    <div style = {style}>
    <Button variant="primary" onClick={handleShow}>
Add a Transaction      </Button>
    <Passbook />

      <Modal show={show} onHide={handleClose}  animation={false} onRequestClose={()=>handleClose()} >
        <Modal.Header closeButton>
          <Modal.Title>Add Transaction</Modal.Title>
        </Modal.Header>
                 <Newdata />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>



    </div>
    </>
  );
}

// render(<Example />);


export default App;


