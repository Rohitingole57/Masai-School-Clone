import React, { useState, useEffect } from "react";
import "./Videos.css"; 

const images = [
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/vyapar_3f3770ebb5.svg",
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg",
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/simplilearn_f8af8de923.svg",
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/pagarbook_2746958f65.svg",
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/smallcase_1740bcc33f.svg",
  "https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatagri_d4794042fe.svg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>
        &lt;
      </button>
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`image-slide ${currentIndex === index ? "active" : ""}`}
          >
            <img src={imageUrl} alt={index} />
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
