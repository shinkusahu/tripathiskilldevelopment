import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p className="tagline">Empowering the Next Generation of Skilled Professionals</p>
            <p className="description">
              Tripathi Skill Development Foundation (TSDF) is dedicated to bridging the gap between education
              and industry requirements. We provide cutting-edge training programs designed to equip students
              with practical skills needed in today's competitive job market.
            </p>
            <div className="features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <h3>Industry-Focused</h3>
                <p>Curriculum designed with industry experts we have trained candidates 5000+ students</p>
              </div>
              <div className="feature">
                <div className="feature-icon">👨‍🏫</div>
                <h3>Expert Trainers</h3>
                <p>Learn from experienced professionals we have 100+ trainers</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <h3>Placement Support</h3>
                <p>Career guidance and job placement assistance placed 3852 candidates so far</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img src="./gallery/aboutImage.jpg" alt="About Us" className="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
