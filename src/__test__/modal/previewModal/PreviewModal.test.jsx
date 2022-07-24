import React from "react";
import { render } from "@testing-library/react";
import PreviewModal from "../../../components/modal/previewModal/PreviewModal";

const product = {
  id: 8,
  name: "hyena bernama bagas",
  price: 5900000,
  description: "barang langka dari deepweb",
  user_id: 3,
  images_url: ["3_1657026513462_32924.jpg"],
  is_release: true,
  status: false,
  createdAt: "2022-07-05T13:08:40.961Z",
  updatedAt: "2022-07-18T11:10:28.778Z",
  categories: "Mobil",
  user: {
    id: 8,
    name: "Loto loto",
    city: "Kota Banda Aceh",
    image: "3_1657026415735_6532.jpg",
  },
};

it("test PreviewModal", () => {
  render(<PreviewModal data={product} />);
});
