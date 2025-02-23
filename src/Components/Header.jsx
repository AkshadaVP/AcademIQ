import React from 'react';
import SearchIcon from "../assets/Search-icon.png";
import HeaderImg from "../assets/HeaderImg.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* Left Side Content */}
      <div className="header-content">
        <h2>
          Master New Skills Anytime,<br />
          Anywhere with AcademIQ
        </h2>
        <p>
          Upgrade your skills with expert-led courses & hands-on learning.
        </p>
        <div className="searchandsignup">
          <div className="search-container">
            <input id="search-input" type="text" placeholder="Explore Courses" />
            <img className="Search-icon" src={SearchIcon} alt="Search-icon" />
          </div>
          <button id="signup-button">Sign Up</button>
        </div>
      </div>

      {/* Right Side Image */}

        <img className="header-img" src={HeaderImg} alt="header-img" />


    </div>

  );
};

export default Header;
