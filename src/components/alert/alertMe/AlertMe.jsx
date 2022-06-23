import React from "react";
import { useEffect } from "react";
import "./alertMe.css";
function AlertMe({ message, showAlert }) {
  return (
    <div className={showAlert ? "alertMe active" : "alertMe"}>{message}</div>
  );
}

export default AlertMe;
