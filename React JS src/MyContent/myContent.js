import React, { Component } from "react";

class myContent extends Component {
  constructor() {
    super();
    this.state = {
      mycontacts: [
        {
          id: 1,
          name: "a",
          email: "a@a.a",
          phone: "123",
        },
        {
          id: 2,
          name: "b",
          email: "b@b.b",
          phone: "123",
        },
        {
          id: 3,
          name: "c",
          email: "c@c.c",
          phone: "123",
        },
      ],
    };
  }

  render() {
    const { mycontacts } = this.state;

    return (
      <div>
        {/* <li style={{ color: "green" }}>Name :{this.props.name}</li>
          <li>Email :{this.props.email}</li>
          <li>Phone :{this.props.phone}</li> */}
        <h1>My Table</h1>

        {mycontacts.map((mycontacts) => {
          return (
            <ul>
              <li> key : {mycontacts.id}</li>
              <li>Name : {mycontacts.name}</li>
              <li>Email : {mycontacts.email}</li>
              <li>Phone : {mycontacts.phone}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default myContent;
