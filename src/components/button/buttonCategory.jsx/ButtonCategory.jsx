import React from "react";
import iconSearch from "../../../assets/images/icon-search.png";
import "./buttonCategory.css";
function CategoryButton({ children, isActive }) {
  return (
    <button
      className={
        isActive
          ? "buttonCategory bg-purple-400 text-white"
          : "buttonCategory  bg-purple-100 text-gray-800"
      }
    >
      <img src={iconSearch} alt="->" /> {children}
    </button>
  );
}

export default CategoryButton;
