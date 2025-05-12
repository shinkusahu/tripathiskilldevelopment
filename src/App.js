import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import DonationPage from './pages/DonationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StudentLogin from './components/StudentLogin';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
    
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/student-login" element={<StudentLogin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
