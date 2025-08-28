import React from 'react';
import './Project2.css';

const Project4 = ({ setActivePage }) => {
  return (
    <div className="project-container">
      {/* Hero Section */}
      <section className="hero-sectionpro">
        <div className="hero-content-wrapperpro">
          <div className="hero-contentpro">
            <h1 className="hero-titlepro">RMZ</h1>
            <p className="hero-subtitlepro">
              evaluate the potential for solar energy generation and lighting analysis​
            </p>
            <div className="hero-statspro">
              <div className="stat-item">
                <div className="stat-number">2.1K</div>
                <div className="stat-label">Square Meter</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2024</div>
                <div className="stat-label">Completed</div>
              </div>
            </div>
          </div>
          <div className="hero-image-containerpro">
            <img 
              src="rmz-factory.png" 
              alt="rmz Factory Rooftop Solar"
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
              <p> RMZ</p>
            </div>
            <div className="detail-card">
              <h3>Location</h3>
              <p>Bengaluru,India </p>
            </div>
            <div className="detail-card">
              <h3>Size</h3>
              <p>Approx. 2106 sq meters</p>
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
              RMW in Bengaluru , India aims to achieve energy efficiency and sustainability through the integration of solar energy and advanced lighting systems.
            </p>
            <p>
              With a total roof area of 2,106 sq. meter. and a proposed solar PV capacity of approximately 446 kW, this project reflects a commitment to carbon footprint reduction and long-term cost savings.
            </p>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="rmz2.png" 
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
              <li><strong>Annual Solar Energy Production:</strong> 5,50,000 to 5,70,000 kWh/year</li>
              <li><strong>Energy Savings:</strong> Approx. ₹43 lakhs annually</li>
              <li><strong>Carbon Offset:</strong> 466,060 kg CO₂/year (equal to planting 21,185 trees)</li>
            </ul>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="rmz4.png" 
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
            Tilted at 13° and aligned due North for peak efficiency
          </p>
        </div>
        <div className="content-layout">
          <div className="content-text">
            <p>
              The system is carefully optimized for maximum solar exposure by aligning the panels to true North and tilting them at Bengaluru latitude of 13°. This strategic setup ensures consistent energy generation throughout the year.
            </p>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="rmz3.png" 
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
              Over 50% of indoor spaces require additional daylight enhancements to meet the ideal average daylight factor of 3% for precision tasks. The lighting ranges from 500 to 1,000 lux, ensuring workplace comfort and safety.
            </p>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="rmz5.png" 
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
            <li>Optimize solar panel placement with high-efficiency modules</li>
            <li>Improve daylight access through larger openings or lighting retrofits</li>
            <li>Establish regular maintenance for dust and pollution control on panels</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Project4;
