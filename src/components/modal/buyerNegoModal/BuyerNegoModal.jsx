import React from "react";
import { useRef } from "react";
import ButtonPrimary from "../../button/buttonPrimary/ButtonPrimary";
import "./buyerNegoModal.css";
function BuyerNegoModal({ children, product, cb, ...others }) {
  const inputNegoRef = useRef();
  console.log(product.images_url);
  return (
    <div className="modalWrapper" {...others}>
      <div className="buyerNegoModal" onClick={(e) => e.stopPropagation()}>
        <h1>Masukan Harga Tawar mu</h1>
        <p>
          Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan
          segera dihubungi penjual.
        </p>
        <div className="product-nego">
          <img
            src={
              process.env.REACT_APP_STORAGE_URL +
              "/images/" +
              product.images_url.split(",")[0]
            }
            alt="product"
          />

          <div>
            <h2>{product.name}</h2>
            {product.price &&
              product?.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
          </div>
        </div>
        <div className="form-nego">
          <label htmlFor="nego_price" className="mb-1">
            Harga Tawar
          </label>
          <input
            type="number"
            name="nego_price"
            id="nego_price"
            ref={inputNegoRef}
          />
          <ButtonPrimary onClick={() => cb(inputNegoRef.current.value)}>
            Kirim
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export default BuyerNegoModal;
