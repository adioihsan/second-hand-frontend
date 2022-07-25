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
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import TopNotification from "../../notification/topNotification/TopNotification";
import { useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Dot from "../../dot/Dot";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import {
  getAllNotifications,
  setNotifBell,
} from "../../../services/actions/notificationAction";

function Navbar({ type, title, userData }) {
  // const socket = io(process.env.REACT_APP_API_URL);
  const navbarRef = useRef();
  const mainMenuRef = useRef();
  const [openNotification, setOpenNotification] = useState(false);
  const { isBell } = useSelector((state) => state.notificationList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // change bg to white when scrolled
    window.addEventListener("scroll", (event) => {
      if (navbarRef.current !== null)
        window.scrollY > 50
          ? (navbarRef.current.style.backgroundColor = "white")
          : (navbarRef.current.style.backgroundColor = "unset");
    });
    //connect to notif socket
    // if (userData) {
    //   socket.emit("start", { userId: userData.id });
    //   socket.on("notification", (message) => {
    //     dispatch(getAllNotifications());
    //     dispatch(setNotifBell(true));
    //   });
    // } else {
    //   socket.disconnect();
    // }
  }, []);
  // actions
  const doSearch = (e) => {
    const key = e.key;
    const value = e.target.value;
    if (key == "Enter") {
      if (!value) navigate("/");
      else navigate("/search/" + value + "/1");
    }
  };
  const doLogOut = () => {
    localStorage.removeItem("enc_token");
    window.location.reload();
  };

  const openMainMenu = () => {
    const mainMenu = mainMenuRef.current;
    mainMenu.classList.toggle("active");
    setOpenNotification(false);
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
            <p
              className="text-purple-400 text-sm cursor-pointer"
              onClick={doLogOut}
            >
              Keluar <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </p>
          </div>
        </div>
      ) : (
        <div className="btnsAction">
          <ButtonPrimary className="w-full" onClick={() => navigate("/login")}>
            Masuk
          </ButtonPrimary>
          <ButtonPrimary
            className="w-full"
            onClick={() => navigate("/register")}
            type="outlined"
          >
            Daftar
          </ButtonPrimary>
        </div>
      )}

      <div className="menuList" onClick={closeMainMenu}>
        <h2 className="font-semibold">Aktifitas Saya</h2>
        <Link to="/negotiation/all" className="menuListItem">
          <FontAwesomeIcon icon={faHandHoldingDollar} />
          Penawaran Saya
        </Link>
        <Link to="/whishlist" className="menuListItem">
          <FontAwesomeIcon icon={faHeartCircleCheck} />
          Wishlist
        </Link>
        {/* 
        <Link to="/" className="menuListItem">
          <FontAwesomeIcon icon={faEnvelope} />
          Pesan
        </Link> */}
        <Link to="/notification" className="menuListItem">
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
          Daftar Jual
        </Link>
        <Link to="/product-list/negotiation" className="menuListItem">
          <FontAwesomeIcon icon={faHandshakeAlt} />
          Penawaran Produk
        </Link>
        <h2 className="font-semibold mt-5">Pengaturan Akun</h2>
        <Link to="/profile-info" className="menuListItem">
          <FontAwesomeIcon icon={faUserAlt} />
          Ubah Profil
        </Link>
        <Link to="/change-password" className="menuListItem mb-5">
          <FontAwesomeIcon icon={faKey} />
          Ganti Password
        </Link>
      </div>
    </div>
  );
  if (type === "back")
    return (
      <nav className="navbarBack">
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
        <p className="text-lg font-medium">{title}</p>
        <div> </div>
      </nav>
    );
  else
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
              onKeyUp={doSearch}
            />
            <button>
              <img src={iconSearch} alt="search" />
            </button>
          </div>
          <div className="iconNav">
            <div className="notification cursor-pointer">
              <div className="relative">
                {isBell && <Dot className="absolute top-0 right-0" />}
                <FontAwesomeIcon
                  icon={faBell}
                  size="lg"
                  width="18px"
                  onClick={() => {
                    setOpenNotification((open) => !open);
                    closeMainMenu();
                    dispatch(setNotifBell(false));
                  }}
                />
              </div>
              {openNotification && <TopNotification />}
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
