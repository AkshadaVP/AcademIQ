import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion
import LandingPage from "./Pages/LandingPage";
import Homepage from "./Pages/Homepage";
import CourseDetailPage from "./Pages/CourseDetailPage";
import SyllabusPage from "./Pages/SyllabusPage";
import SearchResultsPage from "./Pages/SearchResultsPage";

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
};

const AnimatedRoutes = () => {
  const location = useLocation(); // Detects route changes

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionWrapper><LandingPage /></MotionWrapper>} />
        <Route path="/home" element={<MotionWrapper><Homepage /></MotionWrapper>} />
        <Route path="/courses/:id" element={<MotionWrapper><CourseDetailPage /></MotionWrapper>} />
        <Route path="/courses/:id/syllabus" element={<MotionWrapper><SyllabusPage /></MotionWrapper>} />
        <Route path="/search" element={<MotionWrapper><SearchResultsPage /></MotionWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const MotionWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{ minHeight: "100vh" }} // Ensures smooth transition effect
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
