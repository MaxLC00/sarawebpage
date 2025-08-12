import React from 'react';
import { hs7 } from '../assets/Images/Headshots';
import commercialDemo from '../assets/Audio/Sara Laskey Final Commercial Demo 07-30-25.mp3';

function VO() {
  return (
    <div className="container">
      <div className="page-content">
        
        <div className="content-section">
        <h1>Voice Over</h1>
          <div className="vo-layout">
            <div className="vo-image">
              <img src={hs7} alt="Sara Laskey Headshot" />
            </div>
            <div className="vo-content">
              <h3>Sara's voice is "friendly, relatable, quirky, warm, smart, mid-range, and clean." | Sara has a unique sound that is authentic, conversational and warm, while also authoritative and knowledgeable.</h3>
              <p>Sara works from her home studio equipped with a Sennheiser MK4 mic, a Volt 2 interface and Adobe Audition</p>
              
              <div className="services-grid">
            <div className="service-card">
              <h3>Commercial Reel</h3>
              <div className="audio-player">
                <audio controls>
                  <source src={commercialDemo} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
            {/* <div className="service-card">
              <h3>Animation</h3>
              <p>Need Sound file</p>
            </div>
            <div className="service-card">
              <h3>Narration</h3>
              <p>Need Sound file</p> 
             </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VO; 