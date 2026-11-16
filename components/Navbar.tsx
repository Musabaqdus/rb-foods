'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
        <Link href="/" className="brand-wrapper">
          <img
            src="/logos/rb-foods-logo.jpg"
            alt="R&B Foods (Pvt.) Ltd. Logo"
            className="brand-logo-img"
          />
          <div className="brand-text">
            <span className="brand-name">R&amp;B FOODS <span>(PVT.) LTD.</span></span>
            <span className="brand-sub">Fruit Purees &amp; Concentrates &bull; Shorkot</span>
          </div>
        </Link>

        {/* Desktop Nav Links (Clean Multi-Page Hierarchy) */}
        <nav className="nav-links">
          <Link href="/purees" className="nav-link">Purees</Link>
          <Link href="/facility" className="nav-link">Facility</Link>
          <Link href="/quality" className="nav-link">Lab &amp; QA</Link>
          <Link href="/harvest" className="nav-link">Harvest</Link>
          <Link href="/packaging" className="nav-link">Packaging</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>

        <div className="nav-actions">
          {/* Luxury Company Profile PDF */}
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

          {/* Primary Request Quote Action */}
          <Link href="/rfq" className="btn-nav-quote">
            <span>Request Quote</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>

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
