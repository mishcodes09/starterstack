import React from "react";
import { useNavigate } from "react-router-dom";

const Opportunities = () => {
  const navigate = useNavigate();

  const opportunities = [
    {
      type: "Internship",
      title: "Software Engineering Intern",
      company: "TechInnovate",
      location: "Remote",
      skills: ["Python", "Django", "React"],
      duration: "3 months",
      stipend: "$2.5k/mo",
    },
    {
      type: "Junior Role",
      title: "Junior Frontend Developer",
      company: "DigitalCraft",
      location: "New York, NY",
      skills: ["JavaScript", "Vue.js", "CSS"],
      salary: "$65k-$80k",
      featured: true,
    },
    {
      type: "Project",
      title: "E-commerce Platform Build",
      company: "ShopLocal",
      location: "Remote",
      skills: ["Next.js", "Node.js", "MongoDB"],
      duration: "6 weeks",
      paid: true,
    },
    {
      type: "Internship",
      title: "DevOps Engineering Intern",
      company: "CloudScale",
      location: "San Francisco, CA",
      skills: ["AWS", "Docker", "Kubernetes"],
      duration: "4 months",
      stipend: "$3k/mo",
    },
  ];

  const handleViewDetails = (opportunity) => {
    // You could navigate to a detailed view or pass data
    navigate(
      `/marketplace?opportunity=${encodeURIComponent(
        JSON.stringify(opportunity)
      )}`
    );
  };

  const handleSeeAllOpportunities = () => {
    navigate("/marketplace");
  };

  return (
    <section className="opportunities" id="opportunities">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Opportunities</h2>
          <p className="section-subtitle">
            Hand-picked roles and projects perfect for launching your career
          </p>
        </div>
        <div className="opportunities-grid">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className={`opportunity-card ${opp.featured ? "featured" : ""}`}
            >
              <div className="opp-header">
                <div className="opp-type">{opp.type}</div>
                {opp.featured && <div className="featured-badge">Featured</div>}
              </div>
              <h3 className="opp-title">{opp.title}</h3>
              <div className="opp-company">
                <span className="company-name">{opp.company}</span>
                <span className="location">{opp.location}</span>
              </div>
              <div className="opp-skills">
                {opp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="opp-meta">
                {opp.stipend && <span>💰 {opp.stipend}</span>}
                {opp.salary && <span>💸 {opp.salary}</span>}
                {opp.duration && <span>⏱️ {opp.duration}</span>}
                {opp.paid && <span>💰 Paid Project</span>}
              </div>
              <button
                className="btn btn-outline"
                onClick={() => handleViewDetails(opp)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        <div className="opportunities-cta">
          <button
            className="btn btn-primary"
            onClick={handleSeeAllOpportunities}
          >
            See All Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
