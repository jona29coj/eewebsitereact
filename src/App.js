import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css';

import Partners from './Partner';
import Solutions from './Solution';
import About from './About';
import VideoParallaxSection from './VideoParallax';
import WhatDrivesUs from './WhatDriveUs';
import ImpactStats from './ImpactStats';
import Spotlight from './Spotlight';
import Operate from './Operate';
import Design from './Design';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Build from './Build';
import ProjectsContent from './Projects';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Login from './Login';
import CompanySection from './CompanySection';
import TeamSection from './TeamSection';
import CareerSection from './CareerSection';
function Typewriter({ texts, speed = 100, pause = 2000 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    let timeout;
    const currentText = texts[textIndex];

    if (!deleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
    } else if (!deleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, pause, speed, textIndex, texts]);

  const currentFullText = texts[textIndex];
  const visibleText = currentFullText.substring(0, charIndex);
  const paddedText = visibleText.padEnd(currentFullText.length, ' ');

  return (
    <div className='texttype'
      style={{
        display: 'flex',
        fontSize: '2rem',
        justifyContent: 'left',
        fontWeight: '600',
        fontFamily:'Poppins, sans-serif',
        color: '#fff',
        gap: '1rem',
        minWidth: '12ch',
      }}
    >
      <span style={{ whiteSpace: 'nowrap' }} className='empoweringtext'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empowering
      </span>
      <span className='Typingtext'
        style={{
          fontFamily:'Poppins, sans-serif',
          fontSize: '2rem',
          minWidth: '12ch',
          display: 'inline-block',
          whiteSpace: 'pre',
          textAlign: 'left',
        }}
      >
        {paddedText
          .split('')
          .map((char, idx) =>
            idx === charIndex ? (blink ? '|' : ' ') : char
          )
          .join('')}
      </span>
    </div>
  );
}

