import React from "react";
import "./jumboBanner.css";
function JumboBanner(props) {
  return (
    <div className="jumboBanner">
      <div className="sideBox"></div>
      <div className="bannerWrapper">
        <div className="mainBanner">
          <h1 className="bannerTitle">Bulan Ramadhan Banyak Diskon</h1>
          <img
            className="bannerImage"
            src="/assets/images/banner-pic-1.png"
            alt="banner"
          />
          <div className="subtitle">
            <p>Diskon hingga</p>
            <p>60%</p>
          </div>
        </div>
      </div>
      <div className="sideBox"></div>
    </div>
  );
}

export default JumboBanner;
