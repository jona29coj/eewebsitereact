// CompanySection.js
import React from 'react';
import { Target, Bolt, Globe } from 'lucide-react';
import './AboutUs.css';

function CompanySection() {
  return (
    <div className="company-content" style={{ position: 'relative', marginTop: '120px' }}>
      <div className="page-intro">
        <h1 className="page-title">
          We are <span className="title-highlight">Elements Energy</span>
        </h1>
        <p className="page-subtitle">
          Driving the global shift towards a greener and more sustainable future through innovation and advanced technologies.
        </p>
      </div>

      {/* Buildings Reimagined */}
      <div className="content-section centered">
        <div className="full-width-container">
          <div className="section-image-container" style={{ marginBottom: '2rem' }}>
            <img
              src="/aboutus1.png"
              alt="Buildings Reimagined"
              className="section-image expanded-image"
            />
          </div>
          <div className="section-content text-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="section-header centered">
              <h3 className="section-title">Buildings Reimagined</h3>
            </div>
            <div className="section-text">
            
              <p>A visual shift from high-emission, energy-hungry buildings to intelligent, climate-responsive infrastructure. Powered by Elements Energy, buildings become active participants in the clean energy future — monitoring, optimizing, and decarbonizing every day.​
              </p>


            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="content-section">
        <div className="section-layout">
          <div className="section-content">
            <div className="section-header">
              <Target className="section-icon" />
              <h3 className="section-title">The Elements Story: ​</h3>
              <p className='para1'>Where design meets data. Where sustainability gets real.​</p>
            </div>
            <div className="section-text">
              <p>
                It all started with a simple question:​
                Why are buildings — the very spaces meant to shelter and serve us — contributing so heavily to the climate crisis?​
              </p>
              <p>
                Elements Energy was founded on June 21st, 2024, by two people united by more than a surname — they shared a powerful vision to transform how the world builds and operates spaces in the age of climate crisis.​             
              </p>
              <p>One came from the world of architecture and urban design, deeply aware of how buildings shape people and the planet. The other came from the fields of renewable energy and technology, immersed in systems, sensors, and the data behind clean power. Both had seen, from different angles, how deeply broken our approach to sustainability was — especially in the built environment.​
                So, they joined forces.​</p>
              <p>​
                Not just to raise awareness, but to build solutions. </p>
            </div>
          </div>
          <div className="section-image-container">
            <img
              src="/aboutus2.png"
              alt="Sustainable energy infrastructure"
              className="section-image"
            />
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="content-section">
        <div className="section-layout">
          <div className="section-image-container">
            <img
              src="/aboutus3.png"
              alt="Clean renewable energy future"
              className="section-image"
            />
          </div>
          <div className="section-content">
            <div className="section-header">
              <Bolt className="section-icon" />
              <h3 className="section-title">Born from Experience. Built at IIT Madras​</h3>
            </div>
            <div className="section-text">
              <p>
                Their shared passion became a venture — one rooted in both vision and engineering.
Incubated at IIT Madras and built inside the Research Park, Elements Energy evolved
from idea to impact in one of India’s most cutting-edge innovation ecosystems.​

There, alongside researchers and energy pioneers, they developed and tested their core
technology — not in theory, but in live buildings. The result was a robust, real-time
Sustainability Operating System — a platform capable of measuring, managing, and
optimizing everything from energy and water to indoor air quality and carbon emissions.
              </p>
              <p>
                As a result, future generations will enjoy a brighter, more sustainable world, free from the burdens of pollution and climate change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transforming Urban Landscapes */}
      <div className="content-section dark-section">
        <div className="section-layout">
          <div className="section-content">
            <div className="section-header">
              <Globe className="section-icon" />
              <h3 className="section-title">Why We Started This?​</h3>
            </div>
            <div className="section-text">
              <p>
                Because buildings today are silently responsible for over 40% of global emissions — and most operate without any visibility into their environmental impact. They’re designed with good intent, but maintained with blind systems.​<br/>

                We started Elements Energy to change that.​
We believe every building can be intelligent, efficient, and climate-aligned — if given the right tools.​<br/>

And we believe those tools must be simple, scalable, and grounded in real-world performance.​
              </p>
            </div>
          </div>
          <div className="section-image-container">
            <img
              src="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Urban transformation and sustainability"
              className="section-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySection;
