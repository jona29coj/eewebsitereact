import React, { useRef, useEffect, useState } from 'react';
import './VideoParallax.css'; // Make sure this CSS file is in the same directory


const VideoParallaxSection = () => {
    const sectionRef = useRef(null);
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.bottom / (rect.height + viewportHeight))));
                setScrollOffset(scrollProgress * 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const desktopFrameTransformY = -scrollOffset * 0.3;

    return (
        <section className="video-parallax-section" ref={sectionRef}>
            {/* This overlay acts as a subtle tint over the section's background. */}
            <div className="section-background-overlay"> </div>

            {/* --- NEW: Text "Behind the elements" positioned in the background --- */}
            <div className="background-text" >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behind the elements
            </div>
            
            
            <div className="desktop-frame" style={{ transform: `translateY(${desktopFrameTransformY}px)` }}>
               
                <div className="desktop-screen">
                    
                    <div className="desktop-screen-content">
                        
                        <video 
                            src="/sample1.mp4" 
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="screen-video"
                        >
                        your browser doesnt support this video tag
                        </video>
                        
                    
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default VideoParallaxSection;