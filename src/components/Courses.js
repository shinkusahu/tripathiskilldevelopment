import React from 'react';
import './Courses.css';

const Courses = () => {
  const governmentCourses = [
    {
      title: 'PMKVY 4.0 Government Project',
      description: 'Government certified course in computer hardware and networking under PMKVY scheme. Comprehensive training in computer hardware installation, maintenance, networking fundamentals, and IT support services. The program includes hands-on training with industry-standard equipment and guaranteed placement opportunities in IT service centers and computer hardware companies.',
      duration: '3 months',
      icon: '🖥️',
      scheme: 'PMKVY',
      stipend: 'Yes'
    },
    {
      title: 'UPSDM Government Project',
      description: 'Comprehensive skill development program under UPSDM (Uttar Pradesh Skill Development Mission) focusing on IT, healthcare, and retail sectors. The program offers industry-aligned training, practical experience, and guaranteed placement opportunities in leading organizations across Uttar Pradesh.',
      duration: '6 months',
      icon: '🎓',
      scheme: 'UPSDM',
      stipend: 'Yes'
    },
    {
      title: 'BOSCH CSR - Automotive Skills',
      description: 'Advanced automotive technician training program in partnership with BOSCH. Specialized training in modern automotive technologies, diagnostics, and maintenance. The program includes hands-on training with BOSCH equipment and guaranteed placement in automotive service centers.',
      duration: '4 months',
      icon: '🔧',
      scheme: 'BOSCH CSR',
      stipend: 'Yes'
    },
    {
      title: 'ASDC CSR - Digital Skills',
      description: 'Advanced digital literacy and IT skills training program in partnership with ASDC (Automotive Skill Development Council). Focuses on modern IT technologies, digital marketing, and software development. Includes hands-on training with industry-standard tools and guaranteed placement in tech companies.',
      duration: '4 months',
      icon: '💻',
      scheme: 'ASDC CSR',
      stipend: 'Yes'
    }
  ];
  const paidCourses = [
    {
      title: 'CPCT - Computerized Accounting',
      description: 'Comprehensive course in computer hardware and networking under PMKVY scheme. Comprehensive training in computer hardware installation, maintenance, networking fundamentals, and IT support services. The program includes hands-on training with industry-standard equipment and guaranteed placement opportunities in IT service centers and computer hardware companies.',
      duration: '3 months',
      icon: '💰',
      fee: '₹15,000',
      placement: 'Yes'
    },
    {
      title: 'DCA - Diploma in Computer Applications',
      description: 'Advanced diploma program covering MS Office, Database Management, Programming, and Web Design. Perfect for building a strong foundation in computer applications and IT skills.',
      duration: '6 months',
      icon: '🎓',
      fee: '₹12000',
      placement: 'Yes'
    },
    {
      title: 'PGDCA - Post Graduate Diploma in Computer Applications',
      description: 'Advanced post-graduate program focusing on advanced programming, database management, software development, and web technologies. Ideal for career advancement in IT industry.',
      duration: '12 months',
      icon: '📊',
      fee: '10000',
      placement: 'Yes'
    }
  ];
  

  
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
          
        </div>
      </div>
    </section>
  return (
    <section className="courses" id="courses">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        
        {/* Government Courses Section */}
        <div className="courses-grid">
          {governmentCourses.map((course) => (
            <div key={course.title} className="course-card">
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-details">
                <span>Duration: {course.duration}</span>
                <span>Scheme: {course.scheme}</span>
                {course.stipend && <span>Stipend Available</span>}
              </div>
            </div>
          ))}
        </div>
  
        {/* Regular Courses Section
        <h3 className="section-subtitle">Regular Courses</h3>
        <div className="courses-grid">
          {regularCourses.map((course) => (
            <div key={course.title} className="course-card">
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-details">
                <span>Duration: {course.duration}</span>
              </div>
            </div>
          ))}
        </div> */}
  
        {/* Paid Courses Section */}
        <h3 className="section-subtitle">Paid Courses</h3>
        <div className="courses-grid">
          {paidCourses.map((course) => (
            <div key={course.title} className="course-card">
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-details">
                <span>Duration: {course.duration}</span>
                <span>Fee: {course.fee}</span>
                {course.placement && <span>Placement Assistance</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
