import React from 'react';
import YouTubeEmbed from '../components/YouTubeEmbed.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';
import { linkedinLogo as LinkedInLogo, instagramLogo as InstagramLogo, imdbLogo as IMDbLogo } from '../assets/Images/Links';


function Home() {
  const linkLogoSizePx = 80; // Adjust this value to change all three logos' size (width & height)
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Sara Laskey (pick a headshot for this page)</h1>
          <p className="hero-subtitle">Voice Over Artist - Actor - Improviser</p>
          <div className="hero-buttons">
            <a href="/vo" className="cta-button primary">Voice Over</a>
            <a href="/acting" className="cta-button secondary">Stage & Screen Acting</a>
          </div>
        </div>
      </div>
      
      <div className="featured-section">
        <div className="featured-grid">
          <div className="featured-card">
            <h3>Acting Reel</h3>
            <YouTubeEmbed url="https://youtu.be/N5WHVL2BbgA" title="ActingReel" />
          </div>
          <div className="featured-card">
            <h3>Contact</h3>
            <b>Email:</b>
            <p>laskey.acting@gmail.com</p>
            <b>Phone:</b>
            <p>(216) 650-5424</p>
          </div>
          <div className="featured-card" >
            <h3>Links</h3>
            <div className="links-row" style={{ '--link-logo-size': `${linkLogoSizePx}px` }}>
              <a className="link-logo-box" href=" https://www.linkedin.com/in/sara-laskey/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInLogo} alt="LinkedIn" className="link-logo" />
              </a>
              <a className="link-logo-box" href="https://www.instagram.com/saralaskeyactor/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramLogo} alt="Instagram" className="link-logo" />
              </a>
              <a className="link-logo-box" href=" https://pro.imdb.com/name/nm15126766" target="_blank" rel="noopener noreferrer">
                <img src={IMDbLogo} alt="IMDb" className="link-logo rounded" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-preview">
        <h2>About Me</h2>
        <p>Put Short Blurb Here</p>
        <a href="/bio" className="learn-more">Learn More</a>
      </div>
    </div>
  );
}

export default Home;
