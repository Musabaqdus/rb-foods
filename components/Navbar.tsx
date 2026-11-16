'use client';

import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenDrawer: () => void;
}

export default function Navbar({ onOpenDrawer }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="site-header">
      <div className="container nav-container">
        <a href="#" className="brand-wrapper">
          <img
            src="/logos/rb-foods-logo.jpg"
            alt="R&B Foods Logo"
            className="brand-logo-img"
          />
          <div className="brand-text">
            <span className="brand-name">R&amp;B <span>Foods</span></span>
            <span className="brand-sub">Fruit Purees &amp; Concentrates</span>
          </div>
        </a>

        {/* Desktop Nav Links (Adaptive & Never Overflowing) */}
        <nav className="nav-links">
          <a href="#purees" className="nav-link">Purees</a>
          <a href="#engineering" className="nav-link">Facility</a>
          <a href="#laboratory" className="nav-link">Lab &amp; QA</a>
          <a href="#seasonality" className="nav-link">Harvest</a>
          <a href="#packaging" className="nav-link">Packaging</a>
          <a href="#leadership" className="nav-link">About</a>
        </nav>

        <div className="nav-actions">
          {/* Re-designed Single-Line Luxury Brochure Button */}
          <a
            href="/docs/company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brochure"
            title="Download Official Company Profile PDF"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Company Profile</span>
            <span className="pdf-pill">PDF</span>
          </a>

          {/* Re-designed Primary Request Quote Action */}
          <a href="#rfq-calculator" className="btn-nav-quote">
            <span>Request Quote</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>

          {/* Sleek Hamburger Drawer Toggle (Activates on smaller screens) */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={onOpenDrawer}
            aria-label="Open Navigation Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
