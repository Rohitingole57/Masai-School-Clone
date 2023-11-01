import React, { useState, useEffect } from "react";
import "./Home.css";
import Swipercroll from "../Componants/SwiperScroll";
import MarqueeComponent from "../Componants/MarqueeComponent";
import Videos from "../Componants/Videos";
import Footer from "../Componants/Footer";
import Embla from "../Componants/Embla";
import Elevate from "../Componants/Elevate";
import Certification from "../Componants/Certification";
import News from "../Componants/News";

const Home = () => {
  const OPTIONS = {};
  const SLIDE_COUNT = 7;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const testimonialImages = [
    "https://www.masaischool.com/images/new-homepage/banner-student-image2.webp",
    "https://www.masaischool.com/images/new-homepage/banner-student-image3.webp",
    "https://www.masaischool.com/images/new-homepage/banner-student-image4.webp",
  ];

  const testimonialLogo = [
    "https://www.masaischool.com/images/new-homepage/company-logo2.svg",
    "https://www.masaischool.com/images/new-homepage/company-logo3.svg",
    "https://www.masaischool.com/images/new-homepage/company-logo4.svg",
  ];

  const testimonialNames = [
    "Puja Kumari",
    "Ramendra Vikram Singh Parihar",
    "Salman Lukhman Shaikh",
  ];

  const testimonialQuotes = [
    "I developed Communication Skills, People Skills, Mindset, active patience, JAVA, DSA, JavaScript, CSS, and HTML.",
    "Going through the 11-11-6 curriculum was a breathtaking experience. Every new unit came with great enthusiasm and a new challenge.",
    "I learnt a lot from Masai i.e discipline, time management and professionalism.",
  ];
  const testimonialColor = ["#D6E2FA", "#D6E2FA", "#D6E2FA"];

  // Function to change the image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % testimonialImages.length
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [testimonialImages.length]);

  const [currentImagesIndex, setCurrentImagesIndex] = useState(0);

  const overlyImages = [
    "	https://www.masaischool.com/images/new-homepage/curriculum-style/course-image1.webp",
    "https://www.masaischool.com/images/new-homepage/curriculum-style/course-image2.webp",
    "	https://www.masaischool.com/images/new-homepage/curriculum-style/course-image3.webp",
    "	https://www.masaischool.com/images/new-homepage/curriculum-style/course-image4.webp",
    "	https://www.masaischool.com/images/new-homepage/curriculum-style/course-image5.webp",
  ];

  useEffect(() => {
    const timerr = setInterval(() => {
      setCurrentImagesIndex(
        (prevIndex) => (prevIndex + 1) % overlyImages.length
      );
    }, 5000);

    return () => {
      clearInterval(timerr);
    };
  }, [overlyImages.length]);

  return (
    <div className="home">
      <div className="home_first">
        <img
          src="https://masai-website-images.s3.ap-south-1.amazonaws.com/banner_h_1_3d43d26bd0.webp"
          alt="first section"
        />
      </div>
      <div className="home_second">
        <div className="home_second_left">
          <h1>
            Realise Your Potential
            <br /> With{" "}
            <span>
              Assured Outcomes
              <img
                src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
                alt="first section"
              />
              <br />
            </span>{" "}
            Delivered.
          </h1>
          <p>
            India’s only outcome-based career institute.
            <br />
            Enter the tech workforce industry-ready.
          </p>
          <button>GET YOUR GREAM JOB</button>
        </div>
        <div className="home_second_right">
          <div className="testimonial-container">
            <div
              className="testimonial-image"
              style={{
                backgroundImage: `url(${testimonialImages[currentImageIndex]})`,
                backgroundColor: `${testimonialColor[currentImageIndex]}`,
              }}
            >
              <div className="overlay">
                <div className="quote">
                  <img
                    className="quote_quote"
                    src="https://www.masaischool.com/images/new-homepage/quote-start.svg"
                    alt=""
                  />{" "}
                  {testimonialQuotes[currentImageIndex]}{" "}
                  <img
                    className="quote_quote"
                    src="https://www.masaischool.com/images/new-homepage/quote-end.svg"
                    alt=""
                  />
                </div>

                <div className="person-name">
                  {testimonialNames[currentImageIndex]}
                </div>
                <div className="company-logo">
                  <img
                    src={testimonialLogo[currentImageIndex]}
                    alt="Company Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_third">
        <h1>Our Courses</h1>
        <h3>
          Practice-Based Learning Tracks,{" "}
          <span>
            Supercharged By A.I.
            <img
              src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="first section"
            />
          </span>
        </h3>
        <div className="home_third_ourcourses">
          <div className="home_third_left">
            <div className="home_third_img1">
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/full_stack1_329d6b5595.png"
                alt="first section"
              />
            </div>
            <div className="home_third_left_bottom">
              <h1>Full Stack Web Development</h1>
              <p>Become job-ready in 30 weeks</p>
              <hr className="home_third_hr" />
              <ul className="home_third_ul">
                <li>
                  <p>
                    <strong>Opportunities: </strong>Full Stack Developer,
                    Software Engineer & much more.
                  </p>
                </li>

                <li>
                  <p>100% live learning with expert instructors.</p>
                </li>
                <li>
                  <p>Pay After Placement</p>
                </li>
              </ul>
              <button className="home_third_button">VIEW DETAILS</button>
            </div>
          </div>
          <div className="home_third_left">
            <div className="home_third_img2">
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/backend_ea129d404e.png"
                alt="first section"
              />
            </div>
            <div className="home_third_left_bottom">
              <h1>Backend Development</h1>
              <p>Become job-ready in 35 weeks</p>
              <hr className="home_third_hr" />
              <ul className="home_third_ul">
                <li>
                  <p>
                    <strong>Opportunities: </strong>Backend Web Developer, API
                    developer & much more.
                  </p>
                </li>
                <li>
                  <p>100% live learning with expert instructors.</p>
                </li>
                <li>
                  <p>Pay After Placement</p>
                </li>
              </ul>
              <button className="home_third_button">VIEW DETAILS</button>
            </div>
          </div>
        </div>
        <div className="view_all_courses_btn">
          <button className="home_third_button">VIEW ALL COURSES</button>
        </div>
      </div>
      <div className="home_after_third">
        <div className="home_after_cont">
          <div>
            <img
              src="https://www.masaischool.com/images/navbar/prepleafLogo.svg"
              alt="first section"
            />
          </div>
          <div className="home_after_para">
            <p>
              If you are studying in college, check courses offered by Prepleaf.{" "}
              <a href="https://www.prepleaf.com/?ref=masai">Click here</a>
            </p>
          </div>
          <div>
            <img
              src="https://www.masaischool.com/images/navbar/prepleafLogo.svg"
              alt="first section"
            />
          </div>
        </div>
      </div>
      <div className="home_fourth">
        <h3>
          Best-In-Class,{" "}
          <span>
            Curriculum
            <img
              src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="first section"
            />
          </span>{" "}
          &{" "}
          <span>
            Pedagogy
            <img
              src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="first section"
            />
          </span>
        </h3>
        <div className="home_fourth_cont">
          <div className="home_fourth_left">
            <div className="home_fourth_left_cont">
              <div className="home_fourth_left_cont_one">
                100% <span>Live </span>Distance Learning
                <p>
                  India’s Only Live Tech-Learning Course With Tier 1<br />
                  Instructors. Get Real-Time Feedback, Interactive Sessions &{" "}
                  <br />A Personalised Learning Experience.
                </p>
              </div>
              <div className="home_fourth_left_cont_one">
                Generative <span>AI Integrated </span> Program
                <p>
                  Harness & Implement The Power Of AI In Coding & Data
                  <br />
                  Analytics. What’s More? Use Custom AI Tools To Enhance
                  <br />
                  Placement Preparation.
                </p>
              </div>
              <div className="home_fourth_left_cont_one">
                <span>Industry Ready </span>Curriculum
                <p>
                  Our Curriculum Is Regularly Updated Through Industry <br />
                  Feedback. In-Demand Specialisations Are Added To Aid Our{" "}
                  <br />
                  Students Launch Sustainable Careers.
                </p>
              </div>
              <div className="home_fourth_left_cont_one">
                Focus On Learning <span>Agility </span>
                <p>
                  We Prioritise Flexible Thinking & Continuous Skill
                  <br />
                  Development. Stay Nimble In An Ever-Changing World By
                  <br />
                  Embracing Adaptability, Curiosity & Rapid Learning.
                </p>
              </div>
              <div className="home_fourth_left_cont_one">
                Industry Ready In Just <span>25 - 35 Weeks </span>
                <p>
                  Curriculum At Masai Is Designed To Be Intensive & <br />
                  Extensive. With Our Unique Pedagogy Learn Right In Less
                  <br /> Time. All We Ask Is Your Dedication!
                </p>
              </div>
            </div>
          </div>
          <div
            className="home_fourth_right"
            style={{
              backgroundImage: `url(${overlyImages[currentImagesIndex]})`,
            }}
          ></div>
        </div>
        <div className="view_all_courses_btn">
          <button className="home_third_button">GET YOUR DREAM JOB</button>
        </div>
      </div>
      <div className="home_five">
        <h3>
          Be A Part Of Our Thriving <br />
          <span>
            Tech Community
            <img
              src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="first section"
            />
          </span>
        </h3>
        <div>
          <Swipercroll />
        </div>
      </div>
      <div>
      <MarqueeComponent />
      </div>
      <div>
        <div className="emblaCont">
          <div>
            <Embla slides={SLIDES} options={OPTIONS} />
          </div>
          <div>
            <Embla slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
      <div>
       <Elevate/>
      </div>
      <div>
        <Certification/>
      </div>
      <div>
        <News/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
