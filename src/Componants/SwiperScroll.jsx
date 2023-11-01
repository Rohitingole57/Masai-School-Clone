import React, { useEffect } from "react";
import Swiper from "swiper";
import "./SwiperScroll.css";

const Swipercroll = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container.two", {
      loop: true,
      slidesPerView: "auto",

      autoplay: {
        delay: 3000,
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="swiper-container two">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="	https://www.masaischool.com/images/new-homepage/community/community5.webp"
              alt="slide 1"
            />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="	https://www.masaischool.com/images/new-homepage/community/community7.webp"
              alt="slide 1"
            />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="	https://www.masaischool.com/images/new-homepage/community/community4.webp"
              alt="slide 2"
            />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="	https://www.masaischool.com/images/new-homepage/community/community7.webp"
              alt="slide 3"
            />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="	https://www.masaischool.com/images/new-homepage/community/community1.webp"
              alt="slide 4"
            />
          </div>
        </div>

        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="	https://www.masaischool.com/images/new-homepage/community/community6.webp"
              alt="slide 6"
            />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="	https://www.masaischool.com/images/new-homepage/community/community4.webp"
              alt="slide 2"
            />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="	https://www.masaischool.com/images/new-homepage/community/community7.webp"
              alt="slide 3"
            />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="	https://www.masaischool.com/images/new-homepage/community/community1.webp"
              alt="slide 4"
            />
          </div>
        </div>

        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="	https://www.masaischool.com/images/new-homepage/community/community6.webp"
              alt="slide 6"
            />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img
              src="https://www.masaischool.com/images/new-homepage/community/community9.webp"
              alt="slide "
            />
          </div>
        </div>
      </div>
      <div className="view_all_courses_btn">
        <button className="home_third_button">JOIN OUR COMMUNITY</button>
      </div>
    </div>
  );
};

export default Swipercroll;
