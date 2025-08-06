import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Solution.css';

const Solutions = () => {
  const [hovered, setHovered] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setExpandedCard(prev => (prev === cardName ? null : cardName));
  };

  const cardData = [
    {
      name: 'design',
      title: 'Design',
      hoverImg: '/monitor-hover.gif',
      defaultImg: '/monitor.png',
      shortDesc: (
        <>
          <p><strong>Sustainability begins with smart architecture and smarter data.</strong></p>
          <p style={{ textAlign: 'justify' }}>
            We design infrastructure that is climate-conscious from the ground up & retrofit
            existing buildings to become future-ready.
          </p>
        </>
      ),
      expanded: (
        <>
          <p><strong>We offer:</strong></p>
          <ul>
            <li>Energy audits & diagnostics</li>
            <li>Passive design & daylighting strategy</li>
            <li>System-level blueprinting</li>
            <li>ESG & net-zero readiness assessments</li>
            <li>Hardware planning for seamless integration</li>
          </ul>
          <p style={{ fontWeight: '500' }}>
            This is where deep design meets digital foresight.
          </p>
        </>
      ),
    },
    {
      name: 'build',
      title: 'Build',
      hoverImg: '/settings-hover.gif',
      defaultImg: '/settings.png',
      shortDesc: (
        <>
          <p><strong>Bringing clean tech and intelligent systems to life.</strong></p>
          <p style={{ textAlign: 'justify' }}>
            We install smart energy systems and scalable storage 
            to build resilient infrastructure and retrofit facilities for a sustainable future.
          </p>
        </>
      ),
      expanded: (
        <>
          <p><strong>We implement:</strong></p>
          <ul>
            <li>Smart meters, sensors & Modbus integration</li>
            <li>Battery & thermal energy storage systems</li>
            <li>Solar PV and hybrid power integration</li>
            <li>HVAC and lighting automation</li>
            <li>BMS (Building Management Systems)</li>
          </ul>
          <p style={{ fontWeight: '500' }}>
            All deployed with robust control, remote access, and interoperability in mind.
          </p>
        </>
      ),
    },
    {
      name: 'operate',
      title: 'Operate',
      hoverImg: '/optimize-hover.gif',
      defaultImg: '/Optimize.png',
      shortDesc: (
        <>
          <p><strong>Real-time visibility, continuous optimization, long-term impact.</strong></p>
          <p style={{ textAlign: 'justify' }}>
           We enable intelligent operations with 24x7 monitoring, using AI to optimize 
           resources, cut costs, and drive ESG impact.
          </p>
        </>
      ),
      expanded: (
        <>
          <p><strong>Our platform delivers:</strong></p>
          <ul>
            <li>Real-time dashboards for energy, air & water</li>
            <li>Predictive analytics & automated recommendations</li>
            <li>Alert systems for anomalies & peak loads</li>
            <li>ESG + SDG tracking & sustainability reports</li>
            <li>Bill analysis, carbon footprint mapping, and cost savings</li>
          </ul>
          <p style={{ fontWeight: '500' }}>
            It’s not just smart — it’s self-improving.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="solutions" className="solution">
      <Container>
        <h2 className="focus" style={{ textAlign: 'left' }}>Innovation In Action</h2>
        <h2 className="subtext" style={{ textAlign: 'left' }}>We Design. Build. Operate.</h2>
        <p>We help institutions, campuses, and industries slash their energy bills and carbon footprint through a seamless process:</p>

        <div className="row mt-5">
          {cardData.map(card => (
            <div className="col-md-4 mb-4" key={card.name}>
              <div
                className="card position-relative"
                style={{ paddingTop: '50px', cursor: 'pointer' }}
                onMouseEnter={() => setHovered(card.name)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleCardClick(card.name)}
              >
                <div className="circle-icon text-center">
                  <img
                    className={`solution-icon ${hovered === card.name ? 'is-gif' : 'is-image'}`}
                    src={hovered === card.name ? card.hoverImg : card.defaultImg}
                    alt={`${card.title} Icon`}
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-center">{card.title}</h3>
                  {card.shortDesc}

                  {/* Hint message */}
                  {expandedCard !== card.name && (
                    <p style={{
                      fontStyle: 'italic',
                      fontSize: '0.85rem',
                      color: '#555',
                      marginTop: '0.5rem'
                    }}>
                      Click to view more...
                    </p>
                  )}

                  {expandedCard === card.name && card.expanded}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Solutions;
