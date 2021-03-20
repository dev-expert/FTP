import { Component } from "react";
import "./App.css";
import MyContent from "./MyContent/myContent";
import DateAndTime from './MyContent/DateAndTime'
import MyHeader from "./MyContent/MyHeader";
import Umaga from './MyContent/umaga';

class App extends Component {
  render() {
    var name = "Himanshu Singh";
    // var isshow = false;

    // var math;
    // if (true) {
    //   math = <h1>1+1 = {1 + 1}</h1>;
    // }

    return (
      <div className="App">
        <Umaga/>
        {/* <MyHeader val="My Header 1" />
        <MyContent />
        <DateAndTime/> */}
        {/* <MyContent email="ABC" phone="123456789" name="Himanshu" />
        <MyContent email="XYZ" phone="123456789" name="XYZ" /> */}

        {/* {isshow ? <h1> Hii </h1> : null}
        {/* <h1>1+1 =  {1+1}</h1> }
        {math} */}
      </div>
    );
  }
}

export default App;
