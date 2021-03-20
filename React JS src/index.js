import React from "react";
import ReactDOM from "react-dom";

//import App from "./App.js";
import TryHook from './MyContent/TryHook';
import MyClock from "./MyContent/MyClock";
import MyEvent from './MyContent/MyEvent';
import MyForm from './MyContent/MyForm';
import App from './App';
import Modal from './MyContent/MyModal';
import Tryform from './MyContent/TryForm';
import MyTable from './MyContent/MyTable';
// import Try1 from './MyContent/try1.js'
// import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  // <React.StrictMode>
  //   <><App> <Try1 /></>
  // </React.StrictMode>

  <><MyTable/></>
  ,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
