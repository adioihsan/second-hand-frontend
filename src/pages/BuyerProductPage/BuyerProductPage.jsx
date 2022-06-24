import React from "react";
import "./buyerproductpage.css";
import { Carousel } from "react-responsive-carousel";

const BuyerProductPage = () => {
  return (
    <div className="BuyerProductPage">
      <div className="halamanProdukWraper">
        <div className="flex basis-1/2 flex-col">
          {/* <img
            src="/assets/images/product.png.png"
            className="imageProduct mb-10 flex justify-center"
          /> */}
          <Carousel showArrows={true} className="carousel" showThumbs={false}>
            <div>
              <img
                src="/assets/images/product.png.png"
                className="imageProduct"
              />
            </div>
            <div>
              <img src="/assets/images/product.png" className="imageProduct" />
            </div>
          </Carousel>
          <div className="border border-2 border-gray rounded-xl mb-5">
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
          <div className=" shadow-xl flex flex-col rounded-xl w-full p-5">
            <h1 className=" font-bold">Jam Tangan Casio</h1>
            <h1 className=" py-3 text-regular text-gray-400">Aksesoris</h1>
            <h1 className=" pb-5 font-regular">Rp. 250.000</h1>
            <button className="buttonOne button button-primary">
              Saya tertarik dan ingin nego
            </button>
          </div>
          <div className="description flex items-center border border-2 border-gray rounded-xl mt-7 p-5 w-full">
            <div className="">
              <img
                src="/assets/images/profilepicture.jpg"
                className="profilePicture rounded-xl object-cover"
              />
            </div>
            <div className="flex-col ml-5 ">
              <h1 className="font-bold">Nama Penjual</h1>
              <h1>Kota</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
        <div className="bg-gray-200 p-5 rounded-xl">
          <h1>Harga Tawar</h1>
          <h1 className=" text-regular text-gray-400 mb-5">
            Harga tawaranmu akan diketahui penjual, <br></br> jika penjual cocok
            kamu akan segera <br></br> dihubungi penjual.
          </h1>
          <div className="negotiatedproduct">
            <div>
              <img
                src="/assets/images/product.png.png"
                className="profilePicture rounded-xl object-cover"
              />
            </div>
            <div className="ml-5">
              <h1 className=" font-bold mb-2">Jam Tangan Casio</h1>
              <h1 className=" pb-5 font-regular">Rp. 250.000</h1>
            </div>
          </div>
          <h1>Harga Tawar</h1>
          <input
            type="text"
            placeholder="Rp 0,00"
            className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-xl mb-5"
          />
          <button className="buttonOne button button-primary">Kirim</button>
        </div>
      </div>
    </div>
  );
};

export default BuyerProductPage;
