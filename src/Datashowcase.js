import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Datashowcase.css';

const images = [
  'dashboard1.png',
  'dashboard2.png',
  'dashboard6.png',
  'dashboard7.png',
  'dashboard8.png'
];

const DataShowcase = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, {
    margin: '-35% 0px -350% 0px',
    once: true,
  });

  return (
    <div className="showcase-section" ref={containerRef}>
      <div className="images-stack">
        {images.map((image, index) => {
          const isLastTwo = index >= images.length - 2;
          const yPos = index * 65;
          const xPos = index * 180;

          return (
            <motion.img
              key={index}
              src={`/images/${image}`}
              alt={`Chart ${index + 1}`}
              className="chart-image"
              initial={{ opacity: 0, y: -30, x: -30 }}
              animate={
                inView
                  ? { opacity: 1, y: yPos, x: xPos }
                  : { opacity: 0, y: -30, x: -30 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.8, 0.25, 1]
              }}
              whileHover={{
                scale: 1.3,
                y: isLastTwo ? yPos - 80 : yPos -30, // ⬆ expand up for last 2
                zIndex: 10
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DataShowcase;
