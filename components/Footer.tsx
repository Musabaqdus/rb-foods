'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col">
            <div className="brand-wrapper" style={{ marginBottom: '1rem' }}>
              <img src="/logos/rb-foods-logo.jpg" alt="R&B Foods" className="brand-logo-img" />
              <div className="brand-text">
                <span className="brand-name" style={{ color: '#FFFFFF' }}>R&amp;B Foods</span>
                <span className="brand-sub" style={{ color: 'var(--color-cream-300)' }}>Private Limited</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Pakistan&apos;s benchmark fruit processing enterprise. Manufacturing premium aseptic Chaunsa mango pulp, guava pulp, peach, strawberry, and tomato concentrates on imported Bertuzzi (Italy) processing lines.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span className="crop-status-tag" style={{ background: 'rgba(255,255,255,0.1)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }}>HACCP Certified</span>
              <span className="crop-status-tag" style={{ background: 'rgba(255,255,255,0.1)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }}>Halal Certified</span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="footer-col">
            <h4 className="footer-heading">Products Portfolio</h4>
            <ul className="footer-links-list">
              <li><a href="/purees">Chaunsa Mango Pulp</a></li>
              <li><a href="/purees">Chaunsa Concentrate (28-30° Brix)</a></li>
              <li><a href="/purees">Guava Pulp Aseptic</a></li>
              <li><a href="/purees">Sindhri &amp; Desi Mango Pulp</a></li>
              <li><a href="/purees">Peach Puree &amp; Concentrate</a></li>
              <li><a href="/purees">Falsa Puree Aseptic</a></li>
              <li><a href="/purees">Fresh Strawberry Puree</a></li>
              <li><a href="/purees">Tomato Paste (28-30° Brix)</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Industrial Facility</h4>
            <ul className="footer-links-list">
              <li><a href="#engineering">Bertuzzi Processing Line</a></li>
              <li><a href="#laboratory">In-House QA / QC Lab</a></li>
              <li><a href="#seasonality">Fruit Harvest Calendar</a></li>
              <li><a href="#packaging">210 kg Steel Drum Specs</a></li>
              <li><a href="#leadership">Corporate Governance</a></li>
              <li><a href="/docs/company-profile.pdf" target="_blank" rel="noopener noreferrer">Company Profile (PDF)</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Plant Address */}
          <div className="footer-col">
            <h4 className="footer-heading">Plant &amp; Export Desk</h4>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <strong>Factory &amp; Head Office:</strong><br />
                R&amp;B Foods (Pvt.) Ltd,<br />
                Shorkot, District Jhang, Punjab, Pakistan
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <strong>Export Inquiries:</strong><br />
                <a href="mailto:muhammadzeeshanrafiq@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>muhammadzeeshanrafiq@gmail.com</a><br />
                <a href="mailto:chairman@rbfoods.com.pk" style={{ color: 'inherit', textDecoration: 'none' }}>chairman@rbfoods.com.pk</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <strong>Plant Tel:</strong> <a href="tel:+923343734786" style={{ color: 'inherit', textDecoration: 'none' }}>+92 334 3734786</a><br />
                <strong>Direct WhatsApp:</strong> <a href="https://wa.me/923343734786" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+92 334 3734786</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 R&amp;B Foods (Pvt.) Ltd. All rights reserved. Registered under Companies Act, SECP Pakistan.</p>
          <p>Engineered for Global B2B Food &amp; Beverage Processors &bull; Shorkot Industrial Zone</p>
        </div>
      </div>
    </footer>
  );
}
