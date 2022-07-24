import React from "react";
import { render } from "@testing-library/react";
import CategoryNav from "../../../components/navigation/categoryNav/CategoryNav";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAlt } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeSlash } from "@fortawesome/free-solid-svg-icons";

const params = {
  category: "all",
};
const menus = [
  {
    name: "Semua",
    icon: faCube,
    isActive: params.category === "all",
    cb: () => navigate("/negotiation/all"),
  },
  {
    name: "Dalam proses",
    icon: faCircleDot,
    isActive: params.category === "pending",
    cb: () => navigate("/negotiation/pending"),
  },
  {
    name: "Diterima",
    icon: faHandshakeAlt,
    isActive: params.category === "accepted",
    cb: () => navigate("/negotiation/accepted"),
  },
  {
    name: "Ditolak",
    icon: faHandshakeSlash,
    isActive: params.category === "rejected",
    cb: () => navigate("/negotiation/rejected"),
  },
];

test("test categoryNav", () => {
  render(<CategoryNav categories={menus} />);
});
