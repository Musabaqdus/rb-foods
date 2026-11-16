'use client';

import React from 'react';
import { RB_SEASONALITY } from '../data/products';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function SeasonalityMatrix() {
  return (
    <section className="seasonality-section" id="seasonality">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-pill">ANNUAL PROCUREMENT TIMELINE</span>
          <h2 className="section-title">
            Pakistan Agro-Harvest &amp; Processing Matrix
          </h2>
          <p className="section-subtitle">
            Strategic procurement begins at origin. Plan forward booking contracts aligned with peak fruit harvest windows for optimum Brix, fresh aromatic yield, and container vessel priority.
          </p>
        </div>

        <p className="table-scroll-hint">&larr; Swipe sideways to view all 12 calendar months &rarr;</p>

        <div className="seasonality-table-wrapper">
          <table className="seasonality-table">
            <thead>
              <tr>
                <th className="th-crop">Crop Variety</th>
                {MONTHS.map((m, idx) => (
                  <th key={m} className={`th-month ${idx === 0 || idx === 1 ? 'current-season' : ''}`}>
                    {m}
                  </th>
                ))}
                <th className="th-status">Campaign Status</th>
              </tr>
            </thead>
            <tbody>
              {RB_SEASONALITY.map((item, idx) => (
                <tr key={idx}>
                  <td className="td-crop">
                    <strong>{item.crop}</strong>
                  </td>
                  {MONTHS.map((_, mIdx) => {
                    const monthNum = mIdx + 1;
                    const isPeak = item.peak.includes(monthNum);
                    const isActive = item.active.includes(monthNum);

                    return (
                      <td key={mIdx} className="td-cal-cell">
                        {isPeak ? (
                          <div className="cell-indicator peak" title="Peak Harvest Window">
                            Peak
                          </div>
                        ) : isActive ? (
                          <div className="cell-indicator active" title="Active Processing Window"></div>
                        ) : null}
                      </td>
                    );
                  })}
                  <td className="td-status">
                    <span className={`status-pill ${item.status.includes('Active') ? 'pill-active' : ''}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="matrix-legend-row">
          <div className="legend-item">
            <span className="legend-color-box peak"></span>
            <span>Peak Brix &amp; Extraction Window (Recommended for Prime Forward Contracts)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color-box active"></span>
            <span>Active Factory Processing / Intake</span>
          </div>
        </div>
      </div>
    </section>
  );
}
