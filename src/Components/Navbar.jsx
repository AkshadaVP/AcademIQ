import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoImg from "../assets/AcademIQ-Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to programmatically navigate
  const isHomePage = location.pathname === "/home"; // Check if on homepage

  // Function to handle Logout and Redirect to Landing Page
  const handleLogout = () => {
    navigate("/"); // Redirects to Landing Page ("/")
  };

  return (
    <div className={`nav-container ${isHomePage ? 'main-Navcontainer' : ''}`}>
      {/* Logo Section */}
      <div className={`logo-container ${isHomePage ? '' : 'nav-logo'}`}>
        <img src={LogoImg} id="logo-img" alt="Logo-img" />
      </div>

      {/* Conditional Rendering Based on Page */}
      {isHomePage ? (
        // After Login Navbar (Homepage)
        <div className='profileandLogout'>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        // Before Login Navbar (Landing Page)
        <div className='button-container'>
          <button id='nav-about'>About</button>
          <button id='nav-categories'>Categories</button>
          
          {/* Login Button redirects to Homepage */}
          <Link to="/home">
            <button id='nav-login'>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
