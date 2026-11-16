'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Credentials */}
          <div className="footer-col brand-col">
            <div className="brand" style={{ marginBottom: '1rem' }}>
              <div className="brand-logo-wrap">
                <img
                  src="/logos/rb-logo.jpg"
                  alt="R&B Foods Logo"
                  className="brand-logo-img"
                  width="44"
                  height="44"
                />
              </div>
              <div className="brand-text">
                <span className="brand-name" style={{ color: '#FFFFFF' }}>R&amp;B Foods</span>
                <span className="brand-sub" style={{ color: 'var(--color-gold-400)' }}>
                  FRUIT PUREES &amp; CONCENTRATES
                </span>
              </div>
            </div>
            <p className="footer-desc">
              Premier industrial agro-processing facility in Shorkot, Punjab. Operating genuine BERTUZZI (Milan, Italy) continuous lines for world-class aseptic Chaunsa mango, pink guava, and citrus purees.
            </p>
            <div className="footer-certs-row">
              <span className="footer-cert-tag">FSSC 22000</span>
              <span className="footer-cert-tag">ISO 9001</span>
              <span className="footer-cert-tag">HACCP</span>
              <span className="footer-cert-tag">Halal</span>
              <span className="footer-cert-tag">Kosher</span>
            </div>
          </div>

          {/* Column 2: Puree Catalog Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Puree Portfolio</h4>
            <ul className="footer-links">
              <li><a href="#products">Chaunsa Mango Puree</a></li>
              <li><a href="#products">Sindhri &amp; Ratool Puree</a></li>
              <li><a href="#products">Pink &amp; White Guava</a></li>
              <li><a href="#products">Indus Kinnow Mandarin</a></li>
              <li><a href="#products">Mountain Apple Base</a></li>
              <li><a href="#products">Fresh Strawberry Puree</a></li>
              <li><a href="#products">Indus Red Carrot Puree</a></li>
            </ul>
          </div>

          {/* Column 3: Facility & Logistics */}
          <div className="footer-col">
            <h4 className="footer-heading">Processing &amp; Logistics</h4>
            <ul className="footer-links">
              <li><a href="#processing">BERTUZZI Italy Machinery</a></li>
              <li><a href="#quality-lab">Analytical QA/QC Tour</a></li>
              <li><a href="#seasonality">Harvest &amp; Seasonality Matrix</a></li>
              <li><a href="#packaging">215 KG Steel Drum Specs</a></li>
              <li><a href="#packaging">20&apos; FCL Ocean Freight Logistics</a></li>
              <li><a href="/docs/company-profile.pdf" target="_blank" rel="noopener noreferrer">Download Company Profile (PDF)</a></li>
            </ul>
          </div>

          {/* Column 4: Plant & Export Desk */}
          <div className="footer-col">
            <h4 className="footer-heading">Plant &amp; Export Desk</h4>
            <div className="footer-contact-block">
              <p className="contact-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>
                  <strong>Plant &amp; Registered Office:</strong><br />
                  R&amp;B Foods (Pvt.) Ltd,<br />
                  Shorkot, District Jhang, Punjab, Pakistan
                </span>
              </p>

              <p className="contact-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>
                  <strong>Export Inquiries:</strong><br />
                  <a href="mailto:export@rbfoods.com.pk">export@rbfoods.com.pk</a><br />
                  <a href="mailto:chairman@rbfoods.com.pk">chairman@rbfoods.com.pk</a>
                </span>
              </p>

              <p className="contact-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>
                  <strong>Plant Tel:</strong> +92 47 5510000<br />
                  <strong>Direct WhatsApp:</strong> +92 300 0000000
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} R&amp;B Foods (Pvt.) Ltd. All Rights Reserved. Plant Location: Shorkot, Punjab, Pakistan.
          </p>
          <div className="footer-bottom-links">
            <span>FOB Karachi &bull; CIF Worldwide</span>
            <span>AIJN &amp; US FDA Food Code Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
