import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../../../components/card/productCard/ProductCard";

const product = {
  id: 8,
  name: "hyena bernama bagas",
  price: 5900000,
  description: "barang langka dari deepweb",
  user_id: 3,
  images_url: "3_1657026513462_32924.jpg",
  is_release: true,
  status: false,
  createdAt: "2022-07-05T13:08:40.961Z",
  updatedAt: "2022-07-18T11:10:28.778Z",
  categories: [
    {
      id: 1,
      name: "Hoby",
    },
  ],
  user: {
    id: 8,
    name: "Loto loto",
    city: "Kota Banda Aceh",
    image: "3_1657026415735_6532.jpg",
  },
};

test("test product Card", () => {
  render(
    <ProductCard
      product={product}
      key={"productHome" + product.name + product.id}
      onClick={() =>
        navigate("/product-view/see/" + product.user_id + "/" + product.id)
      }
    />
  );
  screen.debug();
});
