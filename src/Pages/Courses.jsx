import React from "react";
import Footer from "../Componants/Footer";

const Courses = () => {
  return (
    <div className="courses">
      <div className="home_third">
        <h1>Our Courses</h1>
        <p style={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
          Become a Software Developer, Testing Engineer or a Data Analyst at
          ZERO upfront fees.
        </p>
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
              <a href="https://www.masaischool.com/courses/fullstack-web-development">
                <button className="home_third_button">VIEW DETAILS</button>
              </a>
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
              <a href="https://www.masaischool.com/courses/backend-web-development">
                <button className="home_third_button">VIEW DETAILS</button>
              </a>
            </div>
          </div>
          <div className="home_third_left">
            <div className="home_third_img3">
              <img
                src="	https://masai-website-images.s3.ap-south-1.amazonaws.com/data_07ee77a2da.png"
                alt="first section"
              />
            </div>
            <div className="home_third_left_bottom">
              <h1>Data Analytics</h1>
              <p>Become job-ready in 25 weeks</p>
              <hr className="home_third_hr" />
              <ul className="home_third_ul">
                <li>
                  <p>
                    <strong>Opportunities: </strong>Data Engineer, Data Analyst,
                    Machine Learning Engineer & much more.
                  </p>
                </li>
                <li>
                  <p>100% live learning with expert instructors.</p>
                </li>
                <li>
                  <p>Pay After Placement</p>
                </li>
              </ul>
              <a href="https://www.masaischool.com/courses/data-analytics">
                <button className="home_third_button">VIEW DETAILS</button>
              </a>
            </div>
          </div>
        </div>
        <div className="home_third_ourcourses_two">
          <div className="home_third_left">
            <div className="home_third_img4">
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/mobile_ab8f5bdbf6.png"
                alt="first section"
              />
            </div>
            <div className="home_third_left_bottom">
              <h1>Data Analytics</h1>
              <p>Become job-ready in 25 weeks</p>
              <hr className="home_third_hr" />
              <ul className="home_third_ul">
                <li>
                  <p>
                    <strong>Opportunities: </strong>Data Engineer, Data Analyst,
                    Machine Learning Engineer & much more.
                  </p>
                </li>
                <li>
                  <p>100% live learning with expert instructors.</p>
                </li>
                <li>
                  <p>Pay After Placement</p>
                </li>
              </ul>
              <a href="https://www.masaischool.com/courses/mobile-development-full-time">
                <button className="home_third_button">VIEW DETAILS</button>
              </a>
            </div>
          </div>
          <div className="home_third_left">
            <div className="home_third_img5">
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/testing_faf38ba965.png"
                alt="first section"
              />
            </div>
            <div className="home_third_left_bottom">
              <h1>Data Analytics</h1>
              <p>Become job-ready in 25 weeks</p>
              <hr className="home_third_hr" />
              <ul className="home_third_ul">
                <li>
                  <p>
                    <strong>Opportunities: </strong>Data Engineer, Data Analyst,
                    Machine Learning Engineer & much more.
                  </p>
                </li>
                <li>
                  <p>100% live learning with expert instructors.</p>
                </li>
                <li>
                  <p>Pay After Placement</p>
                </li>
              </ul>
              <a href="https://www.masaischool.com/courses/software-testing-and-automation">
                <button className="home_third_button">VIEW DETAILS</button>
              </a>
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
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Courses;
