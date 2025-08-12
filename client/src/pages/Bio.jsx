import React from 'react';
import { hs3 } from '../assets/Images/Headshots';

function Bio() {
  return (
    <div className="container">
      <div className="page-content">
        <div className="content-section">
          <h1>About Sara Laskey</h1>
          <div className="bio-content">
            <div className="bio-layout">
              <div className="bio-image">
                <img src={hs3} alt="Sara Laskey Headshot" />
              </div>
              <div className="bio-text">
                <p>Sara Laskey is a Los Angeles–based actor, voiceover artist, and improviser with a background that's anything but ordinary. Before stepping onto sound stages and behind the mic, she toured as a circus clown with Ringling Bros., spent nearly two decades as an ER doctor, and led strategy and storytelling for a major tech company. Now, she brings all that life experience—and more than a little mischief—to her work on camera and in the booth.</p>

                <p>A graduate of Northwestern University in Performance Studies, Sara trained under legends like Frank Galati, Mary Zimmerman, and David Schwimmer. She went on to complete the Second City Training Program in Chicago and has continued her comedy and improv education in Los Angeles at The Groundlings, UCB, and The Pack Theater.</p>

                <p>Sara's performance roots run deep: she graduated from Ringling Bros. & Barnum & Bailey Clown College and spent four years on the road as a clown and later as the show's unit publicist. But life had more chapters in store. After becoming a mother to two boys, she earned her MD and spent 15 years in emergency medicine, eventually becoming the first-ever Chief Experience Officer for her healthcare system. Later, she joined Qualtrics to lead strategic growth in public health and education..</p>

                <p>Since relocating to LA in 2022, Sara has reignited her passion for acting—training with Risa Bramon-Garcia at BGB Studio and Jen Krater, while also sharpening her skills in writing and performance. She appears in the award-winning shorts Amanda|Sylvie and Cecily, the feature film Cabin Pressure, the web series RideHell, and numerous commercials.</p>

                <p>As a voiceover artist, Sara brings depth, wit, and warmth to every script. She has trained with The Voicecaster, Andy Roth, and Robin Reed, and works across commercial, narration, and character VO with a style that's confident, clever, and unmistakably human.</p>

                <b>Based in Los Angeles, Available for on-camera and voiceover work.</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio; 