import React, { useEffect } from "react";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import iconCamera from "../../assets/images/icon-camera.png";
import iconArrowLeft from "../../assets/images/icon-arrow-left.png";
import { useOutletContext } from "react-router-dom";
import "./productAdd.css";

function ProductAdd(props) {
  const navProps = useOutletContext();
  useEffect(() => {
    navProps.setNavType("back");
    navProps.setNavTitle("Lengkapi Detail Produk");
  }, []);
  return (
    <div className="productAddWrapper">
      <button className="btnBack">
        <img src={iconArrowLeft} alt="back" />
      </button>
      <div className="productAdd">
        <form className="productAddForm" action="">
          <div className="inputWrapper">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nama Produk"
            />{" "}
          </div>
          <div className="inputWrapper">
            <label htmlFor="price">Harga Produk</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Rp 0,00"
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="categories">Kategori</label>
            <select name="city" id="city">
              <option value="">Pilih Kategori</option>
              <option value="">Semua</option>
              <option value="">Hobi</option>
              <option value="">Kendaraan</option>
              <option value="">Baju</option>
            </select>
          </div>
          <div className="inputWrapper">
            <label htmlFor="description">Deskripsi</label>
            <textarea
              id="description"
              placeholder="Contoh warna,merek dan lain-lain"
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="photo">Foto Produk</label>
            <label htmlFor="photo" className="labelPhotoProduct">
              <p className="text-3xl font-bold text-purple-300">+</p>
              <input
                type="file"
                name="photo"
                id="photo"
                className="inputPhotoProduct"
              />
            </label>
          </div>
          <div className="flex gap-3 mt-3 w-full ">
            <ButtonPrimary className="w-full" type="outlined">
              Preview
            </ButtonPrimary>
            <ButtonPrimary className="w-full">Terbitkan</ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductAdd;
