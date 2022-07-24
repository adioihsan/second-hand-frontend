import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./alertMe.css";

function AlertMe({ message, type }) {
  const alertRef = useRef();
  return <div className={"alertMe active " + "alertMe_" + type}>{message}</div>;
}
export default AlertMe;
