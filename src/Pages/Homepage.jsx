import React from 'react';
import Navbar from '../Components/Navbar';  // Use the same Navbar component here
import HomepageHeader from '../Components/HomepageHeader';
import NoLearningHeader from '../Components/NoLearningHeader';
import SuggestedCourses from '../Components/SuggestedCourses';
import CoursesSection from '../Components/CoursesSection';
import ReviewSection from '../Components/ReviewSection';
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <div>
 {/* This Navbar now shows the Logout button since we're at /home */}
      <NoLearningHeader/>
      <SuggestedCourses/>
      <CoursesSection/>
      <ReviewSection/>
      <Footer/>
    </div>
  );
};

export default Homepage;
