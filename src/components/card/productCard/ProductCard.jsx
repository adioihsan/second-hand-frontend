import React from "react";
import "./productCard.css";
function ProductCard(props) {
  return (
    <div className="productCard">
      <div className="cardHeader">
        <img
          src="/assets/images/product.png"
          alt="product"
          className="productImage"
        />
      </div>
      <div className="cardBody">
        <div className="productName">Jam Tangan Casio</div>
        <div className="productCategory">Aksesori</div>
        <div className="productPrice">Rp. 250.000</div>
      </div>
    </div>
  );
}

export default ProductCard;
