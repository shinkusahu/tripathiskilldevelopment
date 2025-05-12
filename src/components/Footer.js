import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          Created by{' '}
          <a 
            href="https://www.linkedin.com/in/abhishek-tiwari-3567b465" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <span className="highlight">Abhishek Tiwari</span>
          </a>{' '}
          | Maintained by{' '}
          <span className="highlight">Techno Tech Company</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;