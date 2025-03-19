import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
];

const AutoCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slides every 3 seconds
    arrows: false, // Hide arrows for a cleaner look
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-full h-64 object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoCarousel;
