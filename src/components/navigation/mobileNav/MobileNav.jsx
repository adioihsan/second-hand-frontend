import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
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
      <Link to="/whishlist" className="navItem">
        <FontAwesomeIcon icon={faHandHoldingDollar} />
        Penawaran
      </Link>
      <Link to="/" className="navItem">
        <FontAwesomeIcon icon={faEnvelope} />
        Pesan
      </Link>
      <Link to="/profile-info" className="navItem">
        <FontAwesomeIcon icon={faUserAlt} />
        Profile
      </Link>
    </div>
  );
}

export default MobileNav;
