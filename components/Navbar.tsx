'use client';

import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenDrawer: () => void;
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenDrawer, onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container nav-container">
        <a href="#hero" className="brand" aria-label="R&B Foods Homepage">
          <div className="brand-logo-wrap">
            <img
              src="/logos/rb-logo.jpg"
              alt="R&B Foods Emblem"
              className="brand-logo-img"
              width="48"
              height="48"
            />
          </div>
          <div className="brand-text">
            <span className="brand-name">R&amp;B Foods</span>
            <span className="brand-sub">FRUIT PUREES &amp; CONCENTRATES</span>
          </div>
        </a>

        {/* Desktop Primary Navigation */}
        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#products" className="nav-link">Fruit Purees</a>
          <a href="#processing" className="nav-link">Bertuzzi Plant</a>
          <a href="#quality-lab" className="nav-link">QA &amp; Lab Tour</a>
          <a href="#seasonality" className="nav-link">Harvest Matrix</a>
          <a href="#packaging" className="nav-link">Logistics</a>
          <a href="#leadership" className="nav-link">Governance</a>
        </nav>

        {/* Action Buttons: Company Profile PDF + RFQ */}
        <div className="nav-actions">
          <a
            href="/docs/company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brochure"
            title="Download official audited company profile (PDF)"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Company Profile</span>
            <span className="btn-badge-pdf">PDF</span>
          </a>

          <button
            type="button"
            className="btn btn-primary btn-nav-quote"
            onClick={onOpenQuote}
          >
            Request Quote
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            id="mobileMenuToggle"
            aria-label="Toggle navigation menu"
            onClick={onOpenDrawer}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
