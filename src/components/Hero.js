import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import students from '../assest/students.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background">
        <img src={students} alt="" className="hero-img" />
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Tripathi Skill Development Foundation</h1>
          <p>Empowering Lives Through Quality Education & Skill Development</p>
          <div className="hero-buttons">
            <Link to="/courses">
              <button className="primary-btn">Explore Courses</button>
            </Link>
            <Link to="/about">
              <button className="secondary-btn">Learn More</button>
            </Link>
          </div>
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
