import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

// Logos for landing and homepage
import LandingLogo from "../assets/AcademIQ-Logo.png";
import HomepageLogo from "../assets/AcademIQ-Logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  // 1. Read initial login state from localStorage (default false if not set)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedVal = localStorage.getItem("isLoggedIn");
    return storedVal ? JSON.parse(storedVal) : false;
  });

  // 2. Whenever isLoggedIn changes, update localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  // 3. Handle "Login" → set isLoggedIn = true, navigate to /home
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/home");
  };

  // 4. Handle "Logout" → set isLoggedIn = false, navigate to /
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  if (isLoggedIn) {
    // If user is logged in, show homepage navbar
    return (
      <div className="main-Navcontainer">
        {/* Clicking the logo goes to /home */}
        <div
          className="logo-container"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        >
          <img src={HomepageLogo} alt="Homepage Logo" />
        </div>

        <div className="profileandLogout">
          <button onClick={handleLogout}>Log Out</button>
          <div className="profile"></div>
        </div>
      </div>
    );
  }

  // If user is NOT logged in, show landing (login) navbar
  return (
    <div className="nav-container">
      <div className="logo-container nav-logo">
        <img src={LandingLogo} id="logo-img" alt="Landing Page Logo" />
      </div>
      <div className="button-container">
        <button id="nav-about">About</button>
        <button id="nav-categories">Categories</button>
        <button id="nav-login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
