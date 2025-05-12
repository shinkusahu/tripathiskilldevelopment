import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assest/logo.jpg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Tripathi Skill Development Foundation" />
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/donation">Donation</Link>
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
