import React from "react";
import { render } from "@testing-library/react";
import Pagination from "../../components/pagination/Pagination";

it("test PreviewModal", () => {
  render(
    <Pagination
      totalPages="12"
      currenPage="1"
      handleChange={() => console.log("page change")}
    />
  );
});
