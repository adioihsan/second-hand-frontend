import { render, screen } from "@testing-library/react";
import React from "react";
import ButtonPrimary from "../../../components/button/buttonPrimary/ButtonPrimary";

it("renders without crashing", () => {
  render(<ButtonPrimary size=""></ButtonPrimary>);
  screen.debug();
});
