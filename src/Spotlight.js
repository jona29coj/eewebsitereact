import React from 'react';
import './Spotlight.css';

const Spotlight = () => {
  return (
    <section className="spotlightsection">
      <div className="spotlight-wrapper">
        <h4 className="spotlight-heading text-center">In The Spotlight</h4>
        <p className="spotlight-subtitle text-center">
          Real change. Real numbers. Real sustainability.
        </p>

        <p
          className="spotlight-description"
          style={{
            fontSize: '0.95rem',
            maxWidth: '1150px',          // Fixed readable width
            paddingLeft: '0.1rem',      // Fixed left padding
            paddingRight: '0.1rem',     // Fixed right padding
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center'
          }}
        >
          At Elements Energy, impact isn’t an afterthought — it’s at the core of everything we do.
          From slashing energy bills to cutting carbon emissions, we help organizations turn their
          sustainability goals into tangible results. Backed by intelligent design and real-time data,
          our solutions are driving meaningful change across campuses, industries, and communities —
          proving that technology can be both smart and sustainable.
        </p>

        <div className="spotlight-row">
          {/* Article 1 */}
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
              <div className="spotlight-content">
                <div className="spotlight-text">
                  <div className="spotlight-title-bar">
                    <div className="spotlight-red-line"></div>
                    <p><strong>A New Era of Sustainable Infrastructure</strong></p>
                  </div>
                  <p className="spotlight-article-desc">
                    Focused on IIT Madras Research Park – this showcases new energy storage systems that reduce reliance on coal. Elements Energy plays a key role in optimizing energy use and integrating renewables.
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Article 2 */}
          <a 
            href="https://example.com/new-article" 
            target="_blank" 
            rel="noopener noreferrer"
            className="spotlight-link"
          >
            <div className="spotlight-image-wrapper">
              <img
                src="cover2.png"
                alt="Future of Energy"
                className="spotlight-img"
              />
              <div className="spotlight-content">
                <div className="spotlight-text">
                  <div className="spotlight-title-bar">
                    <div className="spotlight-red-line"></div>
                    <p><strong>Empowering the Next-Gen Grid</strong></p>
                  </div>
                  <p className="spotlight-article-desc">
                    Discover how AI-driven EMS is transforming campuses and cities by reducing waste, improving uptime, and enabling a green energy future.
                  </p>
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

