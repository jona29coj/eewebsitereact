import React from 'react';
import './Spotlight.css';

const Spotlight = () => {
  return (
    <section className="spotlight-section">
      <div className="container">
        <h4 className="spotlight-heading">In The Spotlight</h4>
        <div className="spotlight-row">
          <a 
            href="https://revolve.media/views/sustainable-energy-transition-india" 
            target="_blank" 
            rel="noopener noreferrer"
            className="spotlight-link"
          >
            <div className="spotlight-image-wrapper">
              <img
                src="revolve.png"
                alt="Sustainable Energy Transition in India"
                className="spotlight-img"
              />
              <div className="spotlight-overlay">
                <div className="spotlight-text">
                  <p style={{fontSize:'30px' , textAlign:'left'}}><strong>A New Era of Sustainable Infrastructure</strong></p>
                  <p>Focused on the IIT Madras Research Park (IITM-RP) – a hub for innovation – this feature showcases the newly installed battery and thermal energy storage systems that significantly reduce dependency on coal.
                  Elements Energy, a startup providing advanced energy management systems (EMS), plays a key role in integrating renewable energy and optimizing usage.
                  Through green building design and smart building integration, this vision captures India's path toward a greener future.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;

