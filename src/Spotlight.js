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

        <p className="spotlight-description text-center">
          At Elements Energy, impact isn’t an afterthought — it’s at the core of everything we do.
          From slashing energy bills to cutting carbon emissions, we help organizations turn their
          sustainability goals into tangible results. Backed by intelligent design and real-time data,
          our solutions are driving meaningful change across campuses, industries, and communities —
          proving that technology can be both smart and sustainable.
        </p>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' , marginTop: '-140px'}}>
                    <div style={{
                      width: '4.4px',
                      height: '40px',
                      backgroundColor: 'red'
                    }}></div>

                    <p style={{ fontSize: '20px', textAlign: 'left', marginTop:10}}>
                      <strong>A New Era of Sustainable Infrastructure</strong>
                    </p>
                  </div>

                  <p style={{ fontSize: '16px' }}>Focused on the IIT Madras Research Park (IITM-RP) – a hub for innovation – this feature showcases the newly installed battery and thermal energy storage systems that significantly reduce dependency on coal.
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

