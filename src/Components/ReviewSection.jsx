import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./ReviewSection.css";
import userIcon from "../assets/user-icon.png"; // Replace with actual image path

const reviews = [
  {
    name: "Shubham Mahajan",
    date: "30 February 2025",
    review:
      "I started with zero coding experience, and now I’m building full-stack applications with confidence. The mentorship and hands-on projects were game-changers!",
  },
  {
    name: "Aarav Patel",
    date: "15 January 2025",
    review:
      "The structured curriculum and expert guidance helped me land my first internship. Highly recommend AcademIQ!",
  },
  {
    name: "Riya Sharma",
    date: "10 March 2025",
    review:
      "I was skeptical about online learning, but this platform exceeded my expectations. The projects were really helpful!",
  },
  {
    name: "Neha Verma",
    date: "22 April 2025",
    review:
      "Learning AI/ML concepts was never this easy! The community and mentor guidance made a huge difference in my learning.",
  },
  {
    name: "Rajesh Kumar",
    date: "5 May 2025",
    review:
      "The UI/UX design course was fantastic. I got hands-on experience and built real-world projects that boosted my portfolio.",
  },
  {
    name: "Sakshi Mehta",
    date: "18 June 2025",
    review:
      "The interactive lessons and peer discussions made learning so much fun. I’m now confident in my coding skills!",
  },
  {
    name: "Vikram Singh",
    date: "12 July 2025",
    review:
      "I transitioned from a non-tech background to web development thanks to AcademIQ. The structured roadmap really helped!",
  },
];

const ReviewSection = () => {
  return (
    <div className="review-section">
      <h2 className="review-heading">Success Stories That Inspire</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // Show 1 slide at a time on small screens
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 slides on medium screens
          1024: { slidesPerView: 3 }, // Show 3 slides on large screens
        }}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
        modules={[Pagination, Navigation, Autoplay]}
        className="review-slider"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.name} className="review-card">
            <div className="review-header">
              <img src={userIcon} alt="User" className="user-icon" />
              <div className="user-info">
                <h3>{review.name}</h3>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
