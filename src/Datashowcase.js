import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
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

  const [expandedIndex, setExpandedIndex] = useState(null);
  const imageRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expandedIndex !== null &&
        imageRefs.current[expandedIndex] &&
        !imageRefs.current[expandedIndex].contains(event.target)
      ) {
        setExpandedIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expandedIndex]);

  return (
    <div className="showcase-section" ref={containerRef}>
      {isMobile ? (
        // ✅ Swiper Carousel for Mobile
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="swiper-container"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/images/${image}`}
                alt={`Chart ${index + 1}`}
                className="carousel-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // ✅ Stacked Desktop Layout
        <div className="images-stack">
          {images.map((image, index) => {
            const isLastTwo = index >= images.length - 2;
            const isExpanded = expandedIndex === index;
            const yPos = index * 65;
            const xPos = 90 +index * 150;

            return (
              <motion.img
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                src={`/images/${image}`}
                alt={`Chart ${index + 1}`}
                className="chart-image"
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedIndex((prev) => (prev === index ? null : index));
                }}
                initial={{ opacity: 0, y: -30, x: -30 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: xPos,
                        y: isExpanded
                          ? isLastTwo
                            ? yPos - 80
                            : yPos - 30
                          : yPos,
                        scale: isExpanded ? 1.3 : 1,
                        zIndex: isExpanded ? 10 : 1,
                      }
                    : { opacity: 0, y: -30, x: -30 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                style={{ cursor: 'pointer', position: 'absolute' }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DataShowcase;
