import React from 'react';
import './features.css'; // adjust to your actual image path

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-text-bg"></div> {/* This is the light box */}
        <div className="features-text">
          <h2>Features</h2><br/><br/><br/><br/>
          <h3>Comprehensive Energy Monitoring</h3><br/><br/>
          <p>
           Comprehensive Energy Monitoring enables detailed tracking and analysis of energy consumption across building floors and equipment, helping identify inefficiencies, optimize usage patterns, and reduce operational costs through informed planning and peak demand management.
          </p>
          <ul>
            <li>Track building energy consumption at floor and space levels</li>
            <li>Monitor equipment load to detect inefficiencies</li>
            <li>Identify min/max energy consumption patterns for better planning</li>
            <li>Peer Comparison</li>
            <li>Perform peak demand analysis to avoid cost spikes</li>
    
          </ul>
        </div>

        <div className="features-image-wrapper">
        <br/><br/><br/>
          <img src="/dashboard.png" alt="Dashboard" />
        </div>
      </div>

      <br/><br/><br/>
      {/* 1st */}

      <div className="features-container1">
        <div className="features-image-wrapper1">
        
          <img src="/dashboard.png" alt="Dashboard" />
        </div>

        <div className="features-text-bg1"></div> {/* This is the light box */}
        <div className="features-text1">
          <h3>Real-Time Data & Alerts</h3><br/><br/>
          <p>
           Real-Time Data & Alerts provides instant updates on energy systems, enabling continuous monitoring of generator usage, IoT device health, 
           and consumption trends, while delivering timely notifications to support proactive and informed decision-making.
          </p>
          <ul>
            <li>Get instant updates on diesel generator utilization and power backup status</li>
            <li>Analyze trends in energy consumption over time</li>
            <li>Monitor IoT fleet health & status for seamless operations</li>
            <li>Receive alerts & notifications for proactive decision-making</li>
          </ul>
        </div>

        
      </div>
      <br/><br/><br/>
      {/* 2nd*/}

      <div className="features-container2">
        <div className="features-text-bg2"></div> {/* This is the light box */}
        <div className="features-text2">
          <h3>Smart Energy Control & Automation</h3><br/><br/>
          <p>
           Smart Energy Control & Automation leverages advanced technologies like AI and IoT to intelligently manage energy systems, 
           including automated HVAC and lighting, time-based scheduling for energy storage
          </p>
          <ul>
            <li>Time scheduling and energy storage control (UPS, Batteries, Thermal)</li>
            <li>Automated HVAC & Lighting systems for optimized building performance</li>
            <li>AI-driven renewable energy management for smarter sustainability</li>
            <li>Mobile App for Android & iOS to access and control energy data on the go</li>    
          </ul>
        </div>

        <div className="features-image-wrapper2">
        <br/><br/><br/>
          <img src="/dashboard.png" alt="Dashboard" />
        </div>
      </div>

      <br/><br/><br/>
      {/* 3rd*/}

      <div className="features-container3">
        <div className="features-image-wrapper3">
        
          <img src="/dashboard.png" alt="Dashboard" />
        </div>

        <div className="features-text-bg3"></div> {/* This is the light box */}
        <div className="features-text3">
          <h3>Renewable Energy Integration</h3><br/><br/>
          <p>
           Renewable Energy Integration focuses on maximizing the use of clean energy by optimizing solar and wind power sources, 
           monitoring rooftop generation, and integrating with offsite systems for greater efficiency.
          </p>
          <ul>
            <li>Optimize solar and wind energy sources</li>
            <li>Monitor rooftop solar energy generation and usage</li>
            <li>Integrate with offsite solar & wind systems for extended efficiency</li>
            <li>Track battery storage performance to ensure maximum renewable energy utilization</li>
          </ul>
        </div>

        
      </div>
    </section> 

    
  );
};

export default Features;
