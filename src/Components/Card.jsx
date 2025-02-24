import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ClockIcon from "../assets/ClockImg.png";
import StarImg from "../assets/StarImg.png";
import "./Card.css";

// Function to dynamically get course images
const getCourseImage = (coverImage) => {
  try {
    return new URL(coverImage, import.meta.url).href; // Resolves image path correctly
  } catch (error) {
    console.error("Error loading image:", error);
    return new URL("../assets/CourseCoverImg/placeholder.jpg", import.meta.url).href; // Fallback image
  }
};

const Card = ({ course }) => {
  // Ensure course is defined before rendering
  if (!course) {
    return <div className="course-card">Loading...</div>;
  }

  // Format duration (convert "20 Hours" to "20h")
  const formattedDuration = course.duration.replace(/\D/g, "") + "h";

  return (
    // Wrap entire card with Link
    <Link
      to={`/courses/${course.id}`}
      style={{ textDecoration: "none", color: "inherit" }} // Retain existing styles
    >
      <div className="course-card">
        {/* Course Cover Image */}
        <div className="course-img-container">
          <img
            src={getCourseImage(course.coverImage)}
            alt={`Cover of ${course.title || "Course"}`}
            className="course-img"
          />
        </div>

        {/* Course Details */}
        <div className="course-details">
          <div className="headingandduration">
            <h2 className="course-title">{course.title || "Untitled Course"}</h2>
            <div className="duration">
              <img src={ClockIcon} alt="Clock Icon" className="clock-icon" />
              <span>{formattedDuration}</span>
            </div>
          </div>

          <p className="course-description">
            {course.description || "No description available."}
          </p>
          <h3 className="instructor">
            By {course.instructor || "Unknown Instructor"}
          </h3>

          {/* Rating Section */}
          <div className="rating">
            <span className="rating-value">{course.rating || "N/A"}</span>
            <img src={StarImg} alt="Star Rating" className="star-icons" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
