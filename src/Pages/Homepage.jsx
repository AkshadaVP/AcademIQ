import React from 'react'
import HomepageHeader from '../Components/HomepageHeader'
import NoLearningHeader from '../Components/NoLearningHeader'
import SuggestedCourses from '../Components/SuggestedCourses'
import CoursesSection from '../Components/CoursesSection'
import ReviewSection from '../Components/ReviewSection'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <div>
        <NoLearningHeader/>
        <SuggestedCourses/>
        <CoursesSection/>
        <ReviewSection/>
        <Footer/>
    </div>
  )
}

export default Homepage
