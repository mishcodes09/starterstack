import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items (no dashboard or success stories)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Opportunities", path: "/marketplace" },
    { name: "How It Works", path: "/how-it-works" },
  ];

  // Handlers
  const handleSignIn = () => {
    navigate("/signin");
    setIsMobileMenuOpen(false);
  };

  const handleJoinNow = () => {
    alert("Join Now clicked!");
  };

  return (
    <>
      <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <div className="nav-brand">
              <Link
                to="/"
                className="logo"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="logo-icon">🚀</span>
                StarterStack
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end={item.path === "/"}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="nav-actions">
              <button className="btn btn-text" onClick={handleSignIn}>
                Sign In
              </button>
              <button className="btn btn-primary" onClick={handleJoinNow}>
                Join Now
              </button>
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
              <Link
                to="/"
                className="logo"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="logo-icon">🚀</span>
                StarterStack
              </Link>
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
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
                end={item.path === "/"}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="mobile-nav-actions">
            <button className="btn btn-outline btn-full" onClick={handleSignIn}>
              Sign In
            </button>
            <button
              className="btn btn-primary btn-full"
              onClick={handleJoinNow}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
