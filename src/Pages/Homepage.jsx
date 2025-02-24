import React from 'react';
import Navbar from '../Components/Navbar';
import HomepageHeader from '../Components/HomepageHeader'; // if needed
import NoLearningHeader from '../Components/NoLearningHeader';
import MyLearnings from '../Components/MyLearnings';
import SuggestedCourses from '../Components/SuggestedCourses';
import CoursesSection from '../Components/CoursesSection';
import ReviewSection from '../Components/ReviewSection';
import Footer from '../Components/Footer';

const Homepage = () => {
  // Retrieve the "hasLearnings" flag from localStorage
  const hasLearnings = localStorage.getItem("hasLearnings") === "true";

  return (
    <div>
      {/* Navbar remains at the top */}
      <Navbar />

      {/* Toggle header based on enrollment status */}
      {hasLearnings ? <MyLearnings /> : <NoLearningHeader />}
      
      {/* Rest of Homepage content */}
      <SuggestedCourses />
      <CoursesSection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Homepage;
