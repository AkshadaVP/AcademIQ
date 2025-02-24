import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link
import "./MyLearnings.css";
import MyLearningCard from "./MyLearningCard";
import coursesData from "../data/courses.json";
import coverImg from "../assets/mylearningImg.png";

const MyLearnings = () => {
  const [activeTab, setActiveTab] = useState("inProgress");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Filter courses that are enrolled based on localStorage flag "enrolled-{course.id}"
    const enrolled = coursesData.filter(course => {
      return localStorage.getItem(`enrolled-${course.id}`) === "true";
    });
    setEnrolledCourses(enrolled);
  }, []);

  // Helper function to compute progress
  const computeProgress = (course) => {
    const storedProgress = localStorage.getItem(`progress-course-${course.id}`);
    if (storedProgress) {
      const progressObj = JSON.parse(storedProgress);
      const totalModules = course.modules.length;
      const completed = Object.values(progressObj).filter(val => val === true).length;
      return totalModules ? Math.round((completed / totalModules) * 100) : 0;
    }
    return 0;
  };

  // Separate courses into In Progress vs Completed
  const inProgressCourses = enrolledCourses.filter(course => computeProgress(course) < 100);
  const completedCourses = enrolledCourses.filter(course => computeProgress(course) === 100);

  return (
    <div className="myLearnings-container">
      <h1 className="myLearnings-heading">My Learnings</h1>

      <div className="tab-buttons">
        <button
          className={activeTab === "inProgress" ? "active" : ""}
          onClick={() => setActiveTab("inProgress")}
        >
          In Progress
        </button>
        <button
          className={activeTab === "completed" ? "active" : ""}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
      </div>

      <div className="cards-cover-wrapper">
        <div className="Card-section">
          {activeTab === "inProgress" ? (
            inProgressCourses.length > 0 ? (
              inProgressCourses.map(course => (
                <Link
                  to={`/courses/${course.id}`}
                  key={course.id}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MyLearningCard course={course} />
                </Link>
              ))
            ) : (
              <p>No courses in progress.</p>
            )
          ) : (
            completedCourses.length > 0 ? (
              completedCourses.map(course => (
                <Link
                  to={`/courses/${course.id}`}
                  key={course.id}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MyLearningCard course={course} />
                </Link>
              ))
            ) : (
              <p>No courses completed yet.</p>
            )
          )}
        </div>
        <img src={coverImg} alt="cover" className="coverImg" />
      </div>
    </div>
  );
};

export default MyLearnings;
