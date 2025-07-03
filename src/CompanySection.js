// CompanySection.js
import React from 'react';
import { Target, Eye, MapPin } from 'lucide-react';
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

      {/* Our Commitment */}
      <div className="content-section">
        <div className="section-layout">
          <div className="section-content">
            <div className="section-header">
              <Target className="section-icon" />
              <h2 className="section-title">Our Commitment</h2>
            </div>
            <div className="section-text">
              <p>
                At Elements Energy, our team is deeply committed to driving the global shift towards a greener and more sustainable future.
                Through relentless innovation and the application of advanced technologies, we strive to demonstrate the economic and environmental
                benefits of embracing sustainable energy practices.
              </p>
              <p>
                Our approach integrates <span className="text-highlight">DESIGN</span> and <span className="text-highlight">DATA</span> optimization,
                accelerating the crucial process of <span className="text-highlight">DECARBONIZATION</span>.
              </p>
            </div>
          </div>
          <div className="section-image-container">
            <img
              src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Clean renewable energy future"
              className="section-image"
            />
          </div>
          <div className="section-content">
            <div className="section-header">
              <Eye className="section-icon" />
              <h2 className="section-title">Our Vision</h2>
            </div>
            <div className="section-text">
              <p>
                By decarbonizing buildings and infrastructure, we can pave the way for an era where clean, renewable energy powers our homes and workplaces.
                This shift will drastically reduce emissions, improve air quality, and foster healthier communities.
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
              <MapPin className="section-icon" />
              <h2 className="section-title">Transforming Our Urban Landscapes</h2>
            </div>
            <div className="section-text">
              <p>
                Today, our urban landscapes are veiled in pollution, with emissions from heating systems and appliances contributing heavily to greenhouse gas levels.
                This deteriorating air quality impacts public health, leading to increased respiratory ailments.
              </p>
              <p>
                The continued reliance on fossil fuels strains our energy resources and accelerates climate change.
                We're committed to transforming these landscapes into sustainable, clean environments for all.
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
