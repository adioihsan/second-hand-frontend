import React from "react";
import { useState } from "react";
import ButtonPrimary from "../../button/buttonPrimary/ButtonPrimary";
import "./updateStatusModal.css";
function UpdateStatusModal({ children, productId, cb, ...others }) {
  const [isSold, setIsSold] = useState(true);
  const sendStatus = () => {
    if (isSold) cb.doSoldProduct(productId);
    else cb.doReject(productId);
  };
  const handleChange = (e, sold) => {
    if (e.target.checked) {
      if (sold) setIsSold(true);
      else setIsSold(false);
    }
  };
  return (
    <div className="modalWrapper" {...others}>
      <div className="updateStatusModal" onClick={(e) => e.stopPropagation()}>
        <h1 className="font-medium">Perbarui status penjualan produk mu</h1>
        <div className="statusInputWrapper">
          <input
            type="radio"
            id="success"
            name="status"
            value="sucess"
            onChange={(e) => handleChange(e, true)}
          />
          <label htmlFor="success">Berhasil Terjual</label>
          <p>Kamu telah sepakat menjual produk ini kepada pembeli</p>
        </div>
        <div className="statusInputWrapper">
          <input
            type="radio"
            id="cancel"
            name="status"
            value="cancel"
            onChange={(e) => handleChange(e, false)}
          />
          <label htmlFor="cancel">Batalkan Transaksi</label>
          <p>Kamu membatalkan transaksi produk ini dengan pembeli</p>
        </div>
        <ButtonPrimary onClick={sendStatus}>Kirim</ButtonPrimary>
      </div>
    </div>
  );
}

export default UpdateStatusModal;
