import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentLoader from "react-content-loader";
import React from "react";
import "./negoCard.css";
function NegoCard({
  product,
  negoPrice,
  negoDate,
  negoStatus,
  buyer,
  ...others
}) {
  return (
    <div className="negoCard" {...others}>
      <div className="cardNegoHeader">
        <img
          src={
            process.env.REACT_APP_STORAGE_URL +
            "/images%2F" +
            product.images_url.split(",")[0] +
            "?alt=media"
          }
          alt={product.name}
          className="productNegoImage"
        />
      </div>
      <div className="cardNegoBody">
        <div className="w-full flex justify-between">
          <p className="text-xs text-gray-500">Penawaran</p>
          <p className="text-xs text-gray-500">
            {new Date(negoDate).toLocaleString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "2-digit",
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="productName">{product.name}</div>
        <div className="font-light text-sm">
          {" "}
          {product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </div>

        <div className="negoPrice">
          Ditawar{" "}
          {negoPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </div>
        {buyer && <div className="negoBuyer">oleh {buyer.name}</div>}
      </div>
      <div className="negoCardFooter">
        <div className={"negoStatus " + negoStatus}>
          <span>{negoStatus}</span>{" "}
        </div>
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
