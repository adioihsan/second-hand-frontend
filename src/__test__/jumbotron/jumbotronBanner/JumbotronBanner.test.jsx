import React from "react";
import { render, screen } from "@testing-library/react";
import JumboBanner from "../../../components/jumbotron/JumboBanner/JumboBanner";
test("test JumboBanner", () => {
  render(<JumboBanner />);
});
