import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Wind, 
  Sun, 
  Lightbulb,
  Thermometer,
  Leaf,
  ArrowRight,
  Settings,
  Monitor
} from 'lucide-react';
import './Design.css';

function Design() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const explanations = {
    "Form and Orientation": "Optimizing building shape and placing windows to align with sun path for natural lighting and heat gain reduction.",
    "Shading": "Using overhangs, louvers, or vegetation to reduce solar heat gain and improve comfort.",
    "Cool Roofs": "Reflective materials on roofs to reduce heat absorption and lower indoor temperatures.",
    "Fenestrations": "Designing window placement and type for light and airflow while minimizing energy loss.",
    "Insulation": "Materials that reduce heat transfer, improving energy efficiency and comfort.",
    "Daylighting": "Harnessing natural light through windows, skylights, or reflective surfaces to reduce lighting energy.",
    "Natural Ventilation": "Designing openings and layout to allow air movement for cooling without mechanical systems.",
    "Thermal Mass": "Using heavy materials that absorb and release heat slowly to stabilize indoor temperature.",
    "HVAC": "Heating, Ventilation, and Air Conditioning systems designed for high efficiency, smart controls, and reduced energy consumption.",
    "Lighting": "Use of energy-efficient lighting (like LEDs), automated daylight sensors, and intelligent lighting controls.",
    "Other Appliances": "Smart appliances and equipment selected for low energy consumption, often integrated with building automation systems."
  };

  const openModal = (feature) => {
    setModalContent({ title: feature, description: explanations[feature] });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      const modal = document.querySelector('.modal-sheet');
      if (modal) {
        modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [isModalOpen]);

  return (
    <div className={`app-container${isModalOpen ? ' modal-open' : ''}`}>
      <section className="hero-sectionbuild">
        <div className="herobuild-container">
          <div className="herobuild-text">
            <h2 className="herobuild-title"><br/>
              The Future of Buildings
              <span className="hero-title-gradient">&nbsp;Starts Here!</span>
            </h2>
            <p className="herobuild-description">
              Transforming passive energy consumers into active contributors through innovative 
              sustainable design strategies and smart building technologies.
            </p>
          </div>

          <div className="transformation-grid">
            <div className="transformation-card">
              <div className="card-icon">
                <Building2 />
              </div>
              <h3 className="card-title">FROM</h3>
              <div className="passive-badge">PASSIVE CONSUMERS</div>
              <p className="card-description">
                Buildings today are passive energy consumers - taking in power with no built-in 
                mechanisms to conserve or optimize.
              </p>
            </div>

            <div className="arrow-container">
              <div className="arrow-icon">
                <ArrowRight />
              </div>
            </div>

            <div className="transformation-card">
              <div className="card-icon green">
                <Leaf />
              </div>
              <h3 className="card-title">TO</h3>
              <div className="active-badge">ACTIVE CONTRIBUTORS</div>
              <p className="card-description">
                We transform buildings into optimized systems that save energy, reduce emissions, and support a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="design-section">
        <div className="design-container">
          <div className="design-header">
            <h2 className="design-title">Sustainable Design Strategies</h2>
            <p className="design-description">
              We incorporate both Passive and Active design strategies in new buildings.
            </p>
          </div>

          <div className="strategies-grid">
            <div className="strategy-card passive-card">
              <div className="strategy-badge passive-badge-header">PASSIVE DESIGN STRATEGIES</div>
              <div className="strategy-stats">
                <p>Can reduce energy use by up to <span className="highlight">25%</span></p>
              </div>

              <div className="features-grid">
                <div className="feature-list">
                  <div className="feature-item" onClick={() => openModal("Form and Orientation")}> <Sun style={{ color: '#f97316' }} /> <span>Form and Orientation</span> </div>
                  <div className="feature-item" onClick={() => openModal("Shading")}> <Building2 style={{ color: '#3b82f6' }} /> <span>Shading</span> </div>
                  <div className="feature-item" onClick={() => openModal("Cool Roofs")}> <Thermometer style={{ color: '#ef4444' }} /> <span>Cool Roofs</span> </div>
                  <div className="feature-item" onClick={() => openModal("Fenestrations")}> <Monitor style={{ color: '#6b7280' }} /> <span>Fenestrations</span> </div>
                </div>
                <div className="feature-list">
                  <div className="feature-item" onClick={() => openModal("Insulation")}> <Building2 style={{ color: '#8b5cf6' }} /> <span>Insulation</span> </div>
                  <div className="feature-item" onClick={() => openModal("Daylighting")}> <Lightbulb style={{ color: '#eab308' }} /> <span>Daylighting</span> </div>
                  <div className="feature-item" onClick={() => openModal("Natural Ventilation")}> <Wind style={{ color: '#06b6d4' }} /> <span>Natural Ventilation</span> </div>
                  <div className="feature-item" onClick={() => openModal("Thermal Mass")}> <Thermometer style={{ color: '#f97316' }} /> <span>Thermal Mass</span> </div>
                </div>
              </div>
            </div>

            <div className="strategy-card active-card">
              <div className="strategy-badge active-badge-header">ACTIVE DESIGN STRATEGIES</div>
              <div className="strategy-stats">
                <p>Can improve efficiency by up to <span className="highlight">30%</span></p>
              </div>
              <div className="active-systems">
                <div className="system-item" onClick={() => openModal("HVAC")} > <div className="system-icon hvac-icon"> <Wind /> </div><h4 className="system-title">HVAC</h4></div>
                <div className="system-item" onClick={() => openModal("Lighting")} > <div className="system-icon lighting-icon"> <Lightbulb /> </div><h4 className="system-title">LIGHTING</h4></div>
              </div>
              <div className="other-appliances">
                <div className="appliances-container">
                  <div className="appliances-item" onClick={() => openModal("Other Appliances")}>
                    <div className="appliances-icon"> <Settings /> </div>
                    <span className="appliances-title">OTHER APPLIANCES</span>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="three-columns-section">
        <div className="image-text-block">
          <div className="image-side left" style={{ backgroundImage: `url(/images/form.jpg)` }}></div>
          <div className="text-side right">
            <h3>Form & Orientation</h3>
            <p>Optimizing building shape and window placement to reduce heat gain and improve lighting naturally.</p>
          </div>
        </div>

        <div className="image-text-block">
          <div className="text-side left">
            <h3>Natural Ventilation</h3>
            <p>Strategically placed openings and airflow paths cool buildings without relying on mechanical systems.</p>
          </div>
          <div className="image-side right" style={{ backgroundImage: `url(/images/ventilation.jpg)` }}></div>
        </div>

        <div className="image-text-block">
          <div className="image-side left" style={{ backgroundImage: `url(/images/hvac.jpg)` }}></div>
          <div className="text-side right">
            <h3>Smart HVAC Systems</h3>
            <p>Energy-efficient climate control systems that adapt to occupancy and environmental changes.</p>
          </div>
        </div>
      </section>


      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>Close</button>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Design;
