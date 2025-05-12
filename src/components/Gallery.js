import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    
    { id: 2, src: '/gallery/skill.jpg', title: 'Skill Workshop' },
    
    { id: 4, src: '../gallery/practical.jpg', title: 'Practical Session' },
    { id: 5, src: '/gallery/group.jpg', title: 'Group Activities' },
    { id: 6, src: '/gallery/training.jpg', title: 'Placement Drive' }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <p className="section-subtitle">Moments of Learning and Achievement</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-image">
                <img src={image.src} alt={image.title} />
                <div className="image-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
