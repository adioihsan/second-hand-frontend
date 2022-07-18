import React from "react";
import "./dot.css";
function Dot({ status }) {
  return <span className={"dot " + "dot_" + status}></span>;
}

export default Dot;
