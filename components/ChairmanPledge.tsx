'use client';

import React from 'react';

export default function ChairmanPledge() {
  return (
    <section className="section leadership-section" id="leadership">
      <div className="container">
        <div className="leadership-card reveal is-visible">
          <div className="leader-portrait-wrap">
            <img
              src="/images/chairman.jpg"
              alt="Syed Basit Sultan Bukhari - Chairman, R&B Foods (Pvt.) Ltd"
            />
          </div>

          <div className="leader-content">
            <div className="leader-quote-mark">&ldquo;</div>
            <blockquote className="leader-quote-text">
              To us, excellence means not only being the very best at what we do, but holding ourselves to the highest ethical and quality standards. Our Shorkot facility was built with genuine BERTUZZI Italy processing lines to guarantee zero-defect purees for every customer, every single time.
            </blockquote>

            <div className="leader-credentials">
              <span className="leader-name">Syed Basit Sultan Bukhari</span>
              <span className="leader-role">Chairman &bull; R&amp;B Foods (Pvt.) Ltd</span>
              <p className="leader-contact-line">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Direct Office:{' '}
                <a href="mailto:chairman@rbfoods.com.pk">chairman@rbfoods.com.pk</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
