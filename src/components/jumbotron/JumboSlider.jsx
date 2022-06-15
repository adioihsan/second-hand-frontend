import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function JumboSlider(props) {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      swipeable={false}
      centerMode={true}
      centerSlidePercentage={70}
    >
      <img
        src="/assets/images/banner1.png"
        alt="discount banner"
        className="object-contain object-center"
        style={{ height: "288px" }}
      />
      <img
        src="/assets/images/banner1.png"
        alt="discount banner"
        className="object-contain object-center"
        style={{ height: "288px" }}
      />
      <img
        src="/assets/images/banner1.png"
        alt="discount banner"
        className="object-contain object-center"
        style={{ height: "288px" }}
      />
    </Carousel>
  );
}

export default JumboSlider;
