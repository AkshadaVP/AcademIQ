import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';
import Header from '../Components/Header.jsx';
import CoursesSection from '../Components/CoursesSection.jsx';
import Features from '../Components/Features.jsx';
import ReviewSection from '../Components/ReviewSection.jsx';
import './LandingPage.css'; 
import Footer from '../Components/Footer.jsx';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CoursesSection />
      <Features />
      <ReviewSection />
      <Footer/>

    </>
  );
};

export default LandingPage;
