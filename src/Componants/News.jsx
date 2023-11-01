import React from "react";
import "./News.css";

const News = () => {
  return (
    <div className="news_boss">
      <p className="news_boss_p1">
        Masai In{" "}
        <span>
          News
          <img
            src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
            alt="first section"
          />
        </span>
      </p>
      <div className="news">
        <div className="news_cont">
          <a href="https://www.cxotoday.com/press-release/empowering-education-through-genai/">
            {" "}
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Article_Prateek_Shukla_Gen_AI_92324e2d6b.jpeg"
              alt=""
            />
          </a>

          <h4>
            Empowering Education Through
            <br /> GenAI
          </h4>
        </div>
        <div className="news_cont">
          <a href="https://www.cnbctv18.com/startup/masai-school-targets-fivefold-revenue-growth-in-three-years-16583341.htm">
            <img
              src="	https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thungy_1_420b226e5b.webp"
              alt=""
            />
          </a>

          <h4>
            Masai School targets fivefold
            <br /> revenue growth in three years
          </h4>
        </div>
        <div className="news_cont">
          <a href="https://hr.economictimes.indiatimes.com/news/industry/beyond-degrees-embracing-alternative-credentialing-and-micro-learning-in-tech-recruitment/100492887">
            <img
              src="	https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp"
              alt=""
            />
          </a>

          <h4>
            Beyond Degrees: Embracing <br />
            Alternative Credentialing and Micro-
            <br />
            learning in Tech Recruitment
          </h4>
        </div>
      </div>
    </div>
  );
};

export default News;
