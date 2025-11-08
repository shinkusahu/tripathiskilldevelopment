import React from 'react';
import './DirectorMessage.css';

const DirectorMessage = () => {
  return (
    <section className="director-message" id="director-message">
      <div className="container">
        <div className="message-content">
          <div className="director-image">
            <div className="image-placeholder">
              <span className="icon">👨‍💼</span>
            </div>
            <div className="director-info">
              <h3>Mr.Prashant Tripathi</h3>
              <p className="designation">Founder</p>
            </div>
          </div>
          <div className="message-text">
            <h2>Founder's Message</h2>
            <div className="quote-marks">❝</div>
            <p className="message">
              Welcome to Tripathi Skill Development Foundation. Our mission is to empower youth with practical skills
              that bridge the gap between education and employment. In today's rapidly evolving job market,
              skill development is not just an option – it's a necessity.
            </p>
            <p className="message">
              We have partnered with various government initiatives and industry leaders to provide our students
              with the best possible training and placement opportunities. Our focus is not just on teaching
              skills, but on building careers and transforming lives.
            </p>
            <p className="message">
              Join us in our journey to create a skilled and empowered India. Together, we can make a
              difference in the lives of countless young individuals seeking to build their future.
            </p>
            <div className="quote-marks closing">❞</div>
            <div className="signature">
              <img src="/signature.png" alt="Director's Signature" className="signature-img" />
              <p className="sign-name"> Mr. Prashant Tripathi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
