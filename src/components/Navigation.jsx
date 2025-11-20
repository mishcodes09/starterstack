import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Opportunities", href: "#opportunities" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Success Stories", href: "#success-stories" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <div className="nav-brand">
              <a href="#" className="logo">
                <span className="logo-icon">🚀</span>
                StarterStack
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links">
              {navItems.map((item, index) => (
                <a key={index} href={item.href} className="nav-link">
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="nav-actions">
              <button className="btn btn-text">Sign In</button>
              <button className="btn btn-primary">Join Now</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="nav-brand">
              <a href="#" className="logo">
                <span className="logo-icon">🚀</span>
                StarterStack
              </a>
            </div>
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>×</span>
            </button>
          </div>

          <div className="mobile-nav-links">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="mobile-nav-actions">
            <button className="btn btn-outline btn-full">Sign In</button>
            <button className="btn btn-primary btn-full">Join Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
