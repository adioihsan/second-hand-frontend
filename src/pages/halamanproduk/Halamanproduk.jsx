import React from "react";
import "./halamanproduk.css";

const Halamanproduk = () => {
  return (
    <div className="HalamanProduk">
      <div className="halamanProdukWraper">
        <div className="flex basis-1/2 flex-col">
          <img
            src="/assets/images/product.png.png"
            className="imageProduct mb-10 flex justify-center"
          />
          <div className="description border border-2 border-gray rounded-xl">
            <h1 className="my-5 mx-5 font-medium">Deskripsi</h1>
            <h1 className="mx-5 mb-5 text-regular text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
          </div>
        </div>
        <div className="flex basis-1/4 flex-col">
          <div className="description shadow-xl flex flex-col rounded-xl w-full p-5">
            <h1 className=" font-bold">Jam Tangan Casio</h1>
            <h1 className=" py-3 text-regular text-gray-400">Aksesoris</h1>
            <h1 className=" pb-5 font-regular">Rp. 250.000</h1>
            <button className="buttonOne button button-primary">
              Terbitkan
            </button>
            <button className="buttonTwo button button-primary">Edit</button>
          </div>
          <div className="description flex items-center border border-2 border-gray rounded-xl mt-7 p-5 w-full">
            <div className="">
              <img
                src="/assets/images/profilepicture.jpg"
                className="profilePicture rounded-xl"
              />
            </div>
            <div className="flex-col ml-5 ">
              <h1 className="font-bold">Nama Penjual</h1>
              <h1>Kota</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Halamanproduk;
