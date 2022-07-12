import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../../assets/images/logo-icon.png";
import logoLong from "../../../assets/images/logo-36-v.png";
import iconSearch from "../../../assets/images/icon-search.png";
import "./navbar.css";
import ButtonPrimary from "../../button/buttonPrimary/ButtonPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBoxes } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAlt } from "@fortawesome/free-solid-svg-icons";
import userImg from "../../../assets/images/user.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Navbar({ type, title, userData }) {
  const navbarRef = useRef();
  const mainMenuRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    // change bg to white when scrolled
    window.addEventListener("scroll", (event) => {
      if (navbarRef.current !== null)
        window.scrollY > 50
          ? (navbarRef.current.style.backgroundColor = "white")
          : (navbarRef.current.style.backgroundColor = "unset");
    });
    //
  }, []);
  const openMainMenu = () => {
    const mainMenu = mainMenuRef.current;
    mainMenu.classList.toggle("active");
  };
  const closeMainMenu = () => {
    const mainMenu = mainMenuRef.current;
    mainMenu.classList.remove("active");
  };
  const mainMenu = () => (
    <div className="mainMenu" ref={mainMenuRef}>
      <div className="closeGrip" onClick={closeMainMenu}>
        <FontAwesomeIcon icon={faGripLines} size="lg" color="gray" />
      </div>
      {userData ? (
        <div className="loggedUser">
          <img
            src={
              userData.photo
                ? process.env.REACT_APP_STORAGE_URL +
                  "/images/" +
                  userData.photo
                : userImg
            }
            alt="x"
          />
          <div>
            <p>{userData.name}</p>
            <p className="text-purple-400 text-sm cursor-pointer">
              Keluar <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </p>
          </div>
        </div>
      ) : (
        <div className="btnsAction">
          <ButtonPrimary className="w-full">Masuk</ButtonPrimary>
          <ButtonPrimary className="w-full" type="outlined">
            Daftar
          </ButtonPrimary>
        </div>
      )}

      <div className="menuList" onClick={closeMainMenu}>
        <h2 className="font-semibold">Aktifitas Saya</h2>
        <Link to="/" className="menuListItem">
          <FontAwesomeIcon icon={faHandHoldingDollar} />
          Penawaran
        </Link>
        <Link to="/" className="menuListItem">
          <FontAwesomeIcon icon={faHeartCircleCheck} />
          Wishlist
        </Link>

        <Link to="/" className="menuListItem">
          <FontAwesomeIcon icon={faEnvelope} />
          Pesan
        </Link>
        <Link to="/" className="menuListItem">
          <FontAwesomeIcon icon={faBell} />
          Notifikasi
        </Link>
        <h2 className="font-semibold mt-5">Produk Saya</h2>
        <Link to="/product-add" className="menuListItem">
          <FontAwesomeIcon icon={faPlus} />
          Tambah Produk
        </Link>
        <Link to="/product-list/products" className="menuListItem">
          <FontAwesomeIcon icon={faBoxes} />
          Kelola Produk
        </Link>
        <Link to="/product-list/negotiation" className="menuListItem">
          <FontAwesomeIcon icon={faHandshakeAlt} />
          Produk ditawar
        </Link>
        <h2 className="font-semibold mt-5">Pengaturan Akun</h2>
        <Link to="/profile-info" className="menuListItem">
          <FontAwesomeIcon icon={faUserAlt} />
          Ubah Profil
        </Link>
        <Link to="/" className="menuListItem mb-5">
          <FontAwesomeIcon icon={faKey} />
          Ganti Password
        </Link>
      </div>
    </div>
  );
  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <div className="logo cursor-pointer" onClick={() => navigate("/")}>
          <img src={logoIcon} alt="secondhand." className="imgMobile" />
          <img src={logoLong} alt="secondhand." className="imgDesktop" />
        </div>
        <div className="searchField">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Cari di sini"
          />
          <button>
            <img src={iconSearch} alt="search" />
          </button>
        </div>
        <div className="iconNav">
          <div className="notification cursor-pointer">
            <FontAwesomeIcon icon={faBell} size="lg" width="18px" />
          </div>
          <div className="burger" onClick={openMainMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        </div>
        {mainMenu()}
      </nav>
    </>
  );
}

export default Navbar;
