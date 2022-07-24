import React from "react";
import { render, screen } from "@testing-library/react";
import SellerCard from "../../../components/card/sellerCard/SellerCard";
const data = {
  id: 3,
  name: "Loto loto",
  city: "Kota Banda Aceh",
  address: "Tetaplah dijalan setan 12",
  image: "3_1657026415735_6532.jpg",
  phone: "+6287856899689",
  user_id: 3,
  createdAt: "2022-07-05T04:40:44.200Z",
  updatedAt: "2022-07-16T09:32:06.256Z",
};
it("Testing seller Card", () => {
  render(<SellerCard seller={data.user_id} noEdit />);
  screen.debug();
});
