import React from 'react';
import './VideoParallax.css';

const VideoParallaxSection = () => {
  return (
    <section className="video-parallax-section">
      <div className="section-background-overlay"></div>

      {/* ✅ NEW Proper Text Container */}
      <div className="text-content text-white px-4">
        <h2 className="main-heading">Behind the Scenes: The Tech That Powers Sustainability</h2>
        <p className="subtitle" >We combine human-centered design with machine intelligence.</p>

      <div className="bullet-points">
          <p><strong>Here’s our formula:</strong></p>
          <ul>
            <li><strong>We assess:</strong> Our team conducts an on-site Level 1 audit — completely free — to uncover inefficiencies.</li>
            <li><strong>We digitize:</strong> We install LUCY (our in-house IoT edge device), sensors, and meters to get real-time data on your energy, water, and air.</li>
            <li><strong>We analyze:</strong> Our EMS platform uses AI to find patterns, waste, and savings.</li>
            <li><strong>We optimize:</strong> With smart controls and predictive algorithms, we reduce consumption and maximize renewable usage.</li>
            <li><strong>We report:</strong> ESG dashboards, bill insights, and SDG impact — all visualized and exportable.</li>
          </ul>
        </div>
      </div>

      {/* ✅ Video in desktop frame below */}
      <div className="desktop-frame">
        <div className="desktop-screen">
          <div className="desktop-screen-content">
            <video
              src="/vid_1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="screen-video"
            >
              Your browser doesn't support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoParallaxSection;
