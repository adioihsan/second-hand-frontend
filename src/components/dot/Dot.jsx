import React from "react";
import "./dot.css";
function Dot({ status, className }) {
  return <span className={"dot " + "dot_" + status + " " + className}></span>;
}

export default Dot;
