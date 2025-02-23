import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import LandingPage from "./Pages/LandingPage.jsx";
import Homepage from "./Pages/Homepage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/home" element={<Homepage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
