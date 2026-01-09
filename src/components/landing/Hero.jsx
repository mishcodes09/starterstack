import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleJoinStarterStack = () => {
    navigate("/dashboard");
  };

  const handleBrowseOpportunities = () => {
    navigate("/marketplace");
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orbit"></div>
        <div className="gradient-orbit"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your <span className="gradient-text">launchpad</span> into tech.
          </h1>
          <p className="hero-subtitle">
            We connect you with internships, junior roles, and real-world
            projects. Build your skills and launch your tech career.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={handleJoinStarterStack}
            >
              Join StarterStack
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleBrowseOpportunities}
            >
              Browse Opportunities
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">2,500+</div>
              <div className="stat-label">Students Placed</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Partner Companies</div>
            </div>
            <div className="stat">
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="impact-stats">
            <div className="impact-card">
              <div className="impact-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 8L32 16L40 16L40 24L32 24L24 32L16 24L8 24L8 16L16 16L24 8Z"
                    fill="url(#rocketGradient)"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 20L28 28M28 20L20 28"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 36L24 44M18 40L14 44M30 40L34 44"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="rocketGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#0066FF" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="impact-content">
                <div className="impact-number">87%</div>
                <div className="impact-label">Get hired within 3 months</div>
              </div>
            </div>
            <div className="impact-card">
              <div className="impact-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect
                    x="12"
                    y="12"
                    width="24"
                    height="24"
                    rx="4"
                    fill="url(#moneyGradient)"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="8"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M20 20H28M20 24H28M20 28H24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 36L20 32M32 36L28 32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="moneyGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="impact-content">
                <div className="impact-number">$65k</div>
                <div className="impact-label">Average starting salary</div>
              </div>
            </div>
            <div className="impact-card">
              <div className="impact-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 8L28 18L38 20L30 28L32 40L24 34L16 40L18 28L10 20L20 18L24 8Z"
                    fill="url(#starGradient)"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M24 16L26 21L31 22L27 26L28 31L24 28L20 31L21 26L17 22L22 21L24 16Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="4"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <circle
                    cx="36"
                    cy="36"
                    r="2"
                    fill="currentColor"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient
                      id="starGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="impact-content">
                <div className="impact-number">4.8/5</div>
                <div className="impact-label">Student satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
