// TeamSection.js
import React from 'react';
import { Users } from 'lucide-react';
import './AboutUs.css';

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

function TeamSection() {
  return (
    <section className="page-sectionab team-section" style={{ position: 'relative', marginTop: '120px' }}>
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
  );
}

export default TeamSection;
