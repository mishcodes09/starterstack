import React from "react";

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Launch Your Tech Career?</h2>
          <p className="cta-subtitle">
            Join thousands of students and graduates building their future with
            StarterStack
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">
              Join StarterStack Today
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="btn btn-secondary btn-large">
              Browse Opportunities
            </button>
          </div>
          <div className="cta-features">
            <div className="feature">
              <span>✅</span>
              <span>Free to join</span>
            </div>
            <div className="feature">
              <span>✅</span>
              <span>No experience required</span>
            </div>
            <div className="feature">
              <span>✅</span>
              <span>Get matched in 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