function App() {
  const [showAssessmentForm, setShowAssessmentForm] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [showAboutMega, setShowAboutMega] = useState(false);
  const [showMega, setShowMega] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncWithHash = () => {
      const hash = window.location.hash.replace('#', '');
      setActivePage(hash || 'home');
    };

    syncWithHash();
    window.addEventListener('hashchange', syncWithHash);
    return () => window.removeEventListener('hashchange', syncWithHash);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.megamenu')) {
        setShowMega(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <Navbar expand="lg" collapseOnSelect fixed="top" className={`py-3 ${scrolled ? 'scrolled' : ''}`}>
        <Container>
          <Navbar.Brand href="#home" onClick={() => setActivePage('home')} className="brand-logo">
            <img
              src={scrolled ? './logo-light.png' : './logo-dark.png'}
              alt=""
              className={scrolled ? "logo-dark" : "logo-light"}
              onError={(e) => {
                console.error('Failed to load logo:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
              <div className="nav-item dropdown megamenu position-relative">
                <span
                  className="nav-link-custom dropdown-toggle"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAboutMega((prev) => {
                      if (!prev) setShowMega(false); // Close Solutions if About is opening
                      return !prev;
                    });
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  About Us
                </span>
                {showAboutMega && (
                  <div
                    className="megamenu-content position-absolute p-3 bg-white shadow rounded"
                    style={{
                      top: '140%',
                      left: -200,
                      zIndex: 1000,
                      width: '600px',
                      padding: '2rem 2rem',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      display: 'flex',             // ✅ Make it a flex container
                      flexDirection: 'row',        // ✅ Arrange items in a row
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      gap: '3rem',   
                      fontSize: '0.95rem'               // ✅ Optional spacing
                    }}
                  >
                  
                    <div className="text-start">
                      <a href="#CompanySection" className="d-block fw-semibold text-dark text-decoration-none mb-1">Company</a>
                      <p className="text-muted mb-0">Smart building layouts and passive energy strategies.</p>
                    </div>
                    <div className="text-start">
                      <a href="#TeamSection" className="d-block fw-semibold text-dark text-decoration-none mb-1">Team</a>
                      <p className="text-muted mb-0">Efficient construction with integrated energy systems.</p>
                    </div>
                    <div className="text-start">
                      <a href="#CareerSection" className="d-block fw-semibold text-dark text-decoration-none mb-1">Career</a>
                      <p className="text-muted mb-0">Manage and monitor usage with intelligent analytics.</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="nav-item dropdown megamenu position-relative">
                <span
                  className="nav-link-custom dropdown-toggle"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMega((prev) => {
                      if (!prev) setShowAboutMega(false); // Close About if Solutions is opening
                      return !prev;
                    });
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  Solutions
                </span>
                {showMega && (
                  <div
                    className="megamenu-content position-absolute p-3 bg-white shadow rounded"
                    style={{
                      top: '140%',
                      left: -200,
                      zIndex: 1000,
                      width: '600px',
                      padding: '2rem 2rem',
                      fontFamily: 'Inter, sans-serif',
                      display: 'flex',             
                      flexDirection: 'row',        
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      gap: '3rem',   
                      fontSize: '0.95rem'               
                    }}
                  >
                  
                    <div className="text-start">
                      <a href="#Design" className="d-block fw-semibold text-dark text-decoration-none mb-1">Design</a>
                      <p className="text-muted mb-0">Smart building layouts and passive energy strategies.</p>
                    </div>
                    <div className="text-start">
                      <a href="#Build" className="d-block fw-semibold text-dark text-decoration-none mb-1">Build</a>
                      <p className="text-muted mb-0">Efficient construction with integrated energy systems.</p>
                    </div>
                    <div className="text-start">
                      <a href="#operate" className="d-block fw-semibold text-dark text-decoration-none mb-1">Operate</a>
                      <p className="text-muted mb-0">Manage and monitor usage with intelligent analytics.</p>
                    </div>
                  </div>
                )}
              </div>

              <Nav.Link href="#Projects" className="nav-link-custom">Projects</Nav.Link>
              <Nav.Link href="#Contact" className="nav-link-custom">Contact</Nav.Link>
              <Button href="#Login" variant="success" className="ms-2 px-2 py-1 small-btn">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {activePage === 'home' && (
        <>
          <section className="hero-section d-flex align-items-center justify-content-center text-white text-center">
            <video autoPlay loop muted playsInline className="hero-video">
              <source src="hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay" />
            <div className="z-3 hero-text-container" style={{ paddingRight:'50vw', paddingTop: '45vh' }}>
              <h1 className="fw-bold" style={{ lineHeight: 1.2 }}>
                <div style={{
                  fontSize: '2rem',
                  fontFamily:'Poppins, sans-serif',
                  color: '#fff',
                  textAlign: 'left',
                  paddingLeft: ' 5.9vw'
                }}>
                  Sustainable Energy Solutions
                </div>
                <div
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '2rem',
                    color: '#fff',
                  }}
                  className="typewords"
                >
                  <Typewriter
                    texts={['Hotels', 'Residencies', 'Utilities', 'Industries']}
                    speed={70}
                    pause={1000}
                    
                  />
                </div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  fontFamily:'Poppins, sans-serif',
                  color: '#fff',
                  paddingRight: '0vw',
                }}>
                 
                For a Greener Tomorrow
                </div>
              </h1>
              <br/>
              <button
                className="btn-light mt-0 px-4 py-2 text-decoration-none"
                style={{ marginLeft: '-100px' }}
                onClick={() => setShowAssessmentForm(true)}
              >
                Book a Free Energy Assessment
              </button>

              {showAssessmentForm && (
                <div className="form-overlay">
                  <div className="form-popup">
                    <button className="close-button" onClick={() => setShowAssessmentForm(false)}>×</button>

                    <form className="cta-form">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your full name" required />
                      </div>

                      <div className="form-group">
                        <label>Contact Number</label>
                        <input type="tel" placeholder="Your contact number" required />
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your email address" required />
                      </div>

                      <div className="form-group">
                        <label>Subject</label>
                        <input type="text" placeholder="Subject of message" />
                      </div>

                      <div className="form-group">
                        <label>Upload Resume (PDF only)</label>
                        <input type="file" accept=".pdf" required />
                      </div>

                      <button type="submit" className="submit-button">Submit Application</button>
                    </form>
                  </div>
                </div>
              )}


            </div>
          </section>

          <section className="section about-section"><About /></section>
          <section className="section drives-section"><WhatDrivesUs /></section>
          <section className="section solutions-section"><Solutions /></section>
          <section className="section parallax-section"><VideoParallaxSection /></section>
          <section className="section impact-section"><ImpactStats /></section>
          <section className="section spotlight-section"><Spotlight /></section>
          <section className="section partners-section"><Partners /></section>
          
        </>
      )}

      {activePage === 'Contact' && <Contact />}
      {activePage === 'AboutUs' && <AboutUs />}
      {activePage === 'operate' && <Operate />}
      {activePage === 'Design' && <Design />}
      {activePage === 'Build' && <Build />}
      {activePage === 'Projects' && <ProjectsContent setActivePage={setActivePage} />}
      {activePage === 'Project2' && <Project2 />}
      {activePage === 'Project3' && <Project3 />}
      {activePage === 'Project4' && <Project4 />}
      {activePage === 'Login' && <Login />}
      {activePage === 'CompanySection' && <CompanySection />}
      {activePage === 'TeamSection' && <TeamSection />}
      {activePage === 'CareerSection' && <CareerSection />}

      <footer className="elements-footer py-2 tight-footer">
        <Container>
          <div className="row justify-content-between align-items-start">
            {/* Logo column with just the logo */}
            <div className="col-md-auto mb-4 d-flex align-items-start">
              <img src="/logo-white.png" alt="Elements Energy Logo" height="40" className="mb-3" />
            </div>

            {/* Quick Links */}
            <div className="col-md mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#AboutUs" className="text-white text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#Design" className="text-white text-decoration-none">Solutions</a></li>
                <li className="mb-2"><a href="#Projects" className="text-white text-decoration-none">Projects</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md mb-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="tel:+919916585292" className="text-white text-decoration-none">+91 99165 85292</a></li>
                <li className="mb-2"><a href="mailto:info@elementsenergies.com" className="text-white text-decoration-none">info@elementsenergies.com</a></li>
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

            {/* Social Links */}
            <div className="col-md mb-4">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3 mt-3">
                <a href="https://in.linkedin.com/company/elements.energies">
                  <img src="./linkdin.png" alt="LinkedIn" style={{ height: '24px', width: '24px' }} />
                </a>
                <a href="https://www.instagram.com/elements_energies">
                  <img src="./insta.png" alt="Instagram" style={{ height: '24px', width: '24px' }} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>

    </>
  );
}

export default App;
