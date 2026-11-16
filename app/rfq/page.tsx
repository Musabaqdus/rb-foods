'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import TopProcurementBar from '../../components/TopProcurementBar';
import Navbar from '../../components/Navbar';
import MobileDrawer from '../../components/MobileDrawer';
import RFQCalculator from '../../components/RFQCalculator';
import Footer from '../../components/Footer';
import WhatsAppFloating from '../../components/WhatsAppFloating';
import Link from 'next/link';

function RFQContent() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get('product') || 'Chaunsa Mango Puree (Aseptic & Frozen)';

  return (
    <main style={{ paddingTop: '1rem' }}>
      <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-charcoal-600)' }}>
          <Link href="/" style={{ color: 'var(--color-gold-700)', fontWeight: 600 }}>Home</Link>
          <span>&bull;</span>
          <span style={{ color: 'var(--color-primary-900)', fontWeight: 700 }}>Request B2B Export Quote &amp; Commercial Pricing</span>
        </div>
      </div>

      <RFQCalculator initialProduct={initialProduct} key={initialProduct} />
    </main>
  );
}

export default function RFQPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <TopProcurementBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>Loading RFQ Desk...</div>}>
        <RFQContent />
      </Suspense>

      <Footer />
      <WhatsAppFloating />
    </>
  );
}
