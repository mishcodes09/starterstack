import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>StarterStack</h3>
            <p>Launch your tech career with real opportunities.</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="LinkedIn">
                💼
              </a>
              <a href="#" aria-label="GitHub">
                🐙
              </a>
              <a href="#" aria-label="Discord">
                🎮
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="/opportunities">Opportunities</a>
              <a href="/mentors">Mentors</a>
              <a href="/projects">Projects</a>
              <a href="/pricing">Pricing</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/careers">Careers</a>
              <a href="/press">Press</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="/help">Help Center</a>
              <a href="/contact">Contact</a>
              <a href="/faq">FAQ</a>
              <a href="/community">Community</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/cookies">Cookies</a>
              <a href="/security">Security</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 StarterStack. All rights reserved.</p>
          <p>Building the next generation of tech talent. 🚀</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
