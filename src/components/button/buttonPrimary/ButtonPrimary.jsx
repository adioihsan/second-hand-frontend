import React from "react";
import "./buttonPrimary.css";
function ButtonPrimary({ children, others, className, type, size }) {
  console.log(type);
  return (
    <button
      className={
        "buttonPrimary" +
        " buttonPrimary_" +
        type +
        " buttonPrimary_" +
        size +
        " " +
        className
      }
      {...others}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
