import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="carousel">
        <Slider {...settings} className="slider">
          <div className="slide">
            <img
              alt="ok1"
              src={
                "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863"
              }
            />
          </div>
          <div className="slide">
            <img
              alt="ok2"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-hlLa1mnf2V1p__dFMxkNjf44wHphOxH2g&usqp=CAU"
              }
            />
          </div>
          <div className="slide">
            <img
              alt="ok3"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFjO6rbNAKcZtfgpqkhnqWGPwcH5hAArN1A&usqp=CAU"
              }
            />
          </div>
          <div className="slide">
            <img
              alt="ok4"
              src={
                "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
              }
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
