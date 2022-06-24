import React from "react";
import ButtonPrimary from "../../button/buttonPrimary/ButtonPrimary";
import "./sellerCard.css";

function SellerCard(props) {
  return (
    <div className="sellerCard">
      <div className="sellerInfo">
        <img
          src="https://picsum.photos/200/300"
          alt="user"
          className="sellerPhoto"
        />
        <div className="info">
          <p className="sellerName">Nama Penjual</p>
          <p className="sellerCity">Kota</p>
        </div>
      </div>
      <div className="sellerActions">
        <ButtonPrimary type="outlined" size="small">
          Edit
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default SellerCard;
