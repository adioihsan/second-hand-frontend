import React from "react";
import "./buttonPrimary.css";
function ButtonPrimary({ children, others, className, type }) {
  console.log(type);
  return (
    <button
      className={
        type === "outlined"
          ? className + " buttonPrimaryOutlined"
          : className + " buttonPrimary"
      }
      {...others}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
