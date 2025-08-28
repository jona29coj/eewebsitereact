import React from 'react';
import './Project2.css';

const Project5 = ({ setActivePage }) => {
  return (
    <div className="project-container">
      {/* Hero Section */}
      <section className="hero-sectionpro">
        <div className="hero-content-wrapperpro">
          <div className="hero-contentpro">
            <h1 className="hero-titlepro">Crown Interior Mall</h1>
            <p className="hero-subtitlepro">
              Energy Optimization & Solar Integration
            </p>
            <div className="hero-statspro">
              <div className="stat-item">
                <div className="stat-number">101K</div>
                <div className="stat-label">Square Feet</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2024</div>
                <div className="stat-label">Completed</div>
              </div>
            </div>
          </div>
          <div className="hero-image-containerpro">
            <img 
              src="crown.jpg"
              alt="Ecotech Factory Rooftop Solar"
            />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="project-details">
        <div className="details-container">
          <div className="details-header">
            <div className="details-title">Project Details</div>
          </div>
          <div className="details-grid">
            <div className="detail-card">
              <h3>Client</h3>
              <p>Crown Interior Mall</p>
            </div>
            <div className="detail-card">
              <h3>Location</h3>
              <p>Faridabad, Haryana, India</p>
            </div>
            <div className="detail-card">
              <h3>Size</h3>
              <p>Approx. 1,01,180 sqft</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-number">01</div>
          <h2 className="section-title">Project Overview</h2>
          <p className="section-description">
            Solar energy and lighting analysis for long-term sustainability
          </p>
        </div>
        <div className="content-layout">
          <div className="content-text">
            <p>
              The Crown interiors Mall in Faridabad, India, aims to achieve energy efficiency and sustainability through the integration of solar energy and advanced lighting systems.
            </p>
            <p>
              With a total roof area of 8,550 sq. meters and a proposed solar PV capacity of approximately 1.0 MWh/year, this project reflects a commitment to carbon footprint reduction and long-term cost savings.
            </p>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="crown2.png" 
              alt="Solar Rooftop Overview"
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Solar Energy Insights */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-number">02</div>
          <h2 className="section-title">Solar Energy Insights</h2>
          <p className="section-description">
            Power generation, carbon offset, and environmental impact
          </p>
        </div>
        <div className="content-layout reverse">
          <div className="content-text">
            <ul>
              <li><strong>Annual Solar Energy Production:</strong> 12,50,000 to 14,00,000 kWh/year</li>
              <li><strong>Energy Savings:</strong> Approx. ₹1.10 Cr annually</li>
              <li><strong>Carbon Offset:</strong> 1,128,200 kg CO₂/year (equal to planting 60,000 trees)</li>
            </ul>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="crown3.png" 
              alt="Energy Monitoring"
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Solar Panel Orientation */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-number">03</div>
          <h2 className="section-title">Solar Panel Orientation</h2>
          <p className="section-description">
            Tilted at 28.4° and aligned due North for peak efficiency
          </p>
        </div>
        <div className="content-layout">
          <div className="content-text">
            <p>
              The system is carefully optimized for maximum solar exposure by aligning the panels to true North and tilting them at Faridabad's latitude of 28.4°. This strategic setup ensures consistent energy generation throughout the year.
            </p>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="crown4.png" 
              alt="Panel Installation Orientation"
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Lighting Analysis */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-number">04</div>
          <h2 className="section-title">Lighting Analysis</h2>
          <p className="section-description">
            Enhancing indoor daylight and lux levels
          </p>
        </div>
        <div className="content-layout reverse">
          <div className="content-text">
            <p>
              Daylight factor measures the interior illuminance to exterior illuminanace and is recommended 2-5%. The lighting ranges from 90 to 150 lux, ensuring workplace comfort and safety.
            </p>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="crown5.png" 
              alt="Lighting Optimization"
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Key Recommendations */}
      <section className="full-width-section">
        <div className="full-width-content">
          <h2 className="section-title">Key Recommendations</h2>
          <ul>
            <li>Minimize shading to avoid obstructions to nearby buildings , trees or HVAC units on the roof</li>
            <li>Factor in seasonal variations and include a buffer in energy saving calculations</li>
            <li>Establish regular maintenance for dust and pollution control on panels</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Project5;
