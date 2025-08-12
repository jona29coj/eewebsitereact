import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      <section
        id="about"
        className="section-large-padding bg-light"
        style={{ backgroundColor: '#fff' }}
      >
        <Container>
          <div className="row align-items-center justify-content-center">

            {/* Text Section */}
            <div className="col-md-6 text-md-start text-center">
              <h2 className="mb-4 title">
                Elements Energy: The Sustainability OS, for Future-ready Buildings
              </h2>

              <div className="about-text">
                <p  style={{ fontSize: '0.9em' }}>
                  At <strong>Elements Energy</strong>, we are reimagining sustainability from the ground up. Not
                  just energy — but air, water, carbon, and everything in between. We are a
                  full-stack sustainability platform that helps organizations design smarter spaces,
                  operate greener systems, and meet their climate goals — without the complexity.
                </p>
                <p style={{ fontSize: '0.9rem' }}>
                  As a climate-tech startup incubated at IIT Madras, our solutions are rooted in
                  deep tech and real-world performance. Much of our platform has been developed
                  and tested within the IIT Madras Research Park, India’s leading innovation
                  ecosystem for clean energy.
                </p>
                <p style={{ fontSize: '0.9rem' }}>
                  Our platform brings together intelligent design, real-time monitoring, AI-powered
                  optimization, and ESG compliance into one seamless ecosystem. Whether you're
                  retrofitting a building or managing a multi-campus operation, we make
                  sustainability measurable, manageable, and meaningful.
                </p>
              </div>

              <p className="mt-3 last" style={{ fontSize: '0.9rem' }}>
                Join us in shaping infrastructure that works better — for business, for people, and
                for the Earth.
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="btn btn-primary mt-3 small-width-btn text-decoration-none"
                style={{
                  borderRadius: '3px',
                  width: 'fit-content',
                  height: '40px',
                  cursor: 'pointer',
                  
                }}
              >
                Request a Demo
              </button>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-center mb-4 mb-md-0 responsive-img-wrapper">
              <div className="bubble-container">
                <picture>
                  <source media="(max-width: 768px)" srcSet="/buildingimg.png" />
                  <img
                    src="pic2.png"
                    alt="Smart Buildings"
                    className="img-fluid hover-bubble-map"
                    style={{ width: '100%', maxWidth: '400px', zIndex: 1 }}
                  />
                </picture>


                
                <div className="bubble">
                  <div className="bubble-content">
                    <h7><strong>Rooftop Solar</strong></h7>
                    <p>Utilise our terrace and open spaces to generate renewables within the facility.</p>
                  </div>
                </div>
                <div className="bubble1">
                  <div className="bubble-content1">
                    <h7><strong>Thermal Storage</strong></h7>
                    <p>Using excess renewable energy to chill our water tank to use it for circulating cold air during peak tariff hours and power cuts.</p>
                  </div>
                </div>
                <div className="bubble2">
                  <div className="bubble-content2">
                    <h7><strong>UPS Battery</strong></h7>
                    <p>Fast discharge batteries which are used during power cuts.</p>
                  </div>
                </div>
                <div className="bubble3">
                  <div className="bubble-content3">
                    <h7><strong>LTO Battery</strong></h7>
                    <p>Fast discharge batteries which are used for peak demand saving.</p>
                  </div>
                </div>
                <div className="bubble4">
                  <div className="bubble-content4">
                    <h7><strong>IOE Battery</strong></h7>
                    <p>Slow discharge batteries which are used during peak tariff hours to save costs.</p>
                  </div>
                </div>
                <div className="bubble5">
                  <div className="bubble-content5">
                    <h7><strong>Wheeled-in Renewables</strong></h7>
                    <p>Wheel in solar and wind energy to power our buildings with the help of open access to renewble plants.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Modal Pop-Up with Blur */}
      {showForm && (
        <div className="form-overlay" onClick={() => setShowForm(false)}>
          <div className="form-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowForm(false)}>
              &times;
            </button>
            <h4 className="text-center">Request a Demo</h4>
            <form
              className="cta-form"
              action="https://formsubmit.co/harshetha.venkatesan@gmail.com" method="POST"
            >
              <input type="hidden" name="_subject" value="New Demo Request from Website" />

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input name="name" id="name" type="text" required />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input name="company" id="company" type="text" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" required></textarea>
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

    </>
  );
};

export default About;
