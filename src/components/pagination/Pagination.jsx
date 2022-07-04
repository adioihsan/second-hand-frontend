import React from "react";
import "./pagination.css";
function Pagination({ totalPages, currentPage, handleChange, ...others }) {
  console.log(totalPages);
  const renderItem = () => {
    let start = 0;
    let end = totalPages;
    const arr = [];
    console.log("start", start);
    console.log("end:", end);
    for (start; start < end; start++) {
      arr.push(start + 1);
    }
    return (
      <>
        {currentPage !== 1 && (
          <li onClick={() => handleChange(currentPage - 1)}>Prev</li>
        )}
        {arr.map((val, index) => (
          <li
            className={currentPage === val ? "active" : ""}
            onClick={() => handleChange(val)}
          >
            {val}
          </li>
        ))}
        {currentPage !== totalPages && (
          <li onClick={() => handleChange(currentPage + 1)}>Next</li>
        )}
      </>
    );
  };
  return (
    <nav className="paginationWrapper" {...others}>
      <ul className="pagination">{renderItem()}</ul>
    </nav>
  );
}

export default Pagination;
