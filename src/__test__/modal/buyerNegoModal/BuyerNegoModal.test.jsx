import React from "react";
import { render } from "@testing-library/react";
import BuyerNegoModal from "../../../components/modal/buyerNegoModal/BuyerNegoModal";

const nego = {
  id: 34,
  user_id_buyer: 26,
  product_id: 34,
  price: 75000,
  status: "rejected",
  updatedAt: "2022-07-23T04:09:29.505Z",
  product: {
    id: 34,
    name: "Hidung Mermaidman",
    price: 100000,
    images_url: "3_1658234696628_69748.jpg",
    user_id: 3,
  },
  user_buyer: {
    id: 26,
    user_detail: {
      name: "Kekeyi",
      city: "Kota Surabaya",
      image: null,
      phone: "+6289647664464",
    },
  },
};

test("test Nego Card", () => {
  render(
    <BuyerNegoModal
      onClick={() => console.log("show modal")}
      cb={() => console.log("nego send")}
      product={nego.product}
    />
  );
});
