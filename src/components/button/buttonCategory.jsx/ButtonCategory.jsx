import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import iconSearch from "../../../assets/images/icon-search.png";
import "./buttonCategory.css";
function ButtonCategory({ children, icon, isActive }) {
  return (
    <button
      className={
        isActive
          ? "buttonCategory bg-purple-400 text-white"
          : "buttonCategory  bg-purple-100 text-gray-800"
      }
    >
      <FontAwesomeIcon icon={icon} color={isActive ? "white" : "gray"} />{" "}
      {children}
    </button>
  );
}

export default ButtonCategory;
