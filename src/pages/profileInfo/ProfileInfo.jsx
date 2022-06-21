import React, { useEffect } from "react";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import iconCamera from "../../assets/images/icon-camera.png";
import iconArrowLeft from "../../assets/images/icon-arrow-left.png";
import { useOutletContext } from "react-router-dom";
import "./profileInfo.css";

function ProfileInfo(props) {
  const navProps = useOutletContext();
  useEffect(() => {
    navProps.setNavType("back");
    navProps.setNavTitle("Info Profil");
  }, []);
  return (
    <div className="profileInfoWrapper">
      <button className="btnBack py-5">
        <img src={iconArrowLeft} alt="back" />
      </button>
      <div className="profileInfo">
        <form className="profileInfoForm" action="">
          <div className="inputWrapperPhoto">
            <label htmlFor="photo" className="labelPhoto">
              <img className="iconCamera" src={iconCamera} alt="browse" />
              <input
                type="file"
                name="photo"
                id="photo"
                className="inputPhoto"
              />
            </label>
          </div>
          <div className="inputWrapper">
            <label htmlFor="name">Nama</label>
            <input type="text" name="name" id="name" placeholder="nama" />{" "}
          </div>
          <div className="inputWrapper">
            <label htmlFor="city">Kota</label>
            <select name="city" id="city">
              <option value="">Pilih Kota</option>
              <option value="">Aceh</option>
              <option value="">Bali</option>
              <option value="">Bandka</option>
              <option value="">Banten</option>
            </select>
          </div>
          <div className="inputWrapper">
            <label htmlFor="Contoh Jl. Semeru no35 blok b">Alamat</label>
            <textarea />
          </div>
          <div className="inputWrapper">
            <label htmlFor="phone">No Handphone</label>
            <input type="number" name="phone" />
          </div>
          <ButtonPrimary className="w-full mt-3">Simpan</ButtonPrimary>
        </form>
      </div>
    </div>
  );
}

export default ProfileInfo;
