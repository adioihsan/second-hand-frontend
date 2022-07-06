import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentLoader from "react-content-loader";
import React from "react";
import "./negoCard.css";
import userEvent from "@testing-library/user-event";
function NegoCard({ product, negoPrice, buyer, ...others }) {
  return (
    <div className="negoCard" {...others}>
      <div className="cardHeader">
        <img
          src={
            process.env.REACT_APP_STORAGE_URL +
            "/images/" +
            product.images_url.split(",")[0]
          }
          alt={product.name}
          className="productNegoImage"
        />
      </div>
      <div className="cardNegoBody">
        <div className="productName">{product.name}</div>
        <div className="font-light text-sm">
          {" "}
          {product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </div>
        <div className="negoPrice">
          {" "}
          Ditawar{" "}
          {negoPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </div>
        <div className="negoBuyer">oleh {buyer.name}</div>
      </div>
    </div>
  );
}
export const ProductCardAdd = () => {
  return (
    <div className="addProduct">
      <FontAwesomeIcon icon={faPlus} color="gray" size="2x" />
      <p>Tambah Produk</p>
    </div>
  );
};

export const ProductCardLoading = (props) => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={250}
      viewBox="0 0 300 250"
      backgroundColor="#ffffff"
      foregroundColor="#d4cade"
      {...props}
    >
      <rect x="0" y="12" rx="0" ry="0" width="100%" height="154" />
      <rect x="0" y="176" rx="0" ry="0" width="100%" height="19" />
      <rect x="0" y="202" rx="0" ry="0" width="100%" height="14" />
      <rect x="0" y="223" rx="0" ry="0" width="100%" height="20" />
    </ContentLoader>
  );
};
export default NegoCard;
