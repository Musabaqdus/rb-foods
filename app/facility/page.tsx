'use client';

import React, { useState } from 'react';
import TopProcurementBar from '../../components/TopProcurementBar';
import Navbar from '../../components/Navbar';
import MobileDrawer from '../../components/MobileDrawer';
import BertuzziTech from '../../components/BertuzziTech';
import Footer from '../../components/Footer';
import WhatsAppFloating from '../../components/WhatsAppFloating';
import Link from 'next/link';

export default function FacilityPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <TopProcurementBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <main style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-charcoal-600)' }}>
            <Link href="/" style={{ color: 'var(--color-gold-700)', fontWeight: 600 }}>Home</Link>
            <span>&bull;</span>
            <span style={{ color: 'var(--color-primary-900)', fontWeight: 700 }}>Processing Facility &amp; BERTUZZI Italian Line</span>
          </div>
        </div>

        <BertuzziTech />
      </main>

      <Footer />
      <WhatsAppFloating />
    </>
  );
}
