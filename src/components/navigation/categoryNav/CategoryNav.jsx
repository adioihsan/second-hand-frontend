import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ButtonCategory from "../../button/buttonCategory.jsx/ButtonCategory";
import "./categoryNav.css";
function CategoryNav({ categories, type }) {
  if (type === "list") {
    return (
      <div className="categoryList">
        {categories.map((cat, index) => (
          <div
            className={
              cat.isActive
                ? "categoryListItem text-purple-500"
                : "categoryListItem text-gray-900"
            }
            onClick={() => {
              cat.cb(cat.id);
            }}
          >
            <FontAwesomeIcon icon={cat.icon} width={"32px"} />
            {cat.name}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="categoryNav">
      {categories.map((cat, index) => (
        <ButtonCategory
          icon={cat.icon}
          isActive={cat.isActive}
          onClick={() => {
            cat.cb(cat.id);
          }}
          key={"catNav" + cat.name + cat.id}
        >
          {cat.name}
        </ButtonCategory>
      ))}
    </div>
  );
}

export default CategoryNav;
