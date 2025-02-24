// CoursesSection.jsx
import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CoursesSection.css";

// Import your JSON data (make sure the path is correct)
import coursesData from "../data/courses.json";

const CoursesSection = () => {
  return (
    <div className="CourseSectionContainer">
      <h2 className="CourseHeading">Top Courses</h2>
      <div className="swiper-wrapper-container">
        <Swiper
          spaceBetween={20}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 2 },  // 2 cards for tablets
            1024: { slidesPerView: 3 }, // 3 cards for medium screens
            1280: { slidesPerView: 4 }, // 4 cards for large screens
          }}
          pagination={{ clickable: true }}
          navigation={true} // Enables default navigation
          modules={[Navigation, Pagination]}
          className="CardContainerMain"
        >
          {/* Map over the courses JSON data */}
          {coursesData.map((course) => (
            <SwiperSlide key={course.id}>
              {/* Pass course data as a prop to Card */}
              <Card course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CoursesSection;
