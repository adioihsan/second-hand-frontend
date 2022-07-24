import React from "react";
import { render } from "@testing-library/react";
import MobileNav from "../../../components/navigation/mobileNav/MobileNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

test("test  mobileNav", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobileNav />} />
      </Routes>
    </BrowserRouter>
  );
});
