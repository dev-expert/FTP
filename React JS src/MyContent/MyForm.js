// import React, { useState } from "react";

// function MyForm() {
//   let [name, getName] = useState();
//   let [fullname,getFull] = useState();
//   let [password, getPass] = useState();

//   function inputTe(event) {
//     getName(event.target.value);
//     //console.log(event.target.value);
//   }

//   function inputTe1(event) {
//     getPass(event.target.value);
//     //console.log(event.target.value);
//   }

//   function onSubmit(event) {
//       event.preventDefault();
//       getFull(name);
//     console.log("name: "+ fullname);
//     console.log("Password: " + password);
//   }

//   return (
//     <form onSubmit = {onSubmit}>
//       <div>
//         <h1>Hello {fullname} </h1>
//         <input
//           type="text"
//           placeholder="Enter Your Name "
//           onChange={inputTe}
//           value={name}
//         />
//         <input
//           type="text"
//           placeholder="Enter Your Password "
//           onChange={inputTe1}
//           value={password}
//         />
//         <button type = "submit" > Click </button>
//       </div>
//     </form>
//   );
// }

// export default MyForm;

import React, { useState } from "react";


function MyForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')


  function onMYSubmit(event) {
    event.preventDefault();
    console.log("name: " + firstName);
    console.log("surname: " + lastName);
  }

  return (
    <form onSubmit={onMYSubmit}>
      <div>
        <h1>Hello {firstName} {lastName} </h1>
        <input
          type="text"
          placeholder="Enter Your Name "
          name="fname"
          onChange={(e) => setFirstName(e.target.value)}
          value= {firstName}
        />
        <input
          type="text"
          placeholder="Enter Your Password "
          name="lname"
          onChange={(e) => setLastName(e.target.value)}
          value= {lastName}
        />
        <button type="submit"> Click </button>
      </div>
    </form>
  );
}

export default MyForm;
