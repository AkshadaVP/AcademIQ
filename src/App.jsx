import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Homepage from "./Pages/Homepage";
import CourseDetailPage from "./Pages/CourseDetailPage"; // <-- Import the detail page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Homepage />} />
        
        {/* New route for course details */}
        <Route path="/courses/:id" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
