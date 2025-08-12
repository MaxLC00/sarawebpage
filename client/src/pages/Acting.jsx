import React from 'react';
import YouTubeEmbed from '../components/YouTubeEmbed.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';
import { cafAwards, influxAward } from '../assets/Images/awards';
import { hs8 } from '../assets/Images/Headshots';

function Acting() {
  return (
    <div className="container">
      <div className="page-content">
        
        <div className="content-section">
          <h1>Stage & Screen Acting</h1>
          <div className="acting-layout">
            <div className="acting-image">
              <img src={hs8} alt="Sara Laskey Headshot" />
            </div>
            <div className="acting-content">
              <h3> In addition to numerous commercials and short films, Sara has performed at the Hollywood Fringe Festival, the Brisk Festival and with Hyperactive Studios.  She studies Risa Bramon-Garcia at BGB Studios.  Improv training at The Groundlings, The Second City, The Pack and UCB.  Voice Acting with Voice Masters, The Voicecaster, Andy Roth and Robin Reed.</h3>
            </div>
          </div>
        </div>
        
        <div className="acting-reels-section">
          <div className="acting-grid">
            <div className="acting-card">
              <h3>Acting Reel</h3>
              <YouTubeEmbed url="https://youtu.be/N5WHVL2BbgA" title="ActingReel" />
            </div>
           
            <div className="acting-card">
              <h3>Comedy Reel</h3>
              <YouTubeEmbed url="https://youtu.be/NUpiS6clSNA" title="ComedyReel" />
            </div>
           
            <div className="acting-card">
              <h3>Silvie|Amanda - Full Short</h3>
              <YouTubeEmbed url="https://www.youtube.com/watch?v=0ayTPNHfhuQ&t=12s" title="SilvieAmanda" />
            </div>
           
            <div className="acting-card">
              <h3>Awards</h3>
              <ImageCarousel
                images={[influxAward, cafAwards]}
                intervalMs={3000}
                title="Awards gallery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acting; 