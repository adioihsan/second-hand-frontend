import React, { useRef } from "react";
import logo from "../../../assets/images/logo.png";
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

function Navbar({ type, title, userData }) {
  //hooks
  const burgerRef = useRef();
  const userProfileMenuRef = useRef();
  // events
  const showBurger = (e) => {
    burgerRef.current.classList.toggle("burgerItemActive");
  };
  const showUserProfileMenu = (e) => {
    console.log("ow you cllick me");
    userProfileMenuRef.current.classList.toggle("userProfileMenuActive");
  };

  // components to render
  const renderLogo = () => (
    <div className="logo">
      <img src={logo} alt="SecondHand" />
    </div>
  );
  const renderTitle = () => (
    <div className="pageTitle absolute  left-1/2 translate-x-[-50%]">
      {title}
    </div>
  );
  const renderBurger = () => (
    <div className="menuBurger">
      <div className="burgerIcon" onClick={showBurger}>
        <FontAwesomeIcon icon={faBars} size="lg" width="24px" height="24px" />
      </div>
      <div className="burgerItems" ref={burgerRef}>
        {/* {true ? renderLoginButton() : renderUserMenu("userMenuList")} */}
      </div>
    </div>
  );
  const renderSearch = () => (
    <label className="searchField">
      <input placeholder="Cari di sini..." />
      <button>
        <img src={iconSearch} alt="search" />
      </button>
    </label>
  );
  const renderLoginButton = () => (
    <ButtonPrimary size="small">
      {<FontAwesomeIcon icon={faArrowRightToBracket} />}Masuk
    </ButtonPrimary>
  );
  const renderLogoutButton = () => (
    <ButtonPrimary size="small">
      {<FontAwesomeIcon icon={faArrowRightFromBracket} />}Keluar
    </ButtonPrimary>
  );
  const renderUserMenu = (type, userData) => {
    const isList = type === "userMenuList";
    return (
      <div className={type}>
        <button className="whistlist">
          <FontAwesomeIcon icon={faHeart} size="lg" width="18px" />{" "}
          {isList && " WhistList"}
        </button>
        <button className="notification">
          <FontAwesomeIcon icon={faBell} size="lg" width="18px" />{" "}
          {isList && " Notification"}
        </button>
        <div className="userProfile">
          <button className="userProfileHeader" onClick={showUserProfileMenu}>
            <img
              src="https://picsum.photos/200"
              alt="userPhoto"
              className="userPhoto"
            />{" "}
            {userData.name}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="userProfileMenu" ref={userProfileMenuRef}>
            <button>
              <FontAwesomeIcon icon={faUser} /> Info Profile
            </button>
            {renderLogoutButton()}
          </div>
        </div>
      </div>
    );
  };

  //check nav type
  if (type === "back" && title)
    return (
      <nav className="navbar relative">
        {renderLogo()}
        <button className="md:hidden">
          <img src={iconArrowLeft} alt="back" />
        </button>
        {renderTitle()}
      </nav>
    );
  else if (type === "burger" && title) {
    <nav className="navbar relative">
      <div className="logo">
        <img src={logo} alt="SecondHand" />
      </div>
      <button className="md:hidden">
        <img src={iconArrowLeft} alt="back" />
      </button>
      {renderTitle()}
    </nav>;
  } else
    return (
      <nav className="navbar">
        <div className="leftNav">
          {renderLogo()}
          {renderBurger()}
          {renderSearch()}
        </div>
        <div className="rightNav">
          {userData
            ? renderUserMenu("userMenu", userData)
            : renderLoginButton()}
        </div>
      </nav>
    );
}

export default Navbar;
