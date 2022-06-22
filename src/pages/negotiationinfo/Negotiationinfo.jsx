import React from "react";
import "./negotiationinfo.css";

const Negotiationinfo = () => {
  const isAgreed = true;
  return (
    <div className="Negotationinfo">
      <div className="negotiationWraper">
        <div className="left">
          <img
            src="/assets/images/fi_arrow-left.svg"
            className="backButton rounded-xl object-cover"
          />
        </div>
        <div className="right">
          <div className="description">
            <div className="">
              <img
                src="/assets/images/profilepicture.jpg"
                className="profilePicture rounded-xl object-cover"
              />
            </div>
            <div className="flex-col ml-5 ">
              <h1 className="font-medium">Nama Penjual</h1>
              <h1>Kota</h1>
            </div>
          </div>
          <h1 className="headingList">Daftar produkmu yang ditawar</h1>

          <div className="negotiatedproduct">
            <div>
              <img
                src="/assets/images/product.png.png"
                className="profilePicture rounded-xl object-cover"
              />
            </div>
            <div className="ml-5">
              <h1 className=" font-bold">Jam Tangan Casio</h1>
              <h1 className=" py-3 text-regular text-gray-400">Aksesoris</h1>
              <h1 className=" pb-5 font-regular">Rp. 250.000</h1>

              {isAgreed ? (
                <div className="buttons flex">
                  <button className="buttonTwo button button-primary">
                    Status
                  </button>
                  <button className="buttonOne button button-primary">
                    Hubungi{" "}
                    <img
                      src="/assets/images/fi_whatsapp.svg"
                      className="whatsapp rounded-xl object-cover"
                    />
                  </button>
                </div>
              ) : (
                <div className="buttons flex">
                  <button className="buttonTwo button button-primary">
                    Tolak
                  </button>
                  <button className="buttonOne button button-primary">
                    Terima
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Negotiationinfo;
