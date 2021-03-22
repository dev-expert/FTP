import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default function MyTable() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [Amount, getAmount] = useState();
  let [Description, getDescription] = useState();
  let [TranType, getTranType] = useState("Credit");
  let [tableData, setTableData] = useState([]);

  let [AllTrans, getAllTrans] = useState();
  let finAmo = 0;

  let [FullBal, getFullBal] = useState(0);
  let o = 0;

  useEffect(() => {
    getTableData();
  }, [AllTrans]);

  const getTableData = () => {
    axios
      .get("http://localhost:3000/AllTransactions")
      .then((response) => {
        console.log(response.data);
        o = response.data.length;
        for (let z = 0; z < o; z++) {
          let item = response.data[z];
          console.log(`res = ${z} = `, item.TranType);
          item.TranType === "Credit"
            ? (finAmo = finAmo + parseInt(item.Amount))
            : (finAmo = finAmo - parseInt(item.Amount));
          console.log(`the fin ${z} = `, finAmo);
        }
        getFullBal(finAmo);
        setTableData(response.data.reverse());
      })
      .catch((err) => console.log(err));
  };

  const GetData = () => {
    setShow(false);
    console.log("Amount : " + Amount);
    console.log("Description : " + Description);
    var obj = {
      Amount: Amount,
      Description: Description,
      TranType: TranType,
      Date: new Date().toLocaleDateString(),
    };

    axios
      .post("http://localhost:3000/ReactTrans", obj)
      .then((response) => console.log(response.data))
      .then(() => getTableData())
      .catch((error) => console.log(error));

  };

  let FullBal1 = FullBal;
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Office Transactions</th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th>
              <Button variant="primary" onClick={handleShow}>
                Add Transaction
              </Button>
            </th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Running Balance</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr>
              <th>{item.Date}</th>
              <th>{item.Description}</th>
              <th>
                {item.TranType === "Credit" ? <>{item.Amount}</> : <>{""}</>}
              </th>
              <th>
                {item.TranType === "Debit" ? <>{item.Amount}</> : <>{""}</>}
              </th>
              {
                <th>
                  {item.TranType === "Credit" ? (
                    <>
                      {(FullBal1 = FullBal1 - parseInt(item.Amount)) +
                        parseInt(item.Amount)}
                    </>
                  ) : (
                    <>
                      {(FullBal1 = FullBal1 + parseInt(item.Amount)) -
                        parseInt(item.Amount)}
                    </>
                  )}
                </th>
              }
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Transaction</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <label>Transation Type :</label>
            <select
              value={TranType}
              onChange={(e) => {
                getTranType(e.target.value);
              }}
            >
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </div>

          <div>
            <label>Amount</label>
            <br />
            <input
              type="number"
              placeholder="Amount"
              onChange={(e) => getAmount(e.target.value)}
              value={Amount}
            />
          </div>
          <div>
            <label>Enter Description</label>
            <br />
            <input
              type="text"
              placeholder="Enter Description"
              onChange={(e) => getDescription(e.target.value)}
              value={Description}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={GetData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}