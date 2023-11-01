import React from "react";
import ApplyButton from "../Componants/ApplyButton";
import MarqueeComponent from "../Componants/MarqueeComponent";
import Footer from "../Componants/Footer";
import "./Success_Stories.css";

const Success_Stories = () => {
  return (
    <div className="success_stories">
      <div className="success">
        <div className="first_success">
          <div className="first_success_left">
            <h1>Proof that dreams do come true</h1>
            <h3>A testament to what’s possible</h3>
            <ApplyButton />
          </div>
          <div className="first_success_right">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0867JeIfyLY?si=g1kxTAJEAjJSWNCQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="success success_color">
        <div className="second_success">
          <h2>How is Masai Creating an Impact?</h2>
          <p>4000 students placed across 1000+ companies</p>
          <div className="second_success_bottom">
            <div className="success_number">
              <h1>4000+</h1>
              <p>Hiring Partners</p>
            </div>
            <div className="success_number">
              <h1>6.9 LPA</h1>
              <p>Average CTC</p>
            </div>
            <div className="success_number">
              <h1>6,000+</h1>
              <p>Currently Enrolled Students</p>
            </div>
            <div className="success_number">
              <h1>94%</h1>
              <p>Placement Rate</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MarqueeComponent/>
        <div style={{textAlign:"center", marginBottom:"20px"}}> <ApplyButton/></div>
       
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Success_Stories;
