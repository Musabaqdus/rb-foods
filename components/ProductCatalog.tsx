'use client';

import React, { useState } from 'react';
import { RB_PRODUCTS, Product } from '../data/products';

interface ProductCatalogProps {
  onOpenSpec: (product: Product) => void;
  onSelectRfq: (productName: string) => void;
}

const APPLICATIONS = [
  {
    title: 'Juices & Nectars',
    desc: 'For fruit beverages with characteristic flavour, colour, natural sweetness and rich tropical body.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: 'Ice Cream & Frozen Desserts',
    desc: 'As an authentic fruit ingredient for mango, guava, and tropical fruit-flavoured dairy and sorbet items.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
      </svg>
    )
  },
  {
    title: 'Dessert Toppings & Fillings',
    desc: 'Viscous, smooth fruit bases for sundae dressings, patisserie tarts, cakes, and gourmet confectionery.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <line x1="9" y1="3" x2="9" y2="21"></line>
      </svg>
    )
  },
  {
    title: 'Bakery Products',
    desc: 'Contributes rich natural fruit flavour, natural color, and moisture retention to selected oven baked goods.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 0 1 10 10v8H2v-8a10 10 0 0 1 10-10z"></path>
      </svg>
    )
  },
  {
    title: 'Jams & Fruit Spreads',
    desc: 'Natural pectin-rich fruit base with clean flavour release for commercial jams, marmalades, and fruit butter.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      </svg>
    )
  },
  {
    title: 'Consumer Repacking Packs',
    desc: 'For repacking into smaller retail or food-service pouches, cans, and jars, subject to packer specifications.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  },
  {
    title: 'Dairy-Based Products',
    desc: 'For use in flavoured milk drinks, drinkable yoghurts, Greek yoghurts, and cheese-based desserts.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    )
  },
  {
    title: 'Shakes & Lassi',
    desc: 'Convenient commercial fruit ingredient for authentic mango shakes, traditional mango lassi, and smoothies.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    )
  }
];

export default function ProductCatalog({ onOpenSpec, onSelectRfq }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? RB_PRODUCTS
    : activeCategory === 'mango'
    ? RB_PRODUCTS.filter(p => p.category === 'mango')
    : activeCategory === 'concentrate'
    ? RB_PRODUCTS.filter(p => p.category === 'concentrate')
    : activeCategory === 'guava'
    ? RB_PRODUCTS.filter(p => p.category === 'guava')
    : activeCategory === 'tomato'
    ? RB_PRODUCTS.filter(p => p.category === 'tomato')
    : RB_PRODUCTS.filter(p => p.category === 'tropical');

  const mangoCount = RB_PRODUCTS.filter(p => p.category === 'mango').length;
  const concentrateCount = RB_PRODUCTS.filter(p => p.category === 'concentrate').length;
  const otherCount = RB_PRODUCTS.filter(p => p.category === 'tropical').length;

  return (
    <section className="section" id="purees">
      <div className="container">
        <div className="section-header text-center reveal is-visible">
          <span className="section-kicker">Industrial Specification Portfolio</span>
          <h2 className="section-title">Aseptic Fruit Pulps &amp; Concentrates</h2>
          <p className="section-desc">
            R&amp;B Foods (Pvt.) Ltd. manufactures premium single-strength and concentrated fruit pulps from mature Pakistani crops. Packed in export-ready 200kg, 210kg and 220kg aseptic steel drums and specialized bulk formats.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="product-tabs-wrapper reveal is-visible" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Products ({RB_PRODUCTS.length})
          </button>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'mango' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mango')}
          >
            Mango Pulps ({mangoCount})
          </button>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'concentrate' ? 'active' : ''}`}
            onClick={() => setActiveCategory('concentrate')}
          >
            Fruit Concentrates ({concentrateCount})
          </button>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'guava' ? 'active' : ''}`}
            onClick={() => setActiveCategory('guava')}
          >
            Guava Pulp
          </button>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'tomato' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tomato')}
          >
            Tomato Paste (28-30° Brix)
          </button>
          <button
            type="button"
            className={`tab-btn ${activeCategory === 'tropical' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tropical')}
          >
            Other Purees ({otherCount})
          </button>
        </div>

        {/* Products Grid */}
        <div className="products-grid" id="products-grid-container">
          {filtered.map((product) => (
            <article className="product-card reveal reveal-scale is-visible" key={product.id}>
              <div className="product-card-img-wrap">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-card-badge">{product.badge}</span>
              </div>
              <div className="product-card-body">
                <span className="product-card-botanical">{product.botanical}</span>
                <h3 className="product-card-title">{product.name}</h3>
                <p className="product-card-tagline">{product.overview}</p>

                <div className="product-card-footer">
                  <button
                    type="button"
                    className="btn-spec-view"
                    onClick={() => onOpenSpec(product)}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                    Technical Specs
                  </button>
                  <button
                    type="button"
                    className="btn-sample-req"
                    onClick={() => onSelectRfq(product.name)}
                  >
                    Sample RFQ
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Client Product Information Note / Disclaimer Card */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.75rem',
            background: 'var(--color-cream-100)',
            borderLeft: '4px solid var(--color-gold-500)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            color: 'var(--color-charcoal-700)',
            lineHeight: 1.6
          }}
        >
          <strong style={{ color: 'var(--color-primary-950)', display: 'block', marginBottom: '0.25rem' }}>
            Product Information Note:
          </strong>
          Product availability, variety, Brix, packaging, microbiological and chemical parameters, storage conditions and shelf life should always be confirmed against the latest approved product specification and customer agreement. The descriptions in this document are marketing copy and are not a substitute for a technical data sheet.
        </div>

        {/* Industrial Applications of Fruit Pulp Section */}
        <div style={{ marginTop: '4.5rem' }}>
          <div className="section-header text-center reveal is-visible">
            <span className="section-kicker">Industrial Versatility</span>
            <h3 className="section-title">Applications of Fruit Pulp &amp; Purees</h3>
            <p className="section-desc">
              Fruit pulps and purees are versatile ingredients used by food and beverage manufacturers across a wide spectrum of commercial categories.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem'
            }}
          >
            {APPLICATIONS.map((app, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-cream-200)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div
                  style={{
                    color: 'var(--color-gold-500)',
                    marginBottom: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(217, 119, 6, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {app.icon}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-900)', fontWeight: 700, margin: 0 }}>
                    {app.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-700)', lineHeight: 1.55, margin: 0 }}>
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
