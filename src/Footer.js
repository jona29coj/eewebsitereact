// components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css'; 

const Footer = () => {
  return (
    <footer className="elements-footer py-2">
      <Container>
        <div className="row">
          {/* Quick Links Column */}
          <div className="col-md-4 mb-4">
            <img 
              src="/logo-white.png" 
              alt="Elements Energy Logo" 
              height="40"
              className="mb-3"
              onError={(e) => {
                console.error('Failed to load logo:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#about" className="text-white text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#solutions" className="text-white text-decoration-none">Solutions</a></li>
              <li className="mb-2"><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="tel:+919916585292" className="text-white text-decoration-none">+91 99165 85292</a>
              </li>
              <li className="mb-2">
                <a href="mailto:info@elementsenergies.com" className="text-white text-decoration-none">info@elementsenergies.com</a>
              </li>
            </ul>
            <div className="mt-3">
              <h5>Address</h5>
              <p className="mb-0">
                IIT-Madras Research Park<br />
                Kanagam Road, Tharamani<br />
                Chennai, Tamil Nadu
              </p>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mt-3">
              <a href="https://in.linkedin.com/company/elements.energies" className="social-icon-link">
                <img 
                  src="./linkdin.png"
                  alt="LinkedIn" 
                  className="social-icon-img"
                  style={{ height: '24px', width: '24px' }}
                  onError={(e) => {
                    console.error('Failed to load LinkedIn icon:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </a>

              <a href="https://www.instagram.com/elements_energies" className="social-icon-link">
                <img 
                  src="./insta.png"
                  alt="Instagram"
                  className="social-icon-img"
                  style={{ height: '24px', width: '24px' }}
                  onError={(e) => {
                    console.error('Failed to load Instagram icon:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
