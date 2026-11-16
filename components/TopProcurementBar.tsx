'use client';

import React from 'react';

export default function TopProcurementBar() {
  return (
    <aside className="top-bar" aria-label="Export status announcement">
      <div className="container top-bar-inner">
        {/* Pinned Live Status Badge + Continuous Right-to-Left Ticker */}
        <div className="ticker-wrapper">
          <div className="ticker-badge">
            <span className="status-dot-pulse" aria-hidden="true"></span>
            <span>LIVE CAMPAIGN</span>
          </div>
          <div className="ticker-track-container">
            <div className="ticker-track">
              <span className="ticker-item">
                <strong>Kinnow Mandarin Extraction:</strong> Active Processing at Shorkot Plant (250 MT/Day Intake)
              </span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">
                <strong>Chaunsa Mango:</strong> Forward Allocation Contracts 2026/2027 Open
              </span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">
                <strong>Aseptic 215kg Drums:</strong> Export Shipments Loading at Karachi Port for Jebel Ali, Rotterdam &amp; Qingdao
              </span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">
                <strong>Pink &amp; White Guava:</strong> Industrial Scheduling Active
              </span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">
                <strong>BERTUZZI Italy Line:</strong> 100% Continuous Flash Sterilization
              </span>
              <span className="ticker-sep">&bull;</span>

              {/* Duplicate items for seamless infinite scroll */}
              <span className="ticker-item">
                <strong>Kinnow Mandarin Extraction:</strong> Active Processing at Shorkot Plant (250 MT/Day Intake)
              </span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">
                <strong>Chaunsa Mango:</strong> Forward Allocation Contracts 2026/2027 Open
              </span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">
                <strong>Aseptic 215kg Drums:</strong> Export Shipments Loading at Karachi Port for Jebel Ali, Rotterdam &amp; Qingdao
              </span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">
                <strong>Pink &amp; White Guava:</strong> Industrial Scheduling Active
              </span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">
                <strong>BERTUZZI Italy Line:</strong> 100% Continuous Flash Sterilization
              </span>
              <span className="ticker-sep">&bull;</span>
            </div>
          </div>
        </div>

        <div className="top-bar-links">
          <a href="mailto:export@rbfoods.com.pk" className="top-bar-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            export@rbfoods.com.pk
          </a>
          <a href="tel:+92475510000" className="top-bar-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Plant Hotline
          </a>
          <span className="top-bar-link" style={{ color: 'var(--color-gold-400)', fontWeight: 600 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            FOB Karachi / CIF Global
          </span>
        </div>
      </div>
    </aside>
  );
}
