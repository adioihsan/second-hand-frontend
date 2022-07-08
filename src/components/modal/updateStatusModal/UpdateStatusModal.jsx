import React from "react";
import "./updateStatusModal.css";
function UpdateStatusModal(props) {
  return (
    <div className="modalWrapper">
      <div className="updateStatusModal">
        <h1>Perbarui status penjualan produk mu</h1>
        <form>
          <div className="statusInputWrapper">
            <input
              type="radio"
              id="success"
              name="success"
              value="Berhasil Terjual"
            />
          </div>
          <div className="statusInputWrapper">
            <input
              type="radio"
              id="cancel"
              name="cancel"
              value="Berhasil Terjual"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateStatusModal;
