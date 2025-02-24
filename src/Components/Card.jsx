// Card.jsx
import React from "react";
import ClockIcon from "../assets/ClockImg.png";
import StarImg from "../assets/StarImg.png";
import "./Card.css";

const Card = ({ course }) => {
  return (
    <div className="course-card">
      {/* Course Cover Image */}
      <div className="course-img-container">
        <img src={course.coverImage} alt="Course Cover" className="course-img" />
      </div>

      {/* Course Details */}
      <div className="course-details">
        <div className="headingandduration">
          <h2 className="course-title">{course.title}</h2>
          <div className="duration">
            <img src={ClockIcon} alt="Clock Icon" className="clock-icon" />
            <span>{course.duration}</span>
          </div>
        </div>

        <p className="course-description">{course.description}</p>
        <h3 className="instructor">By {course.instructor}</h3>

        {/* Rating Section */}
        <div className="rating">
          <span className="rating-value">{course.rating}</span>
          <img src={StarImg} alt="Star Rating" className="star-icons" />
        </div>

        {/* Course Meta: Modules & Last Updated */}
        <div className="course-meta">
          <span className="modules">{course.modules.length} Modules</span>
          <span className="update-date">Updated on {course.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
