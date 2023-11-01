import React from "react";
import "./Certification.css";

const Certification = () => {
  return (
    <div className="certification">
      <div className="certification_cont">
        <div className="certification_left">
          <img
            src="https://www.masaischool.com/images/new-homepage/nsdc/nsdc-cert.jpg"
            alt=""
          />
        </div>
        <div className="certification_right">
          <h2 className="certification_right_p1">
            <span>
              Certification
              <img
                src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
                alt="first section"
              />
            </span>{" "}
            By The N.S.D.C
          </h2>
          <p>
            NSDC Certification is a prestigious recognition for students who
            <br />
            have completed accredited skill-based training programs. It validates
            their
            <br /> expertise, demonstrating their dedication to practical
            skills. This certification
            <br /> provides a competitive edge in the job market, showcasing
            proficiency and <br />
            adherence to industry standards. NSDC certifications are widely
            accepted, <br />
            unlocking rewarding career opportunities and personal growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certification;
