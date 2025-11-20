import React from "react";

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect
            x="8"
            y="12"
            width="32"
            height="24"
            rx="4"
            fill="url(#gradient1)"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16 20H32M16 24H28M16 28H24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="34"
            cy="34"
            r="8"
            fill="url(#gradient2)"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M30 34L32.5 36.5L38 31"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Access Top Internships & Junior Roles",
      description:
        "Get matched with quality opportunities from our network of 500+ tech companies and startups.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle
            cx="24"
            cy="24"
            r="16"
            fill="url(#gradient3)"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="18" cy="20" r="2" fill="currentColor" />
          <circle cx="30" cy="20" r="2" fill="currentColor" />
          <path
            d="M18 30C18 27.7909 19.7909 26 22 26H26C28.2091 26 30 27.7909 30 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M32 16L36 12M36 16L32 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 16L12 12M12 16L16 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Connect with Industry Mentors",
      description:
        "Learn from experienced developers who provide guidance, code reviews, and career advice.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect
            x="12"
            y="12"
            width="24"
            height="24"
            rx="4"
            fill="url(#gradient4)"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M18 18L30 18M18 22L26 22M18 26L22 26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 32L16 36M28 32L32 36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="24" cy="34" r="2" fill="currentColor" />
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Build Real-World Projects",
      description:
        "Work on meaningful projects that enhance your portfolio and give you practical experience.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 8L30 18L42 20L34 28L36 40L24 34L12 40L14 28L6 20L18 18L24 8Z"
            fill="url(#gradient5)"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M24 16L26.5 21.5L32.5 22L28 26L29 32L24 29L19 32L20 26L15.5 22L21.5 21.5L24 16Z"
            fill="white"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M32 36L40 32M16 36L8 32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#BE185D" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Accelerate Your Career Growth",
      description:
        "Get the support and resources you need to transition from learning to earning in tech.",
    },
  ];

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-header">
          <h2 className="section-title">
            Your Path to a <span className="gradient-text">Successful</span>{" "}
            Tech Career
          </h2>
          <p className="section-subtitle">
            Everything you need to bridge the gap between education and
            employment
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-wrapper">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <div className="benefit-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
