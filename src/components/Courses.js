import React from 'react';
import './Courses.css';

const Courses = () => {
  const governmentCourses = [
    {
      title: 'PMKVY - Computer Hardware',
      description: 'Government certified course in computer hardware and networking under PMKVY scheme',
      duration: '3 months',
      icon: '🖥️',
      scheme: 'PMKVY',
      stipend: 'Yes'
    },
    {
      title: 'DDU-GKY - Healthcare',
      description: 'Healthcare and nursing assistant training program under DDU-GKY with guaranteed placement',
      duration: '6 months',
      icon: '⚕️',
      scheme: 'DDU-GKY',
      stipend: 'Yes'
    },
    {
      title: 'NULM - Beauty & Wellness',
      description: 'Professional beauty therapy and wellness training under NULM scheme',
      duration: '4 months',
      icon: '💆',
      scheme: 'NULM',
      stipend: 'Yes'
    },
    {
      title: 'PMKVY - Electrical',
      description: 'Electrical installation and repair training with PMKVY certification',
      duration: '3 months',
      icon: '⚡',
      scheme: 'PMKVY',
      stipend: 'Yes'
    }
  ];

  const regularCourses = [
    {
      title: 'Web Development',
      description: 'Learn modern web development with HTML, CSS, JavaScript, React and Node.js',
      duration: '6 months',
      icon: '💻'
    },
    {
      title: 'Digital Marketing',
      description: 'Master SEO, social media marketing, content strategy, and online advertising',
      duration: '3 months',
      icon: '📱'
    },
    {
      title: 'Data Science',
      description: 'Explore data analysis, machine learning, and statistical modeling',
      duration: '6 months',
      icon: '📊'
    },
    {
      title: 'Graphic Design',
      description: 'Create stunning designs with industry-standard tools and techniques',
      duration: '4 months',
      icon: '🎨'
    }
  ];

  return (
    <section className="courses" id="courses">
      <div className="container">
        <h2>Government Skill Development Programs</h2>
        <p className="section-subtitle">Official government-sponsored training programs with certifications and stipends</p>
        <div className="courses-grid">
          {governmentCourses.map((course, index) => (
            <div className="course-card government-course" key={index}>
              <div className="scheme-tag">{course.scheme}</div>
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-details">
                <span>Duration: {course.duration}</span>
                <span className="stipend">Stipend Available</span>
              </div>
              <button className="enroll-btn">Apply Now</button>
            </div>
          ))}
        </div>

        <h2 className="section-title">Professional Courses</h2>
        <p className="section-subtitle">Industry-focused skill development programs</p>
        <div className="courses-grid">
          {regularCourses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-duration">
                <span>Duration: {course.duration}</span>
              </div>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
