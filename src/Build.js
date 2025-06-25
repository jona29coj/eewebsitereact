import React from 'react';
import { Leaf, Zap, Wind, Battery, Sun, Thermometer, Lightbulb, TreePine, Cpu, Building } from 'lucide-react';
import './Build.css';

function Build() {
  
  return (
    <div className="app">
      {/* Hero Section - Full Screen */}
      <section className="hero-modern">
        <div className="hero-bg-overlay"></div>
        <div className="hero-content-modern">
          
          <h1 className="hero-title-modern">
            Eco-friendly materials,<br />
            <span className="gradient-text">green cooling,</span><br />
            sustainable future.
          </h1>
          <p className="hero-description">
            Elements Energy is enhancing sustainability by proposing eco-friendly materials and 
            integrating advanced green cooling systems, optimizing energy efficiency and minimizing 
            environmental impact throughout the building's lifecycle.
          </p>
        </div>
        
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">85%</div>
            <div className="stat-label">Energy Reduction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">Green Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Sustainable Materials</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Smart Monitoring</div>
          </div>
        </div>
      </section>

      {/* Thesis Section - Asymmetric Layout */}
      <section id="thesis" className="thesis-modern">
        <div className="thesis-container">
          <div className="section-header">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title-modern">Sustainable Swap</h2>
          </div>

          <div className="thesis-layout">
            {/* Main Thesis Card */}
            <div className="thesis-main-card">
              <div className="thesis-image">
                <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sustainable Construction" />
                <div className="thesis-overlay">
                  <Building className="thesis-main-icon" />
                </div>
              </div>
              <div className="thesis-main-content">
                <h3>Proposing Alternate Sustainable Materials</h3>
                <p>Focus on reducing environmental impact and carbon footprint. Improving energy efficiency and promoting a greener building lifecycle.</p>
                <div className="thesis-features">
                  <span>Carbon Neutral</span>
                  <span>Recyclable</span>
                  <span>Energy Efficient</span>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="thesis-side-cards">
              <div className="thesis-side-card">
                <div className="thesis-side-icon">
                  <Thermometer />
                </div>
                <h4>Green Cooling Systems</h4>
                <p>Introduction of the Rainforest Cooling Tower, utilizing a vertical garden concept to enhance cooling efficiency.</p>
              </div>

              <div className="thesis-side-card energy-systems">
                <div className="thesis-side-icon">
                  <Zap />
                </div>
                <h4>Energy Systems</h4>
                <div className="energy-grid">
                  <div className="energy-item">
                    <Sun size={16} />
                    <span>Solar Energy</span>
                  </div>
                  <div className="energy-item">
                    <Wind size={16} />
                    <span>Wind Power</span>
                  </div>
                  <div className="energy-item">
                    <Battery size={16} />
                    <span>Energy Storage</span>
                  </div>
                  <div className="energy-item">
                    <Lightbulb size={16} />
                    <span>Smart Lighting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section id="features" className="features-modern">
        <div className="features-container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title-modern">Our Features</h2>
          </div>

          <div className="bento-grid">
            <div className="bento-item large">
              <div className="bento-content">
                <div className="bento-icon">
                  <Leaf />
                </div>
                <h3>Eco-friendly Materials</h3>
                <p>We prioritize the use of sustainable, non-toxic, and recyclable materials in our projects. By selecting products that have a lower impact on natural resources, we contribute to a healthier planet and create safer environments.</p>
              </div>
              <div className="bento-image">
                <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Eco Materials" />
              </div>
            </div>

            <div className="bento-item">
              <div className="bento-visual">
                <img src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Smart Tech" />
                <div className="bento-overlay">
                  <Cpu className="bento-overlay-icon" />
                </div>
              </div>
              <div className="bento-content">
                <h3>Smart Integration</h3>
                <p>We integrate advanced technologies, sensors, smart grids, and automation systems into our buildings. These technologies enable real-time monitoring and management of energy use.</p>
              </div>
            </div>

            <div className="bento-item">
              <div className="bento-visual green-space">
                <img src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Green Spaces" />
                <div className="bento-overlay">
                  <TreePine className="bento-overlay-icon" />
                </div>
              </div>
              <div className="bento-content">
                <h3>Green Spaces</h3>
                <p>We believe in the importance of incorporating natural elements into our building designs. Green spaces enhance aesthetic appeal and improve air quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      

    </div>
  );
}

export default Build;