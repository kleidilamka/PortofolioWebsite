import React from "react";
import Slider from "react-slick";

import { ImageContainer } from "../Projects/ProjectsStyles";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";

const images = [image1, image2, image3, image4, image5];

export default function SlickCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    className: "center",
    centerMode: true,
    dotsClass: "slick-dots slick-thumb",
    variableWidth: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          dotsClass: "slick-dots slick-thumb",
          className: "center",
          centerMode: true,
          variableWidth: true,
          adaptiveHeight: true,
        },
      },
    ],
  };
  return (
    <ImageContainer>
      <Slider {...settings}>
        {images.map((item, index) => {
          return (
            <div key={index}>
              <img
                style={{
                  maxWidth: 300,
                  maxHeight: 700,
                  paddingInline: 80,
                  paddingTop: 20,
                  backgroundColor: "transparent",
                }}
                key={index}
                src={item}
                alt="jari"
              />
            </div>
          );
        })}
      </Slider>
    </ImageContainer>
  );
}
