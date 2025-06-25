import React from 'react';
import './Project2.css';

const Project2 = () => {
  return (
    <div className="project-container">
      {/* Hero Section */}
      <section className="hero-sectionpro">
        <div className="hero-content-wrapperpro">
          <div className="hero-contentpro">
            <h1 className="hero-titlepro">CQuICC</h1>
            <p className="hero-subtitlepro">
              India's First State-of-the-Art Quantum Computing Laboratory & Office
            </p>
            <div className="hero-statspro">
              <div className="stat-item">
                <div className="stat-number">12K</div>
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
              src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1200https://images.pexels.com/photos/159298/science-chemistry-lab-laboratory-159298.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="State-of-the-art Quantum Computing Laboratory"
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
              <p>Centre for Quantum Information, Communication, and Computing (CQuICC)</p>
            </div>
            <div className="detail-card">
              <h3>Location</h3>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
            <div className="detail-card">
              <h3>Size</h3>
              <p>Approx. 12,000 sqft</p>
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
            Pioneering the future of quantum computing through innovative design and sustainable practices
          </p>
        </div>
        <div className="content-layout">
          <div className="content-text">
            <p>
              At Elements Energy, we embarked on designing India's first state-of-the-art Quantum Computing Laboratory and office space, aiming to seamlessly blend cutting-edge technology with innovative and sustainable practices.
            </p>
            <p>
              The lab's design reflects a bold, futuristic vision while ensuring optimal energy efficiency, environmental responsibility, and material sustainability for long-term impact.
            </p>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Futuristic Laboratory Design Concept"
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
          <p className="section-description">
            A futuristic design concept that embodies innovation and cutting-edge technology
          </p>
        </div>
        <div className="content-layout reverse">
          <div className="content-text">
            <p>The lab interiors reflect a futuristic theme characterized by:</p>
            <ul>
              <li>A striking contrast between bold black ceilings, crisp white walls, and carefully curated lighting elements</li>
              <li>Industrial aesthetics with exposed ductwork that enhances both form and function</li>
              <li>Clean lines and modern finishes that complement the high-tech nature of quantum computing and innovation</li>
            </ul>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Modern Industrial Laboratory Design"
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
            <p>
              Our journey began with an in-depth energy analysis of the space. We evaluated the energy consumption patterns to optimize the lab's operational efficiency.
            </p>
            <p>
              The lab design incorporated thermal insulation, optimized natural lighting, and energy-efficient fixtures. These measures ensure substantial energy savings while maintaining the necessary technical standards for a high-precision quantum lab.
            </p>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="https://images.pexels.com/photos/159220/printed-circuit-board-print-plate-via-macro-159220.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Energy Efficient Technology Systems"
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Material Selection */}
      <section className="content-section">
        <div className="section-header">
          <div className="section-number">04</div>
          <h2 className="section-title">Material Selection</h2>
          <p className="section-description">
            Thoughtfully curated materials that balance aesthetics, functionality, and sustainability
          </p>
        </div>
        <div className="content-layout reverse">
          <div className="content-text">
            <p>To align with sustainability goals, we carefully selected materials for their low environmental impact:</p>
            <ul>
              <li><strong>Ceiling and Ducts:</strong> Black-painted, exposed ducting not only enhances the futuristic look but also supports efficient air circulation</li>
              <li><strong>Partitions:</strong> Smooth glass for soundproofing while allowing visual connectivity</li>
              <li><strong>Workstations and Walls:</strong> Light wooden textures to foster warmth and natural aesthetics in the workspaces</li>
              <li><strong>Storage:</strong> Acrylic finish doors double as whiteboards for functionality</li>
            </ul>
          </div>
          <div className="content-image-wrapper">
            <img 
              src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Premium Office Materials and Finishes"
            />
            <div className="content-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Visual Aesthetic */}
      <section className="full-width-section">
        <div className="full-width-content">
          <h2 className="section-title">Visual Aesthetic</h2>
          <p>
            The design evolved from the idea of a "future-ready laboratory," where every element speaks of innovation and cutting-edge technology. The bold interplay of white and black elements, the exposed ceilings, and sleek glass partitions come together harmoniously to create an inspiring and dynamic workspace for the researchers and scientists at CQuICC, fostering creativity, collaboration, and groundbreaking discoveries.
          </p>
        </div>
      </section>

      {/* Sustainability Measures */}
      <section className="sustainability-section">
        <div className="sustainability-content">
          <div className="sustainability-grid">
            <div className="sustainability-text">
              <div className="section-number" style={{color: '#94a3b8'}}>05</div>
              <h2 className="section-title">Sustainability Measures</h2>
              <ul>
                <li>Incorporation of energy-efficient lighting and HVAC systems to enhance sustainability and reduce energy consumption</li>
                <li>Use of recycled and locally sourced materials wherever possible to minimize environmental impact and support regional industries</li>
                <li>Adaptive furniture to optimize resource usage over time while ensuring flexibility, comfort, and long-term functionality</li>
              </ul>
            </div>
            <div className="content-image-wrapper">
              <img 
                src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Sustainable Technology Implementation"
              />
              <div className="content-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project2;