import React from "react";
import { render, screen } from "@testing-library/react";
import SellerCard from "../../../../components/card/sellerCard/SellerCard";

it("Testing seller Card", () => {
  render(<SellerCard seller={data.user} noEdit />);
  screen.debug();
});
