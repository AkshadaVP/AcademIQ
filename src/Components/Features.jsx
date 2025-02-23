import React from 'react';
import grid1 from '../assets/grid1.png';
import grid2 from '../assets/grid2.png';
import grid3 from '../assets/grid3.png';
import grid4 from '../assets/grid4.png';
import './Features.css';

const Features = () => {
  return (
    <div className="features-section">
      <h2 className="features-heading">Why Choose AcademIQ?</h2>
      <div className="features-grid">
        <div className="capsule-container">
          <img src={grid1} alt="Mentor and Peer Support" />
          <p>Mentor and Peer Support</p>
        </div>
        <div className="capsule-container">
          <img src={grid2} alt="Interactive Learning Experiences" />
          <p>Interactive Learning Experiences</p>
        </div>
        <div className="capsule-container">
          <img src={grid3} alt="Industry-Recognized Certifications" />
          <p>Industry-Recognized Certifications</p>
        </div>
        <div className="capsule-container">
          <img src={grid4} alt="Progress Tracking" />
          <p>Progress Tracking</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
