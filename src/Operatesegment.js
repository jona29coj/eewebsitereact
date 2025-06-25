import React from 'react';
import './Operatesegment.css';

function Operatesegment() {
  const renderCards = (section) => {
    switch (section) {
      case 'getData':
        return (
          <div className="cards-container">
            <div className="Opcard">
              <div className="card-header">
                <img src="/real-time.png" alt="Analysis" className="card-icon" />
                <h4>Realtime Energy Monitoring</h4>
              </div>
              <p className="card-description">
                Elements Energy's platform provides live, granular visibility into your building's energy ecosystem.
              </p>
            </div>
            <div className="Opcard">
              <div className="card-header">
                <img src="/data-visualization.png" alt="Data" className="card-icon" />
                <h4>Data Visualization</h4>
              </div>
              <p className="card-description">
                Transforms raw data into actionable insights through dynamic dashboards and automated reporting.
              </p>
            </div>
            <div className="Opcard">
              <div className="card-header">
                <img src="/bell.png" alt="Alert" className="card-icon" />
                <h4>Alerts & Notifications</h4>
              </div>
              <p className="card-description">
                AI-driven alerts notify you instantly of critical events via SMS, email, or mobile.
              </p>
            </div>
          </div>
        );
      case 'getInsights':
        return (
          <div className="cards-container">
            <div className="Opcard">
              <div className="card-header">
                <img src="/demand.png" alt="Demand" className="card-icon" />
                <h4>Demand Response</h4>
              </div>
              <p className="card-description">
                Automatically reduces non-essential power use during peak grid demand.
              </p>
            </div>
            <div className="Opcard">
              <div className="card-header">
                <img src="/balancing.png" alt="Load" className="card-icon" />
                <h4>Load Balancing</h4>
              </div>
              <p className="card-description">
                Intelligently distributes electricity across equipment to prevent overloads.
              </p>
            </div>
            <div className="Opcard">
              <div className="card-header">
                <img src="/peak.png" alt="Peak" className="card-icon" />
                <h4>Peak Shaving</h4>
              </div>
              <p className="card-description">
                Manages energy use before peak rate periods using battery storage.
              </p>
            </div>
          </div>
        );
      case 'getActions':
        return (
          <div className="cards-container">
            <div className="Opcard">
              <div className="card-header">
                <img src="/efficiency.png" alt="Efficiency" className="card-icon" />
                <h4>Enhance Energy Efficiency</h4>
              </div>
              <p className="card-description">
                Smart algorithms optimize HVAC and lighting to cut waste.
              </p>
            </div>
            <div className="Opcard">
              <div className="card-header">
                <img src="/building.png" alt="Building" className="card-icon" />
                <h4>Responsive Buildings</h4>
              </div>
              <p className="card-description">
                Sensors auto-adjust lighting and temperature based on occupancy.
              </p>
            </div>
            <div className="Opcard">
              <div className="card-header">
                <img src="/eco-battery.png" alt="Renewable" className="card-icon" />
                <h4>Renewable Energy Utilization</h4>
              </div>
              <p className="card-description">
                Smartly routes clean energy where and when it's needed most.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="section section-blue">
        <div className="section-header">
          <img src="/dashboard.png" alt="Monitor" className="section-icon" />
          <h1 className="section-title">Monitor</h1>
        </div>
        <p className="section-description">Real-time tracking of all energy systems and circuits.</p>
        {renderCards('getData')}
      </div>

      <div className="section section-pink">
        <div className="section-header">
          <img src="/control2.png" alt="Control" className="section-icon" />
          <h1 className="section-title">Control</h1>
        </div>
        <p className="section-description">Automated adjustments to equipment reduce energy waste.</p>
        {renderCards('getInsights')}
      </div>

      <div className="section section-teal">
        <div className="section-header">
          <img src="/operation.png" alt="Optimize" className="section-icon" />
          <h1 className="section-title">Optimize</h1>
        </div>
        <p className="section-description">Continuous efficiency improvements cut costs over time.</p>
        {renderCards('getActions')}
      </div>
    </div>
  );
}

export default Operatesegment;
