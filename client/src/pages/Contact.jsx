import React from 'react';
import kreativeLogo from '../assets/Images/links/kreative.webp';
import agentLogo from '../assets/Images/links/agent.avif';
import YouTubeEmbed from '../components/YouTubeEmbed.jsx';

function Contact() {
  return (
    <div className="container">
      <div className="page-content">
          <div className="content-section">
            <h1>Get In Touch</h1>
          <p>Interested in working together? I'd love to hear about your project and discuss how I can bring your vision to life.</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <strong>Email:</strong>
                <p>laskey.acting@gmail.com</p>
              </div>
              <div className="contact-item">
                <strong>Commercial Agent:</strong>
                <p>Summer Park - The Park Agency</p>
                <p>(818) 860-4970 ext. 3</p>
                <p>https://www.theparkagency.com</p>
                <img src={agentLogo} alt="Agent" className="agent-logo" />
                
              </div>
              <div className="contact-item">
                <strong>Manager:</strong>
                <p>Brent Paxton - Kreativ Artists</p>
                <p>brent@kreativartists.com</p>
                <p>(310) 907-5735</p>
                <p>https://kreativartists.com</p>
                <img src={kreativeLogo} alt="Kreativ Artists" className="kreative-logo" />

              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send a Message</h3>
              <form className="contact-form-content">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" placeholder="Your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input type="text" id="subject" name="subject" placeholder="Project type" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" placeholder="Tell me about your project" rows="5"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 