import React, { useEffect, useRef } from 'react';
import './WhatDriveUs.css';

const WhatDrivesUs = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY;
        parallaxRef.current.style.transform = `translate(-50%, ${offset * 0.5}px)`; // Adjust speed
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="what-drives-section">

      <div className="what-drives-container">
        <div className="heading-column">
          <h2 className="heading-line">What<br /></h2>
          <h2 className="heading-line">Drives<br /></h2>
          <h2 className="heading-line">Us<br /></h2>
        </div>
        <div className="firsttext-column ">
          <p>
            Environmental changes are no longer distant threats — they are present-day risks
            impacting businesses, communities, and ecosystems alike. From rising energy demands to
            climate volatility, the challenges we face are urgent, interconnected, and complex.
          </p>
          <p>
            At Elements Energies, we're driven by the belief that every challenge holds the
            potential for transformation. We exist to turn environmental risks into opportunities
            for smarter, more sustainable growth. Through data-driven insights, innovative design,
            and reliable operations, we help organizations build solutions that are not only
            resilient — but responsible.
          </p>
          <p>
            We're not just responding to change. We're designing the systems that shape a cleaner,
            more cost-effective, and climate-ready future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
