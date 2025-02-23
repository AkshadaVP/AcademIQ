import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SuggestedCourses.css";

const SuggestedCourses = () => {
  return (
    <div className="CourseSectionContainer" style={{ backgroundColor: "#FFFFFF" }}>
      <h2 className="CourseHeading">Suggested For You</h2>
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
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SuggestedCourses;
