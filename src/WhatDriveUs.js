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
          
        </div>
        <div className="firsttext-column ">
          <h2 className="text-center heading-gradient">What Drives Us<br /></h2>
          <p>
            Climate change is no longer a distant concern — it's a present, accelerating crisis
            that touches every building, business, and community. From energy shortages to
            air quality declines, from water stress to rising emissions, the risks we face are
            urgent, systemic, and deeply interconnected.<br/>
            At Elements Energy, we see these challenges not as roadblocks — but as a call
            to build smarter.<br/>
            We exist because the built environment accounts for over 40% of global
            emissions — and yet most buildings remain blind to how they consume
            resources. We believe that every structure, whether new or existing, can be
            transformed into a living, learning, low-carbon system.<br/>

            That’s why we’ve built a sustainability operating system — born out of
            research, tested in the real world at <strong>IIT Madras Research Park</strong>, and refined with
            every building we touch. Our mission is to turn environmental risks into drivers of
            resilience and growth — through smart technology, climate-conscious design,
            and data-driven insight.<br/>
            We’re not just responding to the climate crisis.
            We’re designing the infrastructure of a cleaner, more cost-effective, and
            future-ready world.<br/><br/>
            

            
          </p>
        
        
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
