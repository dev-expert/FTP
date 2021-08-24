import './App.css';
import { Button, Modal } from "react-bootstrap";

import react, { useState } from "react";
import Newdata from "./Components/AddData";
import Passbook from "./Components/Passbook";


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Passbook />
      <Button variant="primary" onClick={handleShow}>
        Add a Transaction
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Add Transaction</Modal.Title>
        </Modal.Header>
        <Newdata />
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default App;
