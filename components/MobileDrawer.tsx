'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Prevent body scroll when drawer is open
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

  return (
    <>
      {/* Background Dimmer Backdrop */}
      <div
        className={`nav-drawer-backdrop ${isOpen ? 'active' : ''}`}
        id="nav-drawer-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Pane */}
      <aside
        className={`nav-drawer ${isOpen ? 'active' : ''}`}
        id="nav-drawer"
        aria-label="Mobile Navigation"
      >
        <div className="drawer-header">
          <Link href="/" className="brand-wrapper" onClick={onClose}>
            <img
              src="/logos/rb-foods-logo.jpg"
              alt="R&B Foods"
              className="brand-logo-img"
            />
            <div className="brand-text">
              <span className="brand-name">R&amp;B <span>Foods</span></span>
              <span className="brand-sub">Fruit Purees</span>
            </div>
          </Link>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            style={{ color: 'var(--color-primary-900)', fontSize: '1.8rem' }}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className="drawer-links-list">
          <Link href="/purees" className="drawer-link" onClick={onClose}>
            <span>Fruit Purees Catalog</span>
            <span>&rarr;</span>
          </Link>
          <Link href="/facility" className="drawer-link" onClick={onClose}>
            <span>Bertuzzi Italian Plant</span>
            <span>&rarr;</span>
          </Link>
          <Link href="/quality" className="drawer-link" onClick={onClose}>
            <span>QA &amp; Laboratory Tour</span>
            <span>&rarr;</span>
          </Link>
          <Link href="/harvest" className="drawer-link" onClick={onClose}>
            <span>Crop Harvest Matrix</span>
            <span>&rarr;</span>
          </Link>
          <Link href="/packaging" className="drawer-link" onClick={onClose}>
            <span>Export &amp; Packaging</span>
            <span>&rarr;</span>
          </Link>
          <Link href="/about" className="drawer-link" onClick={onClose}>
            <span>Executive Governance</span>
            <span>&rarr;</span>
          </Link>
        </nav>

        <div className="drawer-actions">
          <a
            href="/docs/company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ width: '100%', fontSize: '0.875rem' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Company Profile (PDF)
          </a>
          <Link
            href="/rfq"
            className="btn btn-gold"
            onClick={onClose}
            style={{ width: '100%', fontSize: '0.875rem' }}
          >
            Request B2B Quote &amp; Samples
          </Link>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-600)', textAlign: 'center', marginTop: '0.5rem', lineHeight: 1.6 }}>
            Plant Tel: <a href="tel:+923145264429" style={{ color: 'inherit' }}>0314 5264429</a> &bull; WhatsApp: <a href="https://wa.me/923343734786" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold-700)', fontWeight: 600 }}>+92 334 3734786</a><br />
            Shorkot, Punjab, Pakistan
          </div>
        </div>
      </aside>
    </>
  );
}
