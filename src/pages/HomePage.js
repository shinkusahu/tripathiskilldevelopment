import React from 'react';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import DirectorMessage from '../components/DirectorMessage';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Donation from '../components/Donation';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <DirectorMessage />
      <Courses />
      <About />
      <Testimonials />
      <Donation />
      <Contact />
    </>
  );
};

export default HomePage;
