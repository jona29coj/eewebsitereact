import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Contact.css';

// Fix for default marker icon issue in Leaflet + React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', contact: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Let's <span className="gradient-text">Chat</span>
            </h1>
            <p className="hero-description">
              Ready to transform your energy management? Let's discuss how we can help optimize your building's energy efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-header">
                <h2 className="info-title">Let's Connect</h2>
                <p className="info-description">
                  We're here to help you achieve your energy optimization goals. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon email-icon"><Mail /></div>
                  <div className="method-content">
                    <h3 className="method-title">Email Us</h3>
                    <p className="method-value">info@elementsenergies.com</p>
                    <p className="method-description">Send us an email anytime</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon phone-icon"><Phone /></div>
                  <div className="method-content">
                    <h3 className="method-title">Call Us</h3>
                    <p className="method-value">+91 99165 85292</p>
                    <p className="method-description">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon location-icon"><MapPin /></div>
                  <div className="method-content">
                    <h3 className="method-title">Visit Us</h3>
                    <p className="method-value">E-301 IITM Research Park</p>
                    <p className="method-description">Tharamani, Chennai - 600113</p>
                  </div>
                </div>
              </div>

              <div className="office-hours">
                <h3 className="hours-title">Office Hours</h3>
                <div className="hours-grid">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2 className="form-title">Send us a Message</h2>
                <p className="form-description">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {!isSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="form-input" placeholder="Enter your full name" required />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact" className="form-label">Contact Number</label>
                      <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleInputChange} className="form-input" placeholder="+91 XXXXX XXXXX" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" placeholder="your.email@example.com" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="form-textarea" placeholder="Tell us about your energy management needs..." rows={6} required></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    <Send className="button-icon" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon"><CheckCircle /></div>
                  <h3 className="success-title">Message Sent Successfully!</h3>
                  <p className="success-description">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <h2 className="map-title">Find Us</h2>
            <p className="map-description">
              Located at the prestigious IITM Research Park in Chennai
            </p>
          </div>

          <div className="map-container">
            {/* Map with marker */}
            <MapContainer
              center={[12.992094754411658, 80.24367697935722]}
              zoom={17}
              style={{ height: '400px', width: '100%', borderRadius: '20px' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[12.992094754411658, 80.24367697935722]}>
                <Popup>
                  E-301, IITM Research Park<br />Tharamani, Chennai - 600113
                </Popup>
              </Marker>
            </MapContainer>

            {/* Button below map */}
            <button
              className="map-redirect-button"
              onClick={() =>
                window.open(
                  'https://www.google.com/maps/search/?api=1&query=12.992094754411658,80.24367697935722',
                  '_blank'
                )
              }
            >
              Open in Google Maps
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;