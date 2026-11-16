'use client';

import React from 'react';

export default function PackagingLogistics() {
  return (
    <section className="packaging-section" id="packaging">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-pill">EXPORT LOGISTICS &amp; PACKAGING</span>
          <h2 className="section-title">
            Industrial Packaging Engineered for Ocean Transit
          </h2>
          <p className="section-subtitle">
            Hermetically sealed aseptic packaging ensures up to 24 months of ambient shelf life without chemical preservatives. Shipped from Karachi Port under strict maritime load securing standards.
          </p>
        </div>

        <div className="packaging-grid">
          {/* Packaging Format 1: 215kg Aseptic Steel Drum */}
          <div className="packaging-card">
            <div className="packaging-header">
              <span className="pack-badge">Standard Export Unit</span>
              <h3 className="pack-title">215 KG Aseptic Steel Drum</h3>
              <p className="pack-sub">Multilayer Aseptic Bag-in-Drum System</p>
            </div>
            <ul className="pack-specs-list">
              <li>
                <strong>Internal Liner:</strong> Irradiated multi-layer aluminum-barrier aseptic bag with 2-inch hermetic fill valve.
              </li>
              <li>
                <strong>Outer Drum:</strong> High-gauge cold-rolled steel, internally lined with food-grade epoxy lacquer; external dark green industrial protective enamel.
              </li>
              <li>
                <strong>Net Weight per Drum:</strong> 215.0 kg &plusmn; 1.0 kg (Gross ~235 kg).
              </li>
              <li>
                <strong>Tamper Security:</strong> Serialized security barcode band and tamper-evident cap lock.
              </li>
              <li>
                <strong>Ambient Shelf Life:</strong> 24 months stored below 25&deg;C in clean, dry ambient conditions.
              </li>
            </ul>
          </div>

          {/* Packaging Format 2: 20' FCL Maritime Container Payload */}
          <div className="packaging-card highlighted-pack">
            <div className="packaging-header">
              <span className="pack-badge">Full Container Load (FCL)</span>
              <h3 className="pack-title">20-Foot Dry Marine Container</h3>
              <p className="pack-sub">Standard 20' FCL Ocean Freight Logistics</p>
            </div>
            <ul className="pack-specs-list">
              <li>
                <strong>Container Loading:</strong> 80 Drums per 20' Dry Container (20 heat-treated wooden pallets &times; 4 drums per pallet).
              </li>
              <li>
                <strong>Total Net Cargo Weight:</strong> 17,200 KG (17.20 Metric Tons).
              </li>
              <li>
                <strong>Total Gross Weight:</strong> Approx. 18,800 KG (including drums, pallets &amp; dunnage).
              </li>
              <li>
                <strong>Cargo Securing:</strong> Heavy-duty composite cargo strapping, air dunnage bags, and moisture-absorbing silica gel poles.
              </li>
              <li>
                <strong>Port of Loading:</strong> Karachi Port (QICT / KICT / SAPT terminals).
              </li>
            </ul>
          </div>

          {/* Packaging Format 3: Frozen Puree & Bag-in-Box */}
          <div className="packaging-card">
            <div className="packaging-header">
              <span className="pack-badge">Specialty &amp; Cold Chain</span>
              <h3 className="pack-title">Frozen Pails &amp; 20kg Bag-in-Box</h3>
              <p className="pack-sub">For R&amp;D, Foodservice &amp; Frozen Berry Purees</p>
            </div>
            <ul className="pack-specs-list">
              <li>
                <strong>Frozen Puree Pails:</strong> 18 kg food-grade tamper-evident HDPE pails with airtight gasket lids.
              </li>
              <li>
                <strong>Bag-in-Box (BIB):</strong> 20 kg aseptic EVOH multi-barrier bag in 5-ply heavy corrugated export carton.
              </li>
              <li>
                <strong>Cold Chain Refrigerated FCL:</strong> 40' High-Cube Reefer container maintained at continuous -18&deg;C with digital datalogger.
              </li>
              <li>
                <strong>Target Usage:</strong> Artisan gelato producers, boutique bakeries, craft breweries, and industrial recipe pilot trials.
              </li>
            </ul>
          </div>
        </div>

        {/* Global Transit Time Indicators */}
        <div className="transit-banner">
          <h4 className="transit-title">Direct Ocean Transit Schedules from Karachi Port (FOB / CIF / CFR):</h4>
          <div className="transit-grid">
            <div className="transit-item">
              <span className="transit-port">Jebel Ali (UAE)</span>
              <span className="transit-days">3 &ndash; 5 Days</span>
            </div>
            <div className="transit-item">
              <span className="transit-port">Rotterdam / Antwerp</span>
              <span className="transit-days">20 &ndash; 24 Days</span>
            </div>
            <div className="transit-item">
              <span className="transit-port">Singapore / Port Klang</span>
              <span className="transit-days">10 &ndash; 14 Days</span>
            </div>
            <div className="transit-item">
              <span className="transit-port">Qingdao / Shanghai</span>
              <span className="transit-days">16 &ndash; 20 Days</span>
            </div>
            <div className="transit-item">
              <span className="transit-port">Dammam / Jeddah</span>
              <span className="transit-days">6 &ndash; 9 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
