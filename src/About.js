import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" className="py-5 bg-light" style={{ backgroundColor: '#fff' }}>
      <Container>
        <div className="row align-items-center justify-content-center">

          {/* Right: Text */}
          <div className="col-md-6 text-md-start text-center">
            <h2
              className="mb-4 title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Designing Energy,
              <br /> Driving Change
            </h2>

            <div className="about-text" data-aos="fade-up" data-aos-delay="750">
              <p className="lead">
                At <strong>Elements Energy</strong>, we believe that a sustainable tomorrow starts with smart
                innovation today, and we are dedicated to driving that transformation forward.
              </p>
              <p>
                Backed by the IIT Madras Incubation Cell, we are pushing the boundaries of clean energy
                advancements. Our mission is to make clean energy more accessible and efficient by empowering
                businesses to transition toward low-carbon operations seamlessly.
              </p>
            </div>

            <p className="mt-3 last" data-aos="fade-up" data-aos-delay="600">
              Join us in driving the shift to a cleaner, greener future — powered by tech, guided by purpose.
            </p>

            <a
              href="#about"
              className="btna btn-primary mt-3 small-width-btn"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Learn More
            </a>
          </div>

          {/* Left: Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0 responsive-img-wrapper">
            <img
              src="/introimage.png"
              alt="Elements Energy Logo"
              data-aos="zoom-in"
              data-aos-duration="800"
             style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
             className="img-fluid"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;
