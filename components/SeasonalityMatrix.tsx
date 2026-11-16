'use client';

import React, { useState } from 'react';
import { RB_SEASONALITY } from '../data/products';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function SeasonalityMatrix() {
  const [mobileView, setMobileView] = useState<'matrix' | 'cards'>('cards');

  return (
    <section className="section section-alt" id="seasonality">
      <div className="container">
        <div className="section-header reveal is-visible">
          <span className="section-kicker">Supply Chain Planning</span>
          <h2 className="section-title">Pakistani Horticultural Harvest Matrix</h2>
          <p className="section-desc">
            Plan annual juice, dairy, and beverage blending schedules with precision. Peak harvest campaigns are contracted months in advance to guarantee crop allocations and pricing.
          </p>
        </div>

        {/* Mobile View Toggle Switch */}
        <div
          className="season-view-toggle"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1.25rem'
          }}
        >
          <button
            type="button"
            onClick={() => setMobileView('cards')}
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.82rem',
              fontWeight: mobileView === 'cards' ? 700 : 500,
              borderRadius: 'var(--radius-full)',
              border: mobileView === 'cards' ? '1.5px solid var(--color-gold-500)' : '1px solid var(--color-cream-300)',
              background: mobileView === 'cards' ? 'var(--color-gold-500)' : '#FFFFFF',
              color: mobileView === 'cards' ? '#000000' : 'var(--color-charcoal-700)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            📋 Crop Schedule Cards
          </button>
          <button
            type="button"
            onClick={() => setMobileView('matrix')}
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.82rem',
              fontWeight: mobileView === 'matrix' ? 700 : 500,
              borderRadius: 'var(--radius-full)',
              border: mobileView === 'matrix' ? '1.5px solid var(--color-gold-500)' : '1px solid var(--color-cream-300)',
              background: mobileView === 'matrix' ? 'var(--color-gold-500)' : '#FFFFFF',
              color: mobileView === 'matrix' ? '#000000' : 'var(--color-charcoal-700)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            📊 12-Month Grid Table
          </button>
        </div>

        {/* Card View (Ultra-Friendly for Mobile & Touchscreens) */}
        {mobileView === 'cards' && (
          <div
            className="season-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}
          >
            {RB_SEASONALITY.map((item, idx) => {
              const peakMonths = item.peak.map(m => MONTHS[m - 1]).join(' – ');
              const activeMonths = item.active.map(m => MONTHS[m - 1]).join(', ');

              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-cream-200)',
                    padding: '1.15rem 1.25rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.65rem' }}>
                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-900)' }}>
                      {item.crop}
                    </h4>
                    <span className="crop-status-tag" style={{ fontSize: '0.68rem', padding: '0.2rem 0.55rem', whiteSpace: 'nowrap' }}>
                      {item.status}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--color-gold-700)', fontWeight: 700, minWidth: '85px' }}>
                        🔥 Peak Run:
                      </span>
                      <strong style={{ color: 'var(--color-primary-900)' }}>
                        {peakMonths}
                      </strong>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--color-charcoal-600)', minWidth: '85px' }}>
                        Active Intake:
                      </span>
                      <span style={{ color: 'var(--color-charcoal-800)' }}>
                        {activeMonths}
                      </span>
                    </div>
                  </div>

                  {/* 12-Month Visual Bar */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(12, 1fr)',
                      gap: '3px',
                      background: 'var(--color-cream-100)',
                      padding: '4px',
                      borderRadius: '6px'
                    }}
                  >
                    {MONTHS.map((m, mIdx) => {
                      const monthNum = mIdx + 1;
                      const isPeak = item.peak.includes(monthNum);
                      const isActive = item.active.includes(monthNum);

                      let bg = 'transparent';
                      let color = 'var(--color-charcoal-400)';
                      if (isPeak) {
                        bg = 'var(--color-gold-500)';
                        color = '#FFFFFF';
                      } else if (isActive) {
                        bg = 'rgba(229, 140, 5, 0.25)';
                        color = 'var(--color-gold-800)';
                      }

                      return (
                        <div
                          key={m}
                          style={{
                            textAlign: 'center',
                            fontSize: '0.62rem',
                            fontWeight: isPeak ? 800 : 500,
                            padding: '3px 0',
                            borderRadius: '3px',
                            background: bg,
                            color: color
                          }}
                          title={`${m}: ${isPeak ? 'Peak' : isActive ? 'Active' : 'Off-season'}`}
                        >
                          {m[0]}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Full 12-Month Grid Table View with Sticky First Column */}
        {mobileView === 'matrix' && (
          <div className="seasonality-wrapper reveal is-visible delay-100">
            <div className="table-scroll-hint">
              <span>&#8644; Swipe horizontally &bull; Crop names stay pinned on left</span>
            </div>
            <table className="season-table" aria-label="Fruit Harvest and Processing Calendar">
              <thead>
                <tr>
                  <th>Puree Variety / Crop</th>
                  {MONTHS.map(m => (
                    <th key={m}>{m}</th>
                  ))}
                  <th className="season-badge-col">Contract Status</th>
                </tr>
              </thead>
              <tbody>
                {RB_SEASONALITY.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong>{item.crop}</strong>
                    </td>
                    {MONTHS.map((m, mIdx) => {
                      const monthNum = mIdx + 1;
                      const isPeak = item.peak.includes(monthNum);
                      const isActive = item.active.includes(monthNum);

                      let cls = '';
                      let text = '';
                      if (isPeak) {
                        cls = 'month-peak';
                        text = '●';
                      } else if (isActive) {
                        cls = 'month-active';
                        text = '—';
                      }

                      return (
                        <td
                          key={m}
                          className={`month-cell ${cls}`}
                          title={`${m}: ${isPeak ? 'Peak Processing' : (isActive ? 'Active Processing' : 'Off-season')}`}
                        >
                          {text}
                        </td>
                      );
                    })}
                    <td className="season-badge-col">
                      <span className="crop-status-tag">{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="season-legend" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
          <div className="legend-item">
            <span className="legend-swatch swatch-peak"></span>
            <span>Peak Processing Run</span>
          </div>
          <div className="legend-item">
            <span className="legend-swatch swatch-active"></span>
            <span>Active Harvest Campaign</span>
          </div>
        </div>
      </div>
    </section>
  );
}
