import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Showcase your skills, projects, and career goals to help us find the perfect matches for you.",
      icon: "👤",
    },
    {
      number: "02",
      title: "Get Matched with Opportunities",
      description:
        "Our AI-powered system connects you with relevant internships, roles, and projects based on your profile.",
      icon: "🎯",
    },
    {
      number: "03",
      title: "Apply & Gain Real Experience",
      description:
        "Submit applications, interview with companies, and work on real projects that build your portfolio.",
      icon: "🚀",
    },
    {
      number: "04",
      title: "Grow Your Career",
      description:
        "Receive ongoing support, mentorship, and new opportunities as you progress in your tech career.",
      icon: "📈",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How StarterStack Works</h2>
        <p className="section-subtitle">
          Your journey from student to professional developer in four simple
          steps
        </p>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-indicator">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
