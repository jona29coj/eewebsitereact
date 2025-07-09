
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
        <div
          className="form-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div
            className="form-popup"
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              width: '90%',
              maxWidth: '500px',
              position: 'relative'
            }}
          >
            <button
              className="close-button"
              onClick={() => setShowForm(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>

            <form
              action="https://formspree.io/f/xzzgwqrr"
              method="POST"
              className="cta-form"
              encType="multipart/form-data"
            >
              <input type="hidden" name="_subject" value="New Demo Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
              <input type="hidden" name="_template" value="table" />

              <div className="form-group mb-3">
                <label className="mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us what you're looking for..."
                  className="form-control"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-success w-100">
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
