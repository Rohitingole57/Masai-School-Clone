import React from "react";
import "./Hire_From_Us.css";
import MarqueeComponent from "../Componants/MarqueeComponent";
import Form from "../Componants/Form";
import Footer from "../Componants/Footer";
import Frontback from "../Componants/frontback.png"
import Elevate from "../Componants/Elevate";

const Hire_From_Us = () => {
  return (
    <div className="hire_from_us">
      <div className="hire_first">
        <div className="hire_first_1">
          <img
            src="https://www.masaischool.com/images/hire-masai-graduates/hire-banner.jpg"
            alt=""
          />
          <div className="display_flex_hire">
            <div className="hire_from">
              <p className="hire_p1">Hire Tech Talent That Delivers</p>
              <p className="hire_p2">Quick. Simple.</p>
              <div>
                <img className="frontbackimg" src={Frontback} alt="" />
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div>
        <MarqueeComponent />
      </div>
      <div>
        <Elevate/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Hire_From_Us;
