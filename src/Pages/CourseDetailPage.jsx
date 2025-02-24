// src/Pages/CourseDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/courses.json";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./CourseDetailPage.css";

// 1) Helper to resolve image paths just like in Card.jsx
const getCourseImage = (coverImage) => {
  try {
    // Vite-compatible way to resolve relative image paths
    return new URL(coverImage, import.meta.url).href;
  } catch (error) {
    console.error("Error loading course image:", error);
    // Fallback image if the path fails
    return new URL("../assets/CourseCoverImg/placeholder.jpg", import.meta.url).href;
  }
};

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div>
        <Navbar />
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <h2>Course not found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  // 2) Use getCourseImage to resolve the course.coverImage from JSON
  const resolvedImage = getCourseImage(course.coverImage);

  return (
    <div className="course-detail-wrapper">
      <Navbar />

      <div className="course-detail-container">
        {/* Header Section */}
        <header className="course-header">
          {/* Left side: course info */}
          <div className="course-info">
            <h1 className="course-title">{course.title}</h1>
            <p className="course-instructor">By {course.instructor}</p>

            <div className="course-meta">
              <div className="rating">
                <span className="rating-value">{course.rating}</span> / 5
              </div>
              <span className="modules-count">
                {course.modules.length} Modules
              </span>
              <span className="update-date">
                Updated on {course.lastUpdated}
              </span>
            </div>

            <button className="enroll-btn">Enroll Now</button>
          </div>

          {/* Right side: course image */}
          <div className="course-image">
            <img
              src={resolvedImage}
              alt="Course Cover"
              className="detail-cover-img"
            />
          </div>
        </header>

        {/* Main Content: two boxes side by side */}
        <div className="course-content">
          <section className="what-you-will-learn">
            <h2>What You Will Learn</h2>
            <ul>
              <li>Basics of {course.title}</li>
              <li>Key concepts and advanced techniques</li>
              <li>Real-world applications and best practices</li>
            </ul>
          </section>

          <section className="who-should-enroll">
            <h2>Who Should Enroll?</h2>
            <ul>
              <li>Students and beginners looking to explore {course.title}</li>
              <li>Professionals who want to advance their careers</li>
              <li>Anyone curious about {course.title} in real-world applications</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;
