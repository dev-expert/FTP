"use Strict";
import React, { Component } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
//To create a class
class FormTable extends Component {
  constructor() {
    super();
    this.state = {
      Amount: "",
      type: "",
      description: "", 
      Date: "",
      Balance: "",
    };
    this.state = {
      show: false,
    };
  }
// Through Modal Library We set the value to it 
  setShow = (i) => {
    this.setState({
      show: i,
    });
  };

  handleClose = () => this.setShow(false);
  handleShow = () => this.setShow(true);
// Function to Handle Amount Change
  handleUsernameChange = (event) => {
    this.setState({
      Amount: event.target.value,
    });
  };
//Function to Handle Description Change
  handleCommentsChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
//Function to Handle Transaction Type Change
  handleTopicChange = (event) => {
    this.setState({
      type: event.target.value,
    });
  };
//Function to Handle the Submit Button 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios                                             // To send the data to mongodb through Axios
      .post("http://localhost:7000/post", this.state)

      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Data is saved ");
  };

  componentDidMount() { 
    axios                                         //To Get the data from Mongodb to FormSheet through Axios
      .get("http://localhost:7000/getuserdata")

      .then((res) => {
        const creditData = res.data.filter((x) => x.type == "Credit");
        const debitData = res.data.filter((x) => x.type == "Debit"); 
        let creditSum = creditData.reduce(
          (accumulator, current) =>
            Number(accumulator) + Number(current.Amount),
          0
        );
        let debitSum = debitData.reduce(
          (accumulator, current) =>
            Number(accumulator) + Number(current.Amount),
          0
        );
        this.setState({ Date: new Date().toLocaleDateString() });

        this.setState({ Balance: creditSum - debitSum }); //To Update the Balance 
      })
      .catch((err) => console.log(err));
  }

  //To Render the data for Users
  render() {
    return (
      <>
      {/* To Go for the New Transaction page through Modal */}
        <Button variant="primary" onClick={this.handleShow}> 
          New Transaction
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div>
              {/* To Add New Data in New Transaction popup */}
              <form onSubmit={this.handleSubmit}> 
                <h1>New Transaction</h1>
                <div>
                  <select
                    value={this.state.type}
                    onChange={this.handleTopicChange}
                    required
                  >
                    <option></option>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                  </select>
                </div>
                <br></br>

                <div>
                  <label> </label>
                  <input
                    type="number"
                    value={this.state.Amount}
                    onChange={this.handleUsernameChange}
                    required
                    placeholder="Amount"
                  ></input>
                </div>
                <br/>
                <div>
                  <label></label>
                  <textarea
                    value={this.state.description}
                    onChange={this.handleCommentsChange}
                    required
                    placeholder="Description"
                  ></textarea>
                </div>
                <br></br>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </Modal.Body>
          <br/>
        </Modal>
      </>
    );
  }
}

export default FormTable;
