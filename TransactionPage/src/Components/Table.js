"use Strict";
import axios from "axios";
import React, { Component } from "react";
//Created Class Component
class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {                       // To Get the data from mongodb through Axios
    axios
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

        this.setState({ data: res.data, Balance: creditSum - debitSum });
      })
      .catch((err) => console.log(err));
  }
  //To Render the data to show
  render() {
    const mystyle = {           //Styling for the Table
      borderWidth: "3px",
      borderStyle: "solid",
      borderColor: "black",
      padding: "10px",
    };
    const { data } = this.state;

    return (
      <div>
        <table style={mystyle}>
          <tr>
            <td style={mystyle}>
              <h2>Date</h2>
            </td>

            <td style={mystyle}>
              <h2>Credit</h2>
            </td>
            <td style={mystyle}>
              <h2>Debit</h2>
            </td>

            <td style={mystyle}>
              <h2>Balance</h2>
            </td>
            <td style={mystyle}>
              <h2>Description</h2>
            </td>
          </tr>
          {data.length
            ? data.reverse().map((data) => (
                <tr>
                  <td style={mystyle}>{data.Date} </td>
                  <td style={mystyle}>
                    {data.type == "Credit" ? data.Amount : <p></p>}
                  </td>{" "}
                  <td style={mystyle}>
                    {data.type == "Debit" ? data.Amount : <p></p>}
                  </td>
                  <td style={mystyle}>
                    {data.type == "Debit"
                      ? Number(data.Balance) - Number(data.Amount)
                      : Number(data.Balance) + Number(data.Amount)}
                  </td>
                  <td style={mystyle}>{data.description}</td>
                </tr>
              ))
            : null}
          <tr>
        {/* To Fetch the Total Balance */}
            <td style={{ color: "red" }}>
              <b>Total Balance :</b>
            </td>
            <td></td>
            <td></td>

            <td style={mystyle}>{this.state.Balance}</td>

            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Table;
