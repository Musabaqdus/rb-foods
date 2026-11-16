'use client';

import React from 'react';

export default function ChairmanPledge() {
  return (
    <section className="leadership-section" id="leadership">
      <div className="container">
        <div className="leadership-card">
          <div className="leadership-portrait-wrap">
            <div className="portrait-inner">
              <div className="portrait-avatar-placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-400)" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="portrait-initials">SBSB</span>
              </div>
              <div className="portrait-badge">CHAIRMAN &amp; FOUNDER</div>
            </div>
            <div className="leadership-creds">
              <h3 className="leader-name">Syed Basit Sultan Bukhari</h3>
              <p className="leader-role">Chairman &amp; Managing Director</p>
              <p className="leader-org">R&amp;B Foods (Pvt.) Ltd</p>
            </div>
          </div>

          <div className="leadership-content">
            <span className="section-pill" style={{ background: 'rgba(217, 119, 6, 0.15)', borderColor: 'rgba(217, 119, 6, 0.35)', color: '#F59E0B' }}>
              EXECUTIVE GOVERNANCE PLEDGE
            </span>
            <h2 className="leader-headline">
              &ldquo;An Uncompromising Standard for Pakistani Agro-Industrial Exports.&rdquo;
            </h2>

            <blockquote className="leader-quote">
              &ldquo;At R&amp;B Foods, we founded this enterprise on an unwavering industrial tenet: to harness Pakistan’s exceptional horticultural gift and process it with the world’s most advanced Italian engineering. When global beverage and dairy leaders place their confidence in our aseptic drums, they receive absolute microbial sterility, consistent natural brix and aroma profiles, and an ethical, traceable supply chain that honours both our farmers and international consumers.&rdquo;
            </blockquote>

            <div className="leader-meta-row">
              <div className="leader-meta-item">
                <span className="meta-label">Facility Registration:</span>
                <span className="meta-val">Shorkot Industrial Plant, Jhang, Punjab</span>
              </div>
              <div className="leader-meta-item">
                <span className="meta-label">Direct Executive Desk:</span>
                <a href="mailto:chairman@rbfoods.com.pk" className="meta-val" style={{ color: 'var(--color-gold-400)' }}>
                  chairman@rbfoods.com.pk
                </a>
              </div>
              <div className="leader-meta-item">
                <span className="meta-label">Commercial Governance:</span>
                <span className="meta-val">100% Tax &amp; SECP Registered Industrial Exporter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
