import React, { useEffect, useState } from 'react';
import {
  Monitor,
  Settings,
  TrendingUp,
  Zap,
  Activity,
  Shield,
  BarChart3,
  Bell,
  Gauge,
  Battery,
  Sun,
  Building2,
} from 'lucide-react';
import './Operate.css';
import DataShowcase from './Datashowcase';

function Operate() {
  const [activeSection, setActiveSection] = useState('how-it-works');
  const [navOffset, setNavOffset] = useState(80);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateOffset = () => {
      const nav = document.querySelector('.sticky-nav');
      if (nav) {
        setNavOffset(nav.offsetHeight);
      }
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollOffset = scrollY + navOffset + 50;

      const features = document.getElementById('features');
      const benefits = document.getElementById('benefits');

      if (features && scrollOffset >= features.offsetTop) {
        setActiveSection('features');
      } else if (benefits && scrollOffset >= benefits.offsetTop) {
        setActiveSection('benefits');
      } else {
        setActiveSection('how-it-works');
      }

      setScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navOffset]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset =
        element.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  return (
  <div className="operate-container">
    <nav className={`sticky-nav ${scrolled ? 'shrunk' : ''}`}>
      <div className="nav-container">
        <div className="nav-buttons">
          {[
            { id: 'how-it-works', label: 'How it works' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'features', label: 'Features' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ✅ Add static text on the right side */}
        <div className="nav-left-text">How it works</div>
      </div>
    </nav>

      

      {/* Keep your hero, benefits, and features sections as-is here */}
      <section id="how-it-works" className="heroop-section">
        <div className="container">
          <div className="heroop-content">
            <h1 className="heroop-title">
              Energy Management
              <span className="gradient-text"> System</span>
            </h1>
            <p className="heroop-description">
              State-of-the-art energy optimization that monitors, controls, and optimizes building energy usage 
              through real-time insights and intelligent automation.
            </p>
          </div>

          <div className="heroop-grid">
            {/* Left Content */}
            <div className="heroop-left">
              <div className="info-card">
                <h3 className="info-title">
                  Data-driven energy optimization
                </h3>
                <p className="info-description">
                  Through an end-to-end mapped system, we provide a real-time dashboard to visualize, 
                  quantify and showcase the complete energy scenario of your building.
                </p>
                <div className="info-link">
                  <TrendingUp className="link-icon" />
                  Get to know how Elements Energy operates
                </div>
              </div>
            </div>

            {/* Right Content - Steps */}
            <div className="heroop-right">
              <div className="steps-container">
                <div className="step-card monitor">
                  <div className="step-icon">
                    <Monitor />
                  </div>
                  <div className="step-content">
                    <div className="step-header">
                      <span className="step-number">01</span>
                      <h4 className="step-title">Monitor</h4>
                    </div>
                    <p className="step-description">Real-time tracking of all energy systems and circuits</p>
                  </div>
                </div>

                <div className="step-card control">
                  <div className="step-icon">
                    <Settings />
                  </div>
                  <div className="step-content">
                    <div className="step-header">
                      <span className="step-number">02</span>
                      <h4 className="step-title">Control</h4>
                    </div>
                    <p className="step-description">Automated adjustments to equipment reduce energy waste</p>
                  </div>
                </div>

                <div className="step-card optimize">
                  <div className="step-icon">
                    <TrendingUp />
                  </div>
                  <div className="step-content">
                    <div className="step-header">
                      <span className="step-number">03</span>
                      <h4 className="step-title">Optimize</h4>
                    </div>
                    <p className="step-description">Continuous efficiency improvements cut costs over time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DataShowcase/>

      <section id="benefits" className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Complete Energy Management Solution<br/></h2>
            <p className="section-description">
              <br/>Discover how our three-pillar approach that transforms your building's energy efficiency
            </p>
          </div>

          
          <div className="benefit-group">
            <div className="benefit-header">
              <div className="benefit-icon monitor-icon">
                <Monitor />
              </div>
              <h3 className="benefit-title">Monitor</h3>
              <p className="benefit-subtitle">Real-time tracking of all energy systems and circuits</p>
            </div>
            <div className="cards-grid">
              <div className="feature-card">
                <div className="card-icon monitor-bg">
                  <Activity />
                </div>
                <h4 className="card-title">Realtime Energy Monitoring</h4>
                <p className="card-description">Live, granular visibility into your building's energy ecosystem with instant updates.</p>
              </div>
              <div className="feature-card">
                <div className="card-icon monitor-bg">
                  <BarChart3 />
                </div>
                <h4 className="card-title">Data Visualization</h4>
                <p className="card-description">Transform raw data into actionable insights through dynamic dashboards and automated reporting.</p>
              </div>
              <div className="feature-card">
                <div className="card-icon monitor-bg">
                  <Bell />
                </div>
                <h4 className="card-title">Alerts & Notifications</h4>
                <p className="card-description">AI-driven alerts notify you instantly of critical events via SMS, email, or mobile.</p>
              </div>
            </div>
          </div>

          <div className="benefit-group">
            <div className="benefit-header">
              <div className="benefit-icon control-icon">
                <Settings />
              </div>
              <h3 className="benefit-title">Control</h3>
              <p className="benefit-subtitle">Automated adjustments to equipment reduce energy waste</p>
            </div>
            <div className="cards-grid">
              <div className="feature-card">
                <div className="card-icon control-bg">
                  <Zap />
                </div>
                <h4 className="card-title">Demand Response</h4>
                <p className="card-description">Automatically reduces non-essential power use during peak grid demand periods.</p>
              </div>
              <div className="feature-card">
                <div className="card-icon control-bg">
                  <Gauge />
                </div>
                <h4 className="card-title">Load Balancing</h4>
                <p className="card-description">Intelligently distributes electricity across equipment to prevent overloads and optimize efficiency.</p>
              </div>
              <div className="feature-card">
                <div className="card-icon control-bg">
                  <TrendingUp />
                </div>
                <h4 className="card-title">Peak Shaving</h4>
                <p className="card-description">Manages energy use before peak rate periods using intelligent battery storage systems.</p>
              </div>
            </div>
          </div>

          <div className="benefit-group">
            <div className="benefit-header">
              <div className="benefit-icon optimize-icon">
                <TrendingUp />
              </div>
              <h3 className="benefit-title">Optimize</h3>
              <p className="benefit-subtitle">Continuous efficiency improvements cut costs over time</p>
            </div>
            <div className="cards-grid">
              <div className="feature-card">
                <div className="card-icon optimize-bg">
                  <Shield />
                </div>
                <h4 className="card-title">Enhance Energy Efficiency</h4>
                <p className="card-description">Smart algorithms optimize HVAC and lighting systems to eliminate waste and reduce costs.</p>
              </div>
              <div className="feature-card">
                <div className="card-icon optimize-bg">
                  <Building2 />
                </div>
                <h4 className="card-title">Responsive Buildings</h4>
                <p className="card-description">Advanced sensors auto-adjust lighting and temperature based on real-time occupancy data.</p>
              </div>
              <div className="feature-card">
                <div className="card-icon optimize-bg">
                  <Sun />
                </div>
                <h4 className="card-title">Renewable Energy Utilization</h4>
                <p className="card-description">Intelligently routes clean energy where and when it's needed most for maximum efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title white">Advanced Features for Modern Buildings</h2>
            <p className="section-description light">
              <br/>Cutting-edge technology that puts you in complete control of your energy future
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Activity />
              </div>
              <h3 className="feature-title">Real-time Analytics</h3>
              <p className="feature-description">Live energy data and performance metrics</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Shield />
              </div>
              <h3 className="feature-title">Predictive Maintenance</h3>
              <p className="feature-description">AI-powered equipment health monitoring</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Battery />
              </div>
              <h3 className="feature-title">Energy Storage</h3>
              <p className="feature-description">Smart battery management and optimization</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Sun />
              </div>
              <h3 className="feature-title">Solar Integration</h3>
              <p className="feature-description">Seamless renewable energy integration</p>
            </div>
          </div>

          
        </div>
      </section>
      
    </div>
  );
}

export default Operate;
