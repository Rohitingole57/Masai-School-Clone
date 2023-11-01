import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MarqueeContent from "marquee-content";
import "./MarqueeComponent.css";

gsap.registerPlugin(ScrollTrigger);
MarqueeContent.registerGSAP(gsap);

const MarqueeComponent = () => {
  return (
    <div className="flex-cont">
      <p>
      Meet Our{" "}
        <span>
        4000+
          <img
            src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
            alt="first section"
          />
  
        </span>{" "}
        Hiring Partners
      </p>
      <div className="marquee-container">
        <div className="marquee-content">
          <ul className="marquee_images_ul">
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg"
                height="110px"
                width="250px"
                alt=""
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/urbanpiper_2884348a0b.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/airmeet_93e45faced.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/whitehat_5a86f1e308.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/homelane_e9cadd0c3c.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg"
                alt="Image 8"
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/vyapar_3f3770ebb5.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>
          </ul>
          <ul className="marquee_images_ul">
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg"
                height="110px"
                width="250px"
                alt=""
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/urbanpiper_2884348a0b.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/airmeet_93e45faced.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/whitehat_5a86f1e308.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/homelane_e9cadd0c3c.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg"
                alt="Image 8"
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/vyapar_3f3770ebb5.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>
          </ul>
          <ul className="marquee_images_ul">
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg"
                height="110px"
                width="250px"
                alt=""
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/urbanpiper_2884348a0b.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/airmeet_93e45faced.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/whitehat_5a86f1e308.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/homelane_e9cadd0c3c.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg"
                alt="Image 8"
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/vyapar_3f3770ebb5.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>{" "}
            <li className="flex-container">
              {" "}
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg"
                alt=""
                height="110px"
                width="250px"
              />{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
    // {/* </marquee-content> */}
  );
};

export default MarqueeComponent;
