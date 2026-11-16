'use client';

import React from 'react';
import { RB_SEASONALITY } from '../data/products';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function SeasonalityMatrix() {
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

        <div className="seasonality-wrapper reveal is-visible delay-100">
          <div className="table-scroll-hint">
            <span>&#8644; Swipe horizontally to view full 12-month calendar</span>
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

          <div className="season-legend">
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
      </div>
    </section>
  );
}
