import React, { useState } from 'react';
import { Users, Briefcase, Target, ChevronDown, ChevronUp } from 'lucide-react';
import './AboutUs.css';


function AboutUs() {
  const [activeSection, setActiveSection] = useState('company');
  const [showForm, setShowForm] = useState(false);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Aarav Mehta",
      position: "Lead Energy Analyst",
      description: "Specializes in smart grid optimization and energy forecasting.",
      image: "/images/team/aarav.jpg"
    },
    {
      id: 2,
      name: "Sana Kapoor",
      position: "Sustainability Officer",
      description: "Focuses on carbon reduction and urban planning strategies.",
      image: "/images/team/sana.jpg"
    },
    {
      id: 3,
      name: "Vikram Desai",
      position: "Tech Lead",
      description: "Architect behind our energy automation platform.",
      image: "/images/team/vikram.jpg"
    },
    {
      id: 4,
      name: "Ishita Rao",
      position: "Data Scientist",
      description: "Builds ML models for consumption prediction and energy efficiency.",
      image: "/images/team/ishita.jpg"
    },
    {
      id: 5,
      name: "Rohan Patel",
      position: "Operations Manager",
      description: "Oversees deployment and client integration.",
      image: "/images/team/rohan.jpg"
    },
    {
      id: 6,
      name: "Neha Singh",
      position: "Product Designer",
      description: "Designs user-centric interfaces for energy dashboards.",
      image: "/images/team/neha.jpg"
    },
    {
      id: 7,
      name: "Ankit Sharma",
      position: "Renewables Consultant",
      description: "Advises on solar and wind integration strategies.",
      image: "/images/team/ankit.jpg"
    }
  ];

  return (
    <div className="about-us-container">

      {/* Navigation Tabs */}
      <div className="section-tabs">
        <div 
          className={`tab ${activeSection === 'company' ? 'active' : ''}`}
          onClick={() => toggleSection('company')}
        >
          <Target className="tab-icon" />
          <span>Our Company</span>
          {activeSection === 'company' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
        
        <div 
          className={`tab ${activeSection === 'team' ? 'active' : ''}`}
          onClick={() => toggleSection('team')}
        >
          <Users className="tab-icon" />
          <span>Our Team</span>
          {activeSection === 'team' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
        
        <div 
          className={`tab ${activeSection === 'career' ? 'active' : ''}`}
          onClick={() => toggleSection('career')}
        >
          <Briefcase className="tab-icon" />
          <span>Careers</span>
          {activeSection === 'career' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>

      {/* Content Sections */}
      <div className="content-sheets">
        {/* Company Sheet */}
        <div className={`sheet ${activeSection === 'company' ? 'expanded' : 'collapsed'}`}>
          <section className="page-sectionab">
            <div className="company-content">
              <div className="page-intro">
                <h1 className="page-title">
                  We are <span className="title-highlight">Elements Energy</span>
                </h1>
                <p className="page-subtitle">
                  Driving the global shift towards a greener and more sustainable future through innovation and advanced technologies.
                </p>
              </div>
              {/* Buildings Reimagined Section */}
              <div className="content-section buildings-reimagined-section">
                <div className="section-layout vertical-on-mobile">
                  <div className="section-image-container">
                    <img
                      src="/images/buildings-reimagined.png" // Save the uploaded image here
                      alt="Buildings Before and After"
                      className="section-image"
                      style={{ maxWidth: '106%', borderRadius: '8px' }}
                    />
                  </div>
                  <div className="section-content">
                    <div className="section-title" style={{ color: '#1f7145' , fontSize: '1.5rem', fontWeight: '700' , fontFamily: 'Poppins, sans-serif' }}>
                      Buildings Reimagined: From Passive Consumers to Active Contributors
                    </div>
                    <p style={{ marginTop: '0.3rem' , fontSize:'0.9rem' }}>
                      A visual shift from high-emission, energy-hungry buildings to intelligent, climate-responsive infrastructure.
                      Powered by Elements Energy, buildings become active participants in the clean energy future —
                      <strong> monitoring, optimizing, and decarbonizing</strong> every day.
                    </p>
                  </div>
                </div>
              </div>


              {/* Our Commitment */}
              <div className="content-section2">
                <div className="section-layout">
                  <div className="section-content">
                    <div className="section-header">
                      
                      <h2 className="section-title">Our Commitment</h2>
                    </div>
                    <div className="section-text">
                      <p>
                        At Elements Energy, our team is deeply committed to driving the global shift towards a greener and more sustainable future. Through relentless innovation and the application of advanced technologies, we strive to demonstrate the economic and environmental benefits of embracing sustainable energy practices.
                      </p>
                      <p>
                        Our approach integrates <span className="text-highlight">DESIGN</span> and <span className="text-highlight">DATA</span> optimization, accelerating the crucial process of <span className="text-highlight">DECARBONIZATION</span>.
                      </p>
                    </div>
                  </div>
                  <div className="section-image-container">
                    <img
                      src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Sustainable energy infrastructure"
                      className="section-image"
                    />
                  </div>
                </div>
              </div>

              {/* Our Vision */}
              <div className="content-section">
                <div className="section-layout ">
                  <div className="section-image-container">
                    <img
                      src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Clean renewable energy future"
                      className="section-image"
                    />
                  </div>
                  <div className="section-content">
                    <div className="section-header">
                      
                      <h2 className="section-title">Our Vision</h2>
                    </div>
                    <div className="section-text">
                      <p>
                        By decarbonizing buildings and infrastructure, we can pave the way for an era where clean, renewable energy powers our homes and workplaces. This shift will drastically reduce emissions, improve air quality, and foster healthier communities.
                      </p>
                      <p>
                        As a result, future generations will enjoy a brighter, more sustainable world, free from the burdens of pollution and climate change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transforming Urban Landscapes */}
              <div className="content-section dark-section">
                <div className="section-layout">
                  <div className="section-content">
                    <div className="section-header">
                    
                      <h2 className="section-title">Transforming Our Urban Landscapes</h2>
                    </div>
                    <div className="section-text">
                      <p>
                        Today, our urban landscapes are veiled in pollution, with emissions from heating systems and appliances contributing heavily to greenhouse gas levels. This deteriorating air quality impacts public health, leading to increased respiratory ailments.
                      </p>
                      <p>
                        The continued reliance on fossil fuels strains our energy resources and accelerates climate change. We're committed to transforming these landscapes into sustainable, clean environments for all.
                      </p>
                    </div>
                  </div>
                  <div className="section-image-container">
                    <img
                      src="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Urban transformation and sustainability"
                      className="section-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Team Sheet */}
        <div className={`sheet ${activeSection === 'team' ? 'expanded' : 'collapsed'}`}>
          <section className="page-sectionab">
            <div className="team-content">
              <div className="section-intro">
                <div className="section-header centered">
                  <Users className="section-icon large" />
                  <h1 className="section-main-title">Our Team</h1>
                </div>
                <p className="section-subtitle">
                  Meet the passionate individuals driving innovation in sustainable energy solutions.
                </p>
              </div>

              <div className="team-container">
                <div className="team-grid">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="team-member">
                      <div className="team-avatar">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="team-info">
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-position">{member.position}</p>
                        <p className="team-description">{member.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* Career Sheet */}
        <div className={`sheet ${activeSection === 'career' ? 'expanded' : 'collapsed'}`}>
          <section className="page-sectionab">
            <div className="career-content">
              <div className="section-intro">
                <div className="section-header centered ">
                  <Briefcase className="section-icon large" />
                  <h1 className="section-main-title" >Join Our Mission</h1>
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
                  <button className="cta-button" onClick={handleToggleForm} style={{right:'30px'}}>
                    {showForm ? 'Close Form' : 'Get in Touch'}
                  </button>

                  {showForm && (
                    <div className="form-overlay">
                      <div className="form-popup">
                        <button className="close-button" onClick={handleToggleForm}>×</button>

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
              </div>
            </div>
          </section>
        </div>
      </div>
    
    </div>
    
  );
}

export default AboutUs;
