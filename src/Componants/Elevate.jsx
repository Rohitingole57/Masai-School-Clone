import React from "react";
import ApplyButton from "./ApplyButton";
import "./Elevate.css";

const Elevate = () => {
  return (
    <div className="elevate">
      <div className="elevate_left">
        <p className="elevate_left_p1">
          <span>
            Elevate
            <img
              src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="first section"
            />
          </span>{" "}
          Your Career Possibilities
        </p>
        <p className="elevate_left_p2">
          It doesn’t matter where you come from, we know <br />
          how to get you to your dream career.
        </p>
        <p className="elevate_left_p3">
          Our graduates consistently outperform students from top Indian
          engineering
          <br /> colleges & universities. 70% of companies who have hired 1
          Masai graduate come <br />
          back to us with their hiring mandates.
        </p>
        <ApplyButton />
      </div>
      <div className="elevate_right">
        <div className="elevate_right_video">
          <iframe
            width="590"
            height="355"
            src="https://www.youtube.com/embed/tSlit0vgB20?si=MF8gBzcG4uNCL7gP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
