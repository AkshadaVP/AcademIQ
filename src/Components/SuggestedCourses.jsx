import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SuggestedCourses.css";

// Import courses data from JSON
import coursesData from "../data/courses.json";

const SuggestedCourses = () => {
  const [randomCourses, setRandomCourses] = useState([]);

  useEffect(() => {
    if (coursesData.length > 0) {
      // Shuffle and select only 6 courses randomly
      const shuffled = [...coursesData].sort(() => Math.random() - 0.5).slice(0, 6);
      setRandomCourses(shuffled);
    }
  }, []);

  return (
    <div className="CourseSectionContainer" style={{ backgroundColor: "#FFFFFF" }}>
      <h2 className="CourseHeading">Suggested For You</h2>
      {randomCourses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
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
            {randomCourses.map((course) => (
              <SwiperSlide key={course.id}>
                <Card course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default SuggestedCourses;
