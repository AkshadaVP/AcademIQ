import React, { useState } from 'react'
import './NoLearningHeader.css'
import Navbar from './Navbar';
import NoLearningImg from '../assets/NoHeaderImg.png'
import SearchIcon from '../assets/Search-icon.png'

const NoLearningHeader = () => {
  const [activeTab, setActiveTab] = useState("inProgress"); // State to track active tab

  return (
    <>
    <Navbar/>
    <div className='main-container'>
       <img src={NoLearningImg} alt="NoLearningImg" />
       <div>
      <p>Get Certified &<br /> Boost your Career</p>
      <div className="search-container">
            <input id="search-input" type="text" placeholder="Explore Courses" />
            <img className="Search-icon" src={SearchIcon} alt="Search-icon" />
          </div>
      </div>


    </div>
    </>
  );
};

export default NoLearningHeader;
