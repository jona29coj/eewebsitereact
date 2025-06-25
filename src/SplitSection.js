import React from 'react';
import './SplitSection.css';

function SplitSection() {
  return (
    <div className="split-section">
      <div className="content-half">
        <h1>How It Works</h1>
        <p>
          Get a sense of how the magic happens at Elements Energy through 
          our short, one minute explainer video.
        </p>
        <button className="info-button">
          See detailed information
        </button>
      </div>
      
      <div className="video-half">
        <div className="video-container">
          {/* Replace with your actual video embed */}
          <div className="video-placeholder">
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitSection;