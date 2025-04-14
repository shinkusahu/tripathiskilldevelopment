import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Tripathi Skill Development Foundation</h1>
        <p>Empowering Lives Through Quality Education & Skill Development</p>
        <div className="hero-buttons">
          <button className="primary-btn">Explore Courses</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
      <div className="stats">
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Students Trained</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Expert Trainers</p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Placement Support</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
