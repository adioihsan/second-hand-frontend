import React from "react";
import "./loadingFull.css";
import loading250 from "../../../assets/images/loading250.svg";
function LoadingFull(props) {
  return (
    <div className="loadingFull">
      <img src={loading250} alt="loading.." />
    </div>
  );
}

export default LoadingFull;
