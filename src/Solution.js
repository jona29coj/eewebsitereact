import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Solution.css'


const Solutions = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="solutions" className="solution" >
      <Container>
        {/* Animate the "Our Focus" heading */}
        
          <h2 className="focus" style={{ textAlign: 'left' }}>Innovation In Action</h2>
          <h2 className="subtext" style={{ textAlign: 'left' }}>We Design. Build. Operate.</h2>
          <p>We help institutions, campuses, and industries slash their energy bills and carbon footprint through a seamless process:</p>

        {/* Wrap the entire row with Slide and use cascade for staggered animation */}
        
          <div className="row" style={{marginTop:'60px'}}>

            {/* Monitor Card */}
            <div className="col-md-4 mb-4">
              
                <div
                  className="card h-100 position-relative"
                  style={{ paddingTop: '50px',}}
                  onMouseEnter={() => setHovered('monitor')}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="circle-icon text-center">
                    <img
                      className={`solution-icon ${hovered === 'monitor' ? 'is-gif' : 'is-image'}`}
                      src={hovered === 'monitor' ? '/monitor-hover.gif' : '/monitor.png'}
                      alt="Monitor Icon"
                    />

                  </div>
                  <div className="card-body">
                    <h3 className="text-center">Design</h3>

                    <p><strong>Sustainability begins with smart architecture and smarter data.</strong></p>

                    <p>
                      We design infrastructure that is climate-conscious from the ground up — or retrofit existing buildings to become future-ready.
                      Our design phase integrates passive design strategies, sensor layouts, and system mapping to ensure maximum efficiency and minimal waste.
                    </p>

                    <p><strong>We offer:</strong></p>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                      <li>Energy audits & diagnostics</li>
                      <li>Passive design & daylighting strategy</li>
                      <li>System-level blueprinting</li>
                      <li>ESG & net-zero readiness assessments</li>
                      <li>Hardware planning for seamless integration</li>
                    </ul>

                    <p style={{ fontWeight: '500' }}>
                      This is where deep design meets digital foresight.
                    </p>

                  </div>
                </div>
              
            </div>

            {/* Control Card */}
            <div className="col-md-4 mb-4">
              
                <div
                  className="card h-100 position-relative"
                  style={{ paddingTop: '50px' }}
                  onMouseEnter={() => setHovered('control')}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="circle-icon text-center">
                    <img
                      className={`solution-icon ${hovered === 'control' ? 'is-gif'  : 'is-image'}`}
                      src={hovered === 'control' ? '/settings-hover.gif' : '/settings.png'}
                      alt="Control Icon"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="text-center">Build</h3>

                      <p><strong>Bringing clean tech and intelligent systems to life.</strong></p>

                      <p>
                        In this phase, we install the brains and backbone of your sustainability stack.
                        Whether it's energy meters, IoT sensors, solar panels, battery systems, or thermal storage 
                        we deploy integrated solutions that are scalable and built to last.
                      </p>

                      <p><strong>We implement:</strong></p>
                      <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>Smart meters, sensors & Modbus integration</li>
                        <li>Battery & thermal energy storage systems</li>
                        <li>Solar PV and hybrid power integration</li>
                        <li>HVAC and lighting automation</li>
                        <li>BMS (Building Management Systems)</li>
                      </ul>

                      <p style={{fontWeight: '500' }}>
                        All deployed with robust control, remote access, and interoperability in mind.
                      </p>

                  </div>
                </div>
              
            </div>

            {/* Optimize Card */}
            <div className="col-md-4 mb-4">
              
                <div
                  className="card h-100 position-relative"
                  style={{ paddingTop: '50px' }}
                  onMouseEnter={() => setHovered('optimize')}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="circle-icon text-center">
                    
                    <img
                      className={`solution-icon ${hovered === 'optimize' ? 'is-gif' : 'is-image'}`}
                      src={hovered === 'optimize' ? '/optimize-hover.gif' : '/Optimize.png'}
                      alt="Optimize Icon"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="text-center">Operate</h3>

                      <p><strong>Real-time visibility, continuous optimization, long-term impact.</strong></p>

                      <p>
                        Once your system is online, our platform kicks in to monitor, learn, and improve — 24x7.
                        Using AI-powered analytics and predictive intelligence, we help you track your energy, water, and air use,
                        optimize performance, reduce costs, and meet ESG goals.
                      </p>

                      <p><strong>Our platform delivers:</strong></p>
                      <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>Real-time dashboards for energy, air & water</li>
                        <li>Predictive analytics & automated recommendations</li>
                        <li>Alert systems for anomalies & peak loads</li>
                        <li>ESG + SDG tracking & sustainability reports</li>
                        <li>Bill analysis, carbon footprint mapping, and cost savings</li>
                      </ul>

                      <p style={{ fontWeight: '500' }}>
                        It’s not just smart — it’s self-improving.
                      </p>

                  </div>
                </div>
              
            </div>

          </div>
        
      </Container>
    </section>
  );
};

export default Solutions;
