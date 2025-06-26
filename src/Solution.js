import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Solution.css'


const Solutions = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="solutions" className="solution">
      <Container>
        {/* Animate the "Our Focus" heading */}
        
          <h2 className="focus" style={{ textAlign: 'left' }}>Innovation In Action</h2>

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
                    <h3 className="text-center">Design </h3>
                    <p className="text-justify">
                      Gain real-time visibility into every aspect of your energy infrastructure.
                      Track usage, detect anomalies, and make data-driven decisions with precision dashboards and intelligent insights.
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
                    <p className="text-justify">
                      Take command of your energy systems with advanced automation and remote management.
                      Set thresholds, schedule operations, and respond instantly to changing demands.
                    </p>
                  </div>
                </div>
              
            </div>

            {/* Optimize Card */}
            <div className="col-md-4 mb-4">
              
                <div
                  className="card h-100 position-relative"
                  style={{ paddingTop: '25px' }}
                  onMouseEnter={() => setHovered('optimize')}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="circle-icon text-center">
                    
                    <img
                      className={`solution-icon ${hovered === 'optimize' ? 'is-gif' : 'is-image'}`}
                      src={hovered === 'optimize' ? '/optimize-hover.gif' : '/optimize.png'}
                      alt="Optimize Icon"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="text-center"><br />Operate</h3>
                    <p className="text-justify">
                      Continuously improve energy efficiency using AI-powered recommendations.
                      Reduce waste, lower costs, and enhance performance.<br />
                      <strong>All while meeting your sustainability goals</strong>
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