import React from "react";
import "./NoLearningHeader.css";
import NoLearningImg from "../assets/NoHeaderImg.png";
import SearchBar from "./SearchBar";

const NoLearningHeader = () => {
  return (
    <div className="main-container">
      <img src={NoLearningImg} alt="NoLearningImg" />
      <div>
        <p>
          Get Certified &<br /> Boost your Career
        </p>
        <SearchBar placeholder="Explore Courses" />
      </div>
    </div>
  );
};

export default NoLearningHeader;
