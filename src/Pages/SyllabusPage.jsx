import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import navigate hook
import Navbar from "../Components/Navbar";
import coursesData from "../data/courses.json";
import "./SyllabusPage.css";

const SyllabusPage = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const navigate = useNavigate(); // Initialize navigate function
  const course = coursesData.find((c) => c.id === parseInt(id)); // Find course by ID

  // If course is not found, return an error message
  if (!course) {
    return (
      <div>
        <Navbar />
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <h2>Course not found</h2>
        </div>
      </div>
    );
  }

  // State to track selected module and progress
  const [selectedModuleId, setSelectedModuleId] = useState(course.modules[0].moduleTitle);
  const [progress, setProgress] = useState({});

  // Load progress from localStorage on component mount
  useEffect(() => {
    const storedProgress = localStorage.getItem(`progress-course-${id}`);
    if (storedProgress) {
      setProgress(JSON.parse(storedProgress));
    }
  }, [id]);

  // Save progress to localStorage when it updates
  useEffect(() => {
    localStorage.setItem(`progress-course-${id}`, JSON.stringify(progress));
  }, [progress, id]);

  // Handle checkbox change (toggle module completion)
  const handleCheckboxChange = (moduleTitle) => {
    setProgress((prevProgress) => ({
      ...prevProgress,
      [moduleTitle]: !prevProgress[moduleTitle],
    }));
  };

  // Handle module selection
  const handleModuleClick = (moduleTitle) => {
    setSelectedModuleId(moduleTitle);
  };

  const selectedModule = course.modules.find((m) => m.moduleTitle === selectedModuleId);

  // Navigate back to the Course Detail Page
  const handleBackClick = () => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="syllabus-page">
      <Navbar />
      <div className="syllabus-content">
        {/* Left Column: Module List */}
        <div className="syllabus-list">
          <h2 className="syllabus-title">Syllabus - {course.title}</h2>
          <ul>
            {course.modules.map((module) => (
              <li key={module.moduleTitle} onClick={() => handleModuleClick(module.moduleTitle)}>
                <input
                  type="checkbox"
                  checked={progress[module.moduleTitle] || false}
                  onChange={(e) => {
                    e.stopPropagation(); // Prevents the click event from changing the module selection
                    handleCheckboxChange(module.moduleTitle);
                  }}
                />
                <span className="chapter-text">{module.moduleTitle}</span>
              </li>
            ))}
          </ul>

          {/* Back Button */}
          <button className="back-btn" onClick={handleBackClick}>← Back to Course</button>
        </div>

        {/* Right Column: Module Details */}
        <div className="chapter-details">
          {selectedModule ? (
            <>
              <h2 className="chapter-details-title">{selectedModule.moduleTitle}</h2>
              <p className="chapter-paragraph">{selectedModule.moduleDescription}</p>
            </>
          ) : (
            <p>Select a module to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;
