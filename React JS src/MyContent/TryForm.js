import React, { useState } from "react";
import axios from "axios";

function TryForm() {
  let [Amount, getAmount] = useState();
  let [Description, getDescription] = useState();
  let [TranType, getTranType] = useState("Credit");

  const GetData = (e) => {
    e.preventDefault();
    console.log("Amount : " + Amount);
    console.log("Description : " + Description);
    var obj = {
      Amount: Amount,
      Description: Description,
      TranType: TranType,
      Date: new Date().toLocaleDateString(),
    };
    axios
      .post("http://localhost:8080/getD",obj)
      .then((response) => console.log("response"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={GetData}>
        <label>
          Transation Type :
          <select
            value={TranType}
            onChange={(e) => {
              getTranType(e.target.value);
            }}
          >
            <option value="credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </label>
        <br />
        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => getAmount(e.target.value)}
          value={Amount}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => getDescription(e.target.value)}
          value={Description}
        />
        <br />
        <button type="submit"> Click </button>
      </form>
    </div>
  );
}

export default TryForm;
