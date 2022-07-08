import React from "react";
import ButtonPrimary from "../../button/buttonPrimary/ButtonPrimary";
import "./sellerCard.css";

function SellerCard({ children, seller, noEdit }) {
  return (
    <div className="sellerCard">
      <div className="sellerInfo">
        <img
          src={
            seller.image
              ? process.env.REACT_APP_STORAGE_URL + "/images/" + seller.image
              : process.env.REACT_APP_STORAGE_URL + "/images/" + seller.photo
          }
          alt="user"
          className="sellerPhoto"
        />
        <div className="info">
          <p className="sellerName">{seller.name || "Nama pembeli"}</p>
          <p className="sellerCity">{seller.city || "Kota Pembeli"}</p>
        </div>
      </div>
      {!noEdit && (
        <div className="sellerActions">
          <ButtonPrimary type="outlined" size="small">
            Edit
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
}

export default SellerCard;
