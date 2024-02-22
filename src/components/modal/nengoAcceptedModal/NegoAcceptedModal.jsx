import React from "react";
import ButtonPrimary from "../../button/buttonPrimary/ButtonPrimary";
import "./negoAcceptedModal.css";
function NegoAcceptedModal({ children, negoData, cb, ...others }) {
  const buyer = negoData.user_buyer.user_detail;
  const product = negoData.product;
  return (
    <div className="modalWrapper" {...others}>
      <div className="negoAcceptedModal" onClick={(e) => e.stopPropagation()}>
        <h1 className="font-medium">
          Yeay kamu berhasil mendapat harga yang sesuai
        </h1>
        <p className="text-gray-400">
          Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
        </p>
        <div className="acceptedInfo">
          <div className="acceptedBuyer">
            <img
              src={
                process.env.REACT_APP_STORAGE_URL +
                "/images%2F" +
                buyer.image +
                "?alt=media"
              }
              alt="user"
            />
            <div>
              <p className="font-medium">{buyer.name}</p>
              <p className="text-xs">{buyer.city}</p>
            </div>
          </div>
          <div className="productAccepted">
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
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="line-through">
                {" "}
                {product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
              <p>
                Ditawar{" "}
                {negoData.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          </div>
        </div>
        <ButtonPrimary onClick={() => cb.doCallBuyer()}>
          Hubungi Via Whatsapp
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default NegoAcceptedModal;
