import React from "react";
import PropTypes from "prop-types";

const MyHeader = (props) => {
  return (
    <div>
      <h1>{props.val}</h1>
    </div>
  );
};

MyHeader.prototype = {
  val: PropTypes.string.isRequired,
};

MyHeader.defaultProps = {
  val: "My App",
};

export default MyHeader;
