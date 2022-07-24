import React from "react";
import { render, screen } from "@testing-library/react";
import Dot from "../../components/dot/Dot";

test("test Dot", () => {
  render(<Dot status="active" />);
});
