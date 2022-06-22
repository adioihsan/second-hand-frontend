import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
export const ProductCardAdd = () => {
  return (
    <div className="addProduct">
      <FontAwesomeIcon icon={faPlus} color="gray" size="2x" />
      <p>Tambah Produk</p>
    </div>
  );
};
export default ProductCard;
