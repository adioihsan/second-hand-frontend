import React from "react";
import CategoryButton from "../../button/buttonCategory.jsx/ButtonCategory";
import "./categoryNav.css";
function CategoryNav(props) {
  return (
    <div className="categoryNav">
      <CategoryButton isActive={true}>Semua</CategoryButton>
      <CategoryButton>Hobi</CategoryButton>
      <CategoryButton>Kendaraan</CategoryButton>
      <CategoryButton>Baju</CategoryButton>
      <CategoryButton>Elektronik</CategoryButton>
      <CategoryButton>Kesehatan</CategoryButton>
    </div>
  );
}

export default CategoryNav;
