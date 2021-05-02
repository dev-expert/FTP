import React,{Component} from 'react'
import './App.css';
import Form from './components/Form'
import Table from './components/Table'
import {Button , Modal } from "react-bootstrap";
import react , { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      
      

      {/* <Modal isOpen = {true}>
        <h2>Modal title</h2>
        <p>Modal Body</p>
      </Modal> */}


    <Button variant="primary" onClick={handleShow}>
    Add a Transaction      </Button>

    <Modal show={show} onHide={handleClose}  animation={false} onRequestClose={()=>handleClose()} >
      
            <Modal.Header closeButton>
              <Modal.Title>Add Transaction</Modal.Title>
            </Modal.Header>
                    <Form />

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            
            </Modal.Footer>
          </Modal>

          <Table/>
    </div>
  );
}

export default App;
