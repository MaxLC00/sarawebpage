import React from 'react';
import ImageCarousel from '../components/ImageCarousel.jsx';
import { headshots } from '../assets/Images/Headshots/index.js';  
import { btsImages } from '../assets/Images/BTS/index.js';
import { setImages } from '../assets/Images/Sets/index.js';

function Gallery() {
  return (
    <div className="container">
      <div className="page-content">
        <div className="content-section">
          <h1>Gallery</h1>
          <p>Explore my work through photos from various projects and performances.</p>
          
          <div className="gallery-grid">
            <div className="gallery-category">
              <h3>Headshots</h3>
              <ImageCarousel
                images={headshots}
                intervalMs={5000}
                title="Headshots"
              />
            </div>
            <div className="gallery-category">
              <h3>Performance Photos</h3>
              <ImageCarousel
                images={setImages}
                intervalMs={5000}
                title="Performance Photos"
              />
            </div>
            <div className="gallery-category">
              <h3>Behind the Scenes</h3>
              <ImageCarousel
                images={btsImages}
                intervalMs={5000}
                title="Behind the Scenes"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery; 