'use client';

import React, { useEffect } from 'react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export default function MobileDrawer({ isOpen, onClose, onOpenQuote }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  const handleQuoteClick = () => {
    onClose();
    onOpenQuote();
  };

  return (
    <>
      <div
        className={`mobile-backdrop ${isOpen ? 'active' : ''}`}
        id="mobileBackdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`mobile-nav-drawer ${isOpen ? 'active' : ''}`} id="mobileDrawer">
        <div className="mobile-drawer-header">
          <div className="brand">
            <div className="brand-logo-wrap">
              <img
                src="/logos/rb-logo.jpg"
                alt="R&B Foods Emblem"
                className="brand-logo-img"
                width="36"
                height="36"
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">R&amp;B Foods</span>
              <span className="brand-sub">EXPORT DESK</span>
            </div>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            id="mobileCloseBtn"
            aria-label="Close menu"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <nav className="mobile-nav-links">
          <a href="#products" className="mobile-nav-link" onClick={handleLinkClick}>
            Fruit Purees Catalog
          </a>
          <a href="#processing" className="mobile-nav-link" onClick={handleLinkClick}>
            BERTUZZI Italy Facility
          </a>
          <a href="#quality-lab" className="mobile-nav-link" onClick={handleLinkClick}>
            QA &amp; Lab Standards
          </a>
          <a href="#seasonality" className="mobile-nav-link" onClick={handleLinkClick}>
            Harvest &amp; Seasonality Matrix
          </a>
          <a href="#packaging" className="mobile-nav-link" onClick={handleLinkClick}>
            Export Packaging &amp; Logistics
          </a>
          <a href="#leadership" className="mobile-nav-link" onClick={handleLinkClick}>
            Governance &amp; Chairman Pledge
          </a>
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="/docs/company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Company Profile (PDF)
          </a>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={handleQuoteClick}
          >
            Request Instant B2B Quotation
          </button>
          <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--color-charcoal-700)', lineHeight: '1.6' }}>
            <p><strong>Plant:</strong> Shorkot, Jhang, Punjab, Pakistan</p>
            <p><strong>Hotline:</strong> +92 47 5510000</p>
            <p><strong>Email:</strong> export@rbfoods.com.pk</p>
          </div>
        </div>
      </div>
    </>
  );
}
