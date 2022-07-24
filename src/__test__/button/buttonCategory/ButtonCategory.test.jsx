import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonCategory from "../../../components/button/buttonCategory.jsx/ButtonCategory";

const data = [
  {
    id: 1,
    name: "Hoby",
    createdAt: "2022-07-04T17:39:47.330Z",
    updatedAt: "2022-07-04T17:39:47.330Z",
  },
  {
    id: 2,
    name: "Vehicles",
    createdAt: "2022-07-04T17:39:47.330Z",
    updatedAt: "2022-07-04T17:39:47.330Z",
  },
  {
    id: 3,
    name: "Clothes",
    createdAt: "2022-07-04T17:39:47.330Z",
    updatedAt: "2022-07-04T17:39:47.330Z",
  },
  {
    id: 4,
    name: "Electronics",
    createdAt: "2022-07-04T17:39:47.330Z",
    updatedAt: "2022-07-04T17:39:47.330Z",
  },
  {
    id: 5,
    name: "Health",
    createdAt: "2022-07-04T17:39:47.330Z",
    updatedAt: "2022-07-04T17:39:47.330Z",
  },
];

it("testing button category", () => {
  render(
    <ButtonCategory
      icon={data.icon}
      isActive={data.isActive}
      onClick={() => {
        data.cb(data.id);
      }}
      key={"catNav" + data.name + data.id}
    >
      {data.name}
    </ButtonCategory>
  );
  screen.debug();
});
