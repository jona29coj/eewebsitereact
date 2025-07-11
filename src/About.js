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
                <p className="lead" style={{ fontSize: '0.9em' }}>
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
                className="btn-primary mt-3 small-width-btn text-decoration-none"
                style={{
                  borderRadius: '6px',
                  width: 'fit-content',
                  height: '40px',
                  cursor: 'pointer'
                }}
              >
                Request a Demo
              </button>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-center mb-4 mb-md-0 responsive-img-wrapper">
              <img
                src="/introimage.png"
                alt="Elements Energy Logo"
                style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
                className="img-fluid"
              />
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
              action="https://formspree.io/f/xzzgwqrr"
              method="POST"
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
