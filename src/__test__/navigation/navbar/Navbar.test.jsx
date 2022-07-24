import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../../../components/navigation/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

it("test navbar", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
});
