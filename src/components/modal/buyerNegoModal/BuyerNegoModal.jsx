import React from "react";
import ButtonPrimary from "../../button/buttonPrimary/ButtonPrimary";
import "./buyerNegoModal.css";
function BuyerNegoModal({ children, ...others }) {
  return (
    <div className="modalWrapper" {...others}>
      <div className="buyerNegoModal" onClick={(e) => e.stopPropagation()}>
        <h1>Masukan Harga Tawar mu</h1>
        <p>
          Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan
          segera dihubungi penjual.
        </p>
        <div className="product-nego">
          <img src="/assets/images/product.png" alt="product" />
          <div>
            <h2>Jam Tangan Casio</h2>
            <p>Rp. 250.000</p>
          </div>
        </div>
        <div className="form-nego">
          <label htmlFor="nego_price" className="mb-1">
            Harga Tawar
          </label>
          <input type="number" name="nego_price" id="nego_price" />
          <ButtonPrimary>Kirim</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export default BuyerNegoModal;
