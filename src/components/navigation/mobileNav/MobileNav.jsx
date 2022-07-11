import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faHomeLgAlt } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faHomeUser } from "@fortawesome/free-solid-svg-icons";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./mobileNav.css";
function MobileNav(props) {
  return (
    <div className="mobileNav">
      <Link to="/" className="navItem active">
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>
      <Link to="/" className="navItem">
        <FontAwesomeIcon icon={faHeart} />
        Wishlist
      </Link>
      <Link to="/" className="navItem">
        <FontAwesomeIcon icon={faHandHoldingDollar} />
        Penawaran
      </Link>
      <Link to="/" className="navItem">
        <FontAwesomeIcon icon={faEnvelope} />
        Pesan
      </Link>
      <Link to="/" className="navItem">
        <FontAwesomeIcon icon={faUserAlt} />
        Pengguna
      </Link>
    </div>
  );
}

export default MobileNav;
