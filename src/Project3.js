import React from 'react';
import './Project2.css';

const Project3 = () => {
  return (
    <div className="project-container">
      {/* Hero Section */}
      <section className="hero-sectionpro">
        <div className="hero-content-wrapperpro">
          <div className="hero-contentpro">
            <h1 className="hero-titlepro">Metalware Corporation</h1>
            <p className="hero-subtitlepro">
              We proposed a 65 kW solar PV system, optimizing daylight utilization, and long-term sustainability.
            </p>
            <div className="hero-statspro">
              <div className="stat-item">
                <div className="stat-number">₹12 Lakh</div>
                <div className="stat-label">Annual Savings</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2025</div>
                <div className="stat-label">Completed</div>
              </div>
            </div>
          </div>
          <div className="hero-image-containerpro">
            <img 
              src="mw-factory.png" 
              alt="Metalware Corporation"
            />
            <div className="hero-image-overlaypro"></div>
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
              <p>Metalware Corporation</p>
            </div>
            <div className="detail-card">
              <h3>Location</h3>
              <p>Noida, Uttar Pradesh, India</p>
            </div>
            <div className="detail-card">
              <h3>Size</h3>
              <p>Approx. 50,000 sqft</p>
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
            At Elements Energy, our comprehensive energy analysis for Metalware Corporation in Noida, India, exemplifies our expertise in integrating sustainable design strategies and energy-efficient solutions.
          </p>
        </div>
        <div className="content-layout">
          <div className="content-text">
            <p>
              We conducted in-depth assessments of solar feasibility, daylight optimization, and energy consumption patterns.
            </p>
            <p>
              Our approach ensures long-term cost savings, environmental benefits, and improved building performance through innovative energy solutions.
            </p>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="mw2.png" 
              alt="Project Overview"
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-number">02</div>
          <h2 className="section-title">Design Approach</h2>
          <p className="section-description">BIM Modeling as a Foundation</p>
        </div>
        <div className="content-layout reverse">
          <div className="content-text">
            <p>
              We began by developing a Building Information Model (BIM) of the Metalware Corporation premises using Autodesk Revit. The BIM model served as the foundation for simulating energy flows, evaluating daylight penetration, and analyzing the feasibility of solar energy integration.
            </p>
            <p>
              This approach allowed us to understand the energy dynamics of the building comprehensively.
            </p>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="mw3.png" 
              alt="Design Approach"
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Energy Analysis */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-number">03</div>
          <h2 className="section-title">Energy Analysis</h2>
          <p className="section-description">
            Comprehensive energy optimization for maximum efficiency and sustainability
          </p>
        </div>
        <div className="content-layout">
          <div className="content-text">
            <p>We analyzed Noida's local weather data (latitude 28.6131° N) including:</p>
            <ul>
              <li>Solar insolation levels to determine optimal panel placement</li>
              <li>Outdoor lux values (~25,000 lux) for daylight evaluation</li>
              <li>Building orientation and surrounding shading conditions</li>
            </ul>
            <p><strong>Solar System Specs:</strong></p>
            <ul>
              <li>90% rooftop area (~667.8 m²) used</li>
              <li>65 kW system → 140,000–150,000 kWh/year</li>
              <li>₹12 lakhs savings/year, ~3-year payback</li>
              <li>Offset 5.17% of annual 27,09,705 kWh use</li>
            </ul>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="mw4.png" 
              alt="Energy Systems"
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-number">04</div>
          <h2 className="section-title">Recommendations</h2>
          <p className="section-description">
            Optimizing energy efficiency through strategic improvements
          </p>
        </div>
        <div className="content-layout reverse">
          <div className="content-text">
            <ul>
              <li>True-south panel orientation with 28° tilt for max exposure</li>
              <li>Use high-efficiency or bifacial panels</li>
              <li>Ensure long-term output via maintenance/cleaning</li>
              <li>Increase natural light via windows or light shelves</li>
              <li>Use reflective finishes to boost daylight inside</li>
              <li>Maintain 500–700 lux using advanced lighting systems</li>
            </ul>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="mw5.png" 
              alt="Efficiency Recommendations"
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-number">05</div>
          <h2 className="section-title">Energy-Efficient Operations</h2>
        </div>
        <div className="content-layout">
          <div className="content-text">
            <ul>
              <li>Upgrade HVAC systems to reduce power usage</li>
              <li>Install real-time monitoring systems</li>
              <li>Promote energy-conscious behavior</li>
            </ul>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="mw6.png" 
              alt="Operations"
              
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="full-width-section">
        <div className="full-width-content">
          <h2 className="section-title">Conclusion & Impact</h2>
          <p>
            Our analysis provided actionable solar and lighting improvements while revealing financial and environmental benefits. With a ₹12 lakh yearly savings and 114,800 kg CO₂ offset, this solution is cost-effective and future-ready.
            We demonstrated how BIM and simulations, combined with regional expertise, enable optimized, scalable, and sustainable energy systems.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Project3;
