import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotificationItem from "../../../components/notification/notificationItem/NotificationItem";

const notif = {
  id: 134,
  product_id: 42,
  category_id: 2,
  nego_id: 46,
  nego_price: 90000,
  price: 98000,
  user_id: 3,
  status: "rejected",
  is_checked: false,
  createdAt: "2022-07-24T05:36:49.470Z",
  updatedAt: "2022-07-24T05:36:49.470Z",
  product: {
    name: "Teko porselen cerek Eletrik",
    price: 98000,
    images_url: "25_1658559038221_2237.jpg",
  },
  category: {
    title: "Penawaran produk",
  },
};

it("test notificationItem", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotificationItem notif={notif} />} />
      </Routes>
    </BrowserRouter>
  );
});
