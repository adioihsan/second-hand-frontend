import React from "react";
import "./buttonPrimary.css";
function ButtonPrimary({ children, others, className }) {
  return (
    <button className={className + " buttonPrimary"} {...others}>
      {children}
    </button>
  );
}

export default ButtonPrimary;
