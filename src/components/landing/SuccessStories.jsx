import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Maria Rodriguez",
      role: "Frontend Developer",
      company: "TechInnovate",
      story:
        "Landed my first developer job 2 months after joining StarterStack. The mentorship program was invaluable!",
      avatar: "MR",
      previous: "Bootcamp Graduate",
    },
    {
      name: "Alex Thompson",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      story:
        "The real-world projects helped me build a portfolio that actually impressed employers.",
      avatar: "AT",
      previous: "Computer Science Student",
    },
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "CloudScale",
      story:
        "Went from internship to full-time offer through StarterStack. The career guidance made all the difference.",
      avatar: "SC",
      previous: "Self-Taught Developer",
    },
  ];

  return (
    <section className="success-stories">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">
          Join thousands of students and graduates who launched their tech
          careers with StarterStack
        </p>
        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-content">
                <p>"{story.story}"</p>
              </div>
              <div className="story-author">
                <div className="avatar">{story.avatar}</div>
                <div className="author-info">
                  <h4>{story.name}</h4>
                  <p>
                    {story.role} at {story.company}
                  </p>
                  <span className="previous-role">
                    Previously: {story.previous}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
