import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import './AboutUs.css'; // Create this file for specific styles

function CareerSection() {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="career-content" style={{ position: 'relative', marginTop: '120px' }} >
      <div className="section-intro">
        <div className="section-header centered">
          <Briefcase className="section-icon large" />
          <h1 className="section-main-title">Join Our Mission</h1>
        </div>
        <p className="section-subtitle">
          Be part of the team that's shaping the future of sustainable energy and environmental innovation.
        </p>
      </div>

      <div className="career-grid">
        <div className="career-card">
          <h2 className="career-card-title">Why Join Elements Energy?</h2>
          <ul className="benefits-list">
            <li className="benefit-item">
              <div className="benefit-dot"></div>
              <span>Make a meaningful impact on global sustainability</span>
            </li>
            <li className="benefit-item">
              <div className="benefit-dot"></div>
              <span>Work with cutting-edge clean energy technologies</span>
            </li>
            <li className="benefit-item">
              <div className="benefit-dot"></div>
              <span>Collaborate with passionate industry experts</span>
            </li>
            <li className="benefit-item">
              <div className="benefit-dot"></div>
              <span>Competitive compensation and benefits</span>
            </li>
          </ul>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Ready to Make a Difference?</h2>
          <p className="cta-description">
            Send us your resume and let's discuss how you can contribute to our mission of creating a sustainable future.
          </p>
          <button className="cta-button" onClick={handleToggleForm}>
            {showForm ? 'Close Form' : 'Get in Touch'}
          </button>

          {showForm && (
            <div className="form-overlay">
              <div className="form-popup">
                <button className="close-button" onClick={handleToggleForm}>×</button>

                <form
                  className="cta-form"
                  action="https://formsubmit.co/harshetha.venkatesan@gmail.com"
                  method="POST"
                  
                >
                  {/* Hidden Subject Line */}
                  <input type="hidden" name="_subject" value="New Contact Message from Website" />

                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Your full name" required />
                  </div>

                  <div className="form-group">
                    <label>Contact Number</label>
                    <input type="tel" name="contact" placeholder="Your contact number" required />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Your email address" required />
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" name="subject" placeholder="Subject of message" />
                  </div>

                  <div className="form-group">
                    <label>Resume Link (Google Drive)</label>
                    <input
                      type="url"
                      name="resumeLink"
                      placeholder="https://drive.google.com/..."
                      required
                    />
                  </div>


                  <button type="submit" className="submit-button">Submit Application</button>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default CareerSection;
