// TeamSection.js
import React from 'react';
import { Users } from 'lucide-react';
import './AboutUs.css';

const teamMembers = [
  {
    id: 1,
    name: "Auna Sando",
    position: "CEO",
    description: "Urban designer with 4+ years of experience in architecture and project coordination, specializing in smart grid optimization and energy forecasting.",
    image: "team/auna.png"
  },
  {
    id: 2,
    name: "Chemmal Swami Durai",
    position: "Head-Operations",
    description: "Energy analyst with 2+ years of experience in energy engineering, specializing in load forecasting and system efficiency. Worked with Atsuya and Ogni Group.",
    image: "team/chemmal.png"
  },
  {
    id: 3,
    name: "Jonathan Prince",
    position: "Head-Technology",
    description: "Architect behind our energy automation platform.",
    image: "team/jonathan.png"
  },
  {
    id: 4,
    name: "Immanuvel",
    position: "Advisor",
    description: "Builds ML models for consumption prediction and energy efficiency.",
    image: "/images/team/neha.jpg"
  },
    {
    id: 5,
    name: "Tharun ",
    position: "Product Designer",
    description: "Designs user-centric interfaces for energy dashboards.",
    image: "/images/team/neha.jpg"
  },
  {
    id: 6,
    name: "Anandha Krishnan",
    position: "Project Associate-IT",
    description: "Develops and maintains our energy management software.",
    image: "team/anandha.png"
  },

   {
    id: 7,
    name: "Harshetha V",
    position: "Software Developer-Intern",
    description: "Designs user-centric interfaces for energy dashboards.",
    image: "/images/team/neha.jpg"
  },
  {
    id: 8,
    name: "Anson Sando",
    position: "Advisor",
    description: "Advises on solar and wind integration strategies.",
    image: "team/anson.png"
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
