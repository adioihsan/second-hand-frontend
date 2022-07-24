import { render, screen } from "@testing-library/react";
import React from "react";
import ButtonPrimary from "../../../components/button/buttonPrimary/ButtonPrimary";

test("renders without crashing", () => {
  render(<ButtonPrimary size=""></ButtonPrimary>);
  screen.debug();
});
