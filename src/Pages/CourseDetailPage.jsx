import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import coursesData from "../data/courses.json";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./CourseDetailPage.css";

// Resolve image paths using Vite
const getCourseImage = (coverImage) => {
  try {
    return new URL(coverImage, import.meta.url).href;
  } catch (error) {
    console.error("Error loading course image:", error);
    return new URL("../assets/CourseCoverImg/placeholder.jpg", import.meta.url).href;
  }
};

const CourseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find((c) => c.id === parseInt(id));

  // Redirect if course is not found
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

  // Manage enrollment state
  const [isEnrolled, setIsEnrolled] = useState(() => {
    return JSON.parse(localStorage.getItem(`enrolled-${id}`)) || false;
  });

  // Update localStorage when enrollment status changes
  useEffect(() => {
    localStorage.setItem(`enrolled-${id}`, JSON.stringify(isEnrolled));
  }, [isEnrolled, id]);

  // Handle enrollment
  const handleEnroll = () => {
    setIsEnrolled(true);
    localStorage.setItem("hasLearnings", "true");
  };

  // Navigate to syllabus when "Go to Course" is clicked
  const goToCourse = () => {
    navigate(`/courses/${id}/syllabus`);
  };

  // Back button: navigate to course list/homepage (adjust as needed)
  const handleBack = () => {
    navigate("/home");
  };

  const resolvedImage = getCourseImage(course.coverImage);

  return (
    <div className="course-detail-wrapper">
      <Navbar />

      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-btn" onClick={handleBack}>← Back</button>
      </div>

      <div className="course-detail-container">
        {/* Header Section */}
        <header className="course-header">
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

            {/* Button changes dynamically based on enrollment status */}
            {!isEnrolled ? (
              <button className="enroll-btn" onClick={handleEnroll}>Enroll Now</button>
            ) : (
              <button className="go-to-course-btn" onClick={goToCourse}>Go to Course</button>
            )}
          </div>

          <div className="course-image">
            <img src={resolvedImage} alt="Course Cover" className="detail-cover-img" />
          </div>
        </header>

        {/* Main Content */}
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
