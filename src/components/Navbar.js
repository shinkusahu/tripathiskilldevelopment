import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">TSDF</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/student-login" className="login-link">Student Login</Link>
        </li>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
