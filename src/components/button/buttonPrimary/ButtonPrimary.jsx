import React from "react";
import "./buttonPrimary.css";
function ButtonPrimary({ children, className, type, size, ...others }) {
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
