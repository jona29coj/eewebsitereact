import React from 'react';
import './Build.css';
import {
  Activity,
  Shield,
  Battery,
  Sun,

} from 'lucide-react';
function Build() {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero-video-section1">
        <video className="background-video1" autoPlay loop muted playsInline>
          <source src="design_page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-overlay"></div>

        <div className="hero-text">
          <h1>
            Renewable Energy <br />
            Integration for Net-<br />
            Zero Facilities.
          </h1>
        </div>
      </section>
    
      {/* Section 2: Text Left, Image Right */}
      <section className="build-info-section">
        <div className="build-text">
          <h2>
            Powering a Greener<br />
            Built Environment
          </h2>
          <p>
            At Elements Energy, we go beyond just constructing spaces; we build intelligent energy systems.
            By integrating renewable energy sources and advanced storage technologies, we are shaping the
            future of net-zero buildings. Our BUILD solutions reduce carbon emissions, lower operational costs,
            and bring energy independence to every project.
          </p>
        </div>
        <div className="build-image">
          <img src="integrate.png" alt="Renewable Systems Overview" />
        </div>
      </section>
           <section id="features" className="build-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title black">Our Integrated Solutions</h2>
            <p className="section-description dark" style={{fontSize:'1.1rem', textAlign:'center'}}>
              <br/>Cutting-edge technology that puts you in complete control of your energy future
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Activity />
              </div>
              <h3 className="feature-title">Rooftop Solar Systems</h3>
              <p className="feature-description" style={{textAlign:'justify'}}>We design and install high-performance rooftop solar systems tailored to your building’s footprint and energy profile.<br/><strong>Benefits:</strong> Real-time generation, net-metering, rapid ROI, space optimization.
</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Shield />
              </div>
              <h3 className="feature-title" >Battery Energy Storage Systems (BESS)
</h3>
              <p className="feature-description" style={{textAlign:'justify'}}>Seamlessly store surplus solar and wind energy for use during peak hours or outages.<br/><strong>Benefits:</strong> Grid independence, peak load shaving, enhanced reliability.
</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Battery />
              </div>
              <h3 className="feature-title">Wheeled-In Solar & Wind Energy
</h3>
              <p className="feature-description" style={{textAlign:'justify'}}>When on-site generation isn’t enough, we source clean power from off-site solar and wind farms using wheeling agreements.<br/><strong>Benefits:</strong> Scalable renewable sourcing, energy security, long-term price stability.
</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Sun />
              </div>
              <h3 className="feature-title">Solar Integration</h3>
              <p className="feature-description" style={{textAlign:'justify'}}>Thermal Energy Storage
Store excess energy as chilled water or phase-change materials to cool buildings efficiently.<br/><strong>Benefits:</strong> Cuts cooling energy demand, perfect for district cooling or high-load buildings
</p>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}

export default Build;
