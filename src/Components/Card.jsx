import React from "react";
import CoverImg from "../assets/CourseCoverImg.jpg"; // Ensure correct path
import StarImg from "../assets/StarImg.png"; // Ensure correct path
import ClockIcon from "../assets/ClockImg.png"; // Ensure correct path
import './Card.css';

const CourseCard = () => {
  return (
    <div className="course-card">
      {/* Course Cover Image with Duration Overlay */}
      <div className="course-img-container">
        <img src={CoverImg} alt="Course Cover" className="course-img" />
        
      </div>

      {/* Course Details */}
      <div className="course-details">
        <div className="headingandduration">
        <h2 className="course-title">
          Fundamentals Of <br /> Artificial Intelligence
        </h2>
        <div className="duration">
          <img src={ClockIcon} alt="Clock Icon" className="clock-icon" />
          <span>20 Hours</span>
        </div>

        </div>
        
        <p className="course-description">
          Introduction to AIML, AI/DS, branch specializations, and real-world applications.
        </p>
        <h3 className="instructor">By Prof. Alok Bhoye</h3>

        {/* Rating Section */}
        <div className="rating">
          <span className="rating-value">4.0</span>
          <img src={StarImg} alt="Star Rating" className="star-icons" />
        </div>

        {/* Course Meta: Modules & Last Updated */}
        <div className="course-meta">
          <span className="modules">5 Modules</span>
          <span className="update-date">Updated on 12 February 2025</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
