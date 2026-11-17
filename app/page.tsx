'use client';

import React, { useState } from 'react';
import TopProcurementBar from '../components/TopProcurementBar';
import Navbar from '../components/Navbar';
import MobileDrawer from '../components/MobileDrawer';
import HeroFullCover from '../components/HeroFullCover';
import ClientMarquee from '../components/ClientMarquee';
import ProductCatalog from '../components/ProductCatalog';
import BertuzziTech from '../components/BertuzziTech';
import QualityLabTour from '../components/QualityLabTour';
import SeasonalityMatrix from '../components/SeasonalityMatrix';
import PackagingLogistics from '../components/PackagingLogistics';
import RFQCalculator from '../components/RFQCalculator';
import ChairmanPledge from '../components/ChairmanPledge';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';
import ProductModal from '../components/ProductModal';
import { Product } from '../data/products';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [rfqTargetProduct, setRfqTargetProduct] = useState<string>(
    'Chaunsa Mango Puree (Aseptic & Frozen)'
  );

  const handleOpenSpec = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseSpec = () => {
    setSelectedProduct(null);
  };

  const handleSelectRfq = (productName: string) => {
    setSelectedProduct(null);
    setRfqTargetProduct(productName);
    const rfqElement = document.getElementById('rfq-calculator');
    if (rfqElement) {
      rfqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Global Live Hotline & Top Procurement Bar */}
      <TopProcurementBar />

      {/* 2. Responsive Industrial Navigation */}
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <main>
        {/* 3. Full-Bleed Panoramic Hero Showcase with Ken Burns Dynamic Motion */}
        <HeroFullCover />

        {/* 4. Multinational Buyer Marquee */}
        <ClientMarquee />

        {/* 5. Complete Industrial Product Catalog with Interactive Filter Tabs, Hover Animations & Spec Modal */}
        <section id="purees">
          <ProductCatalog
            onOpenSpec={handleOpenSpec}
            onSelectRfq={handleSelectRfq}
          />
        </section>

        {/* 6. Bertuzzi Industrial Provenance, 5-Stage Continuous Line & Live Plant Tour Video */}
        <BertuzziTech />

        {/* 7. Verified On-Site Shorkot Quality Assurance Laboratory Tour (Real Photo Showcase) */}
        <QualityLabTour />

        {/* 8. Horticultural Harvest Seasonality Matrix (Crop Planning Calendar) */}
        <SeasonalityMatrix />

        {/* 9. Global Packaging & Cold Chain Logistics (210kg Steel Drums, 80 Drums/FCL) */}
        <PackagingLogistics />

        {/* 10. Interactive B2B Container RFQ & Freight Calculator */}
        <section id="rfq-calculator">
          <RFQCalculator initialProduct={rfqTargetProduct} />
        </section>

        {/* 11. Executive Governance, Leadership Messages & PDF Corporate Profile */}
        <ChairmanPledge />
      </main>

      {/* 12. Enterprise Footer with Verified Contact Hotline (+92 334 3734786) */}
      <Footer />

      {/* 13. Persistent Direct WhatsApp Desk Floating Widget with Ripple Radar */}
      <WhatsAppFloating />

      {/* 14. Official Shared-Doc Formatted Technical Specification Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseSpec}
        onRequestSample={handleSelectRfq}
      />
    </>
  );
}
