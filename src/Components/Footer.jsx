import React from "react";
import "./Footer.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6"; // Install react-icons if not installed
import Logo from "../assets/AcademIQ-Logo.png"; // Ensure the correct path to your logo

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - About & Courses */}
        <div className="footer-links">
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Courses</h3>
            <ul>
              <li>Top Courses</li>
              <li>Business Management</li>
              <li>Programming</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Tagline & Contact */}
        <div className="footer-tagline">
          <h2>Smart Learning for a <br /> Smarter You.</h2>
          <div className="textandicon">
          <p className="contact-text">Contact Us:</p>
          <div className="social-icons">
            <FaLinkedin className="social-icon" />
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaXTwitter className="social-icon" />
          </div>
          </div>
          
        </div>
      </div>

      {/* Footer Logo */}
      <div className="footer-logo">
        <img src={Logo} alt="AcademIQ Logo" />
      </div>
    </footer>
  );
};

export default Footer;
