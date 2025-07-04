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
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
        textAlign: 'left',
        fontWeight: '600',
        fontFamily:'Poppins, sans-serif',
        color: '#fff',
        gap: '1rem',
        minWidth: '12ch',
      }}
    >
      <span style={{ whiteSpace: 'nowrap' }} className='empoweringtext'>
        Empowering
      </span>
      <span className='Typingtext'
        style={{
          fontFamily:'Poppins, sans-serif',
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
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
                      if (!prev) setShowMega(false);
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
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      gap: '3rem',
                      fontSize: '0.95rem'
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
                      if (!prev) setShowAboutMega(false);
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
          <section className="hero-section" style={{
            position: 'relative',
            width: '100%',
            
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems:'end',
            
            textAlign: 'left',
            background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
          }}>
            {/* Hero background would go here */}
            <video autoPlay loop muted playsInline className="hero-video" style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1
            }}>
              <source src="hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <Container className="col-md-6 text-md-start text-center" style={{
              position: 'relative',
              zIndex: 2,
              color: '#fff',
              padding: '0 20px',
              marginRight: '700px',
            }}>
              <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'left'
              }}>
                <h1 style={{
                  fontSize: 'clamp(0.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  lineHeight: 0.3,
                  marginBottom: '1rem',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  Sustainable Energy Solutions
                </h1>
                
                <div style={{
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '0rem',
                  minHeight: '3.5rem'
                }}>
                  <Typewriter 
                    texts={['Industries', 'Hotels', 'Residencies', 'Utilities']} 
                    speed={70} 
                    pause={1000} 
                  />
                </div>
                
                <h2 style={{
                  fontSize: 'clamp(0.5rem, 3vw, 2rem',
                  fontWeight: 600,
                  lineHeight: 0.3,
                  marginTop: '0.4rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  For a Greener Tomorrow
                </h2>
                
                <Button
                  variant="success"
                  onClick={() => setShowAssessmentForm(true)}
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    padding: '12px 24px',
                    fontWeight: 600,
                    borderRadius: '4px'
                  }}
                >
                  Book a Free Energy Assessment
                </Button>
              </div>
            </Container>

            {showAssessmentForm && (
              <div className="form-overlay" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.7)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div className="form-popup" style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '8px',
                  width: '90%',
                  maxWidth: '500px',
                  position: 'relative'
                }}>
                  <button 
                    className="close-button" 
                    onClick={() => setShowAssessmentForm(false)}
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

                  <form className="cta-form">
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                      <input 
                        type="text" 
                        placeholder="Your full name" 
                        required 
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          borderRadius: '4px',
                          border: '1px solid #ccc'
                        }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem' }}>Contact Number</label>
                      <input 
                        type="tel" 
                        placeholder="Your contact number" 
                        required 
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          borderRadius: '4px',
                          border: '1px solid #ccc'
                        }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        required 
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          borderRadius: '4px',
                          border: '1px solid #ccc'
                        }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem' }}>Subject</label>
                      <input 
                        type="text" 
                        placeholder="Subject of message" 
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          borderRadius: '4px',
                          border: '1px solid #ccc'
                        }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem' }}>Upload Resume (PDF only)</label>
                      <input 
                        type="file" 
                        accept=".pdf" 
                        required 
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          borderRadius: '4px',
                          border: '1px solid #ccc'
                        }}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="submit-button"
                      style={{
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '4px',
                        fontWeight: '600',
                        width: '100%',
                        cursor: 'pointer'
                      }}
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            )}
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

      <footer className="elements-footer py-2 tight-footer" style={{
        backgroundColor: '#343a40',
        color: 'white',
        padding: '2rem 0'
      }}>
        <Container>
          <div className="row justify-content-between align-items-start">
            <div className="col-md-auto mb-4 d-flex align-items-start">
              <img src="/logo-white.png" alt="Elements Energy Logo" height="40" className="mb-3" />
            </div>

            <div className="col-md mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#AboutUs" className="text-white text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#Design" className="text-white text-decoration-none">Solutions</a></li>
                <li className="mb-2"><a href="#Projects" className="text-white text-decoration-none">Projects</a></li>
              </ul>
            </div>

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