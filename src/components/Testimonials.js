import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Web Developer',
      company: 'Tech Solutions Ltd',
      content: 'The web development course at TSDF was exactly what I needed to transition into tech. The hands-on projects and mentorship were invaluable.',
      image: '👩',
    },
    {
      name: 'Rahul Kumar',
      role: 'Digital Marketing Specialist',
      company: 'Growth Marketing Inc',
      content: "Thanks to TSDF's digital marketing program, I gained practical skills that helped me land my dream job. The industry-focused curriculum made all the difference.",
      image: '👨',
    },
    {
      name: 'Anita Patel',
      role: 'Data Analyst',
      company: 'Data Insights Co',
      content: 'The data science course was comprehensive and well-structured. The instructors were extremely knowledgeable and supportive throughout the learning journey.',
      image: '👩',
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>Student Success Stories</h2>
        <p className="section-subtitle">Hear from our alumni about their learning experience</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-image">{testimonial.image}</div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
                <p className="company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
