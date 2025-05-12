import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          Created by <span className="highlight">Abhishek Tiwari</span> | Maintained by <span className="highlight">Techno Tech Company</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;