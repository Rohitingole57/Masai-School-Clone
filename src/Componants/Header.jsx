import React from "react";
import "./Header.css";

import ApplyButton from "./ApplyButton";

const Header = () => {
  return (
    <div className="header">
      <p>Applications for our 6th November Batches are now open!</p>
      <ApplyButton />
    </div>
  );
};

export default Header;
