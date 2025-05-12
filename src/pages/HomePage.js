import React from 'react';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import DirectorMessage from '../components/DirectorMessage';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Donation from '../components/Donation';
import Contact from '../components/Contact';
import About from '../components/About';  // Add this import

const HomePage = () => {
  return (
    <>
      <Hero />
      <DirectorMessage />
      <Courses />
      <About />
      <Testimonials />
      <Gallery />
      <Donation />
      <Contact />
    </>
  );
};

export default HomePage;