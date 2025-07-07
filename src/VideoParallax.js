import React from 'react';
import './VideoParallax.css';

const VideoParallaxSection = () => {
  return (
    <section className="video-parallax-section">
      <div className="section-background-overlay"></div>

      <div className="text-content  px-4">
        <h2 className="main-heading">Behind the Scenes: The Tech That Powers Sustainability</h2>
        <p className="subtitle text-black " >We combine human-centered design with machine intelligence.</p>
      </div>

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