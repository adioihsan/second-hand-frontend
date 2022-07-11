import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../../assets/images/logo-icon.png";
import logoLong from "../../../assets/images/logo-36-v.png";
import userImg from "../../../assets//images/user.png";
import iconSearch from "../../../assets/images/icon-search.png";
import iconArrowLeft from "../../../assets/images/icon-arrow-left.png";
import "./navbar.css";
import ButtonPrimary from "../../button/buttonPrimary/ButtonPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faHandshakeAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar({ type, title, userData }) {
  return (
    <nav className="navbar">
      <div className="logo">
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
        {/* <div className="message cursor-pointer">
          <FontAwesomeIcon icon={faHandshake} size="lg" width="24px" />
        </div>
        <div className="message cursor-pointer">
          <FontAwesomeIcon icon={faHeart} size="lg" width="24px" />
        </div> */}
        <div className="burger">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
