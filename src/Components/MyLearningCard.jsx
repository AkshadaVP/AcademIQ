import React, { useState, useEffect } from "react";
import "./MyLearningCard.css";

const MyLearningCard = ({ course }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Retrieve progress data for the course from localStorage
    const storedProgress = localStorage.getItem(`progress-course-${course.id}`);
    if (storedProgress) {
      const progressObj = JSON.parse(storedProgress); // e.g., { "Module 1: ...": true, ... }
      const totalModules = course.modules.length;
      const completed = Object.values(progressObj).filter(val => val === true).length;
      const percentage = totalModules ? Math.round((completed / totalModules) * 100) : 0;
      setProgress(percentage);
    } else {
      setProgress(0);
    }
  }, [course]);

  return (
    <div className="my-learning-card">
      <div className="card-image">
        {/* Optionally, you can add a course image here */}
      </div>
      <div className="card-text">
        <h3>{course.title}</h3>
        <div className="author-percent">
          <p className="author-name">By {course.instructor}</p>
          <div className="progress-percent">
            <p>{progress}%</p>
          </div>
        </div>
      </div>
      <div className="progressBar">
        <div className="progressFill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default MyLearningCard;
