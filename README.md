# R&B Foods (Pvt.) Ltd — Next.js Enterprise B2B Landing Platform

> **Pakistan's Benchmark Manufacturer & Exporter of Certified Aseptic Fruit Purees & Concentrates**  
> Continuous Processing Plant Engineered by **BERTUZZI Food Processing (Milan, Italy)** &bull; Shorkot, Punjab, Pakistan.

---

## 🌟 Overview

This repository contains the full **Next.js 15 (App Router & TypeScript)** implementation of the B2B agro-industrial landing platform for **R&B Foods (Pvt.) Ltd**. Built with an industrial luxury design system tailored specifically for procurement managers at international beverage conglomerates, juice bottlers, and dairy processors.

### Target Client Partners
- **Beverage Brands**: PepsiCo, The Coca-Cola Company, Tropicana, Maaza, Rubicon Exotic, Tops, SixB Foods
- **Dairy & Food Ingredients**: Döhler Global, Engro Foods, Shezan International, Mitchell's Fruit Farms, Dalda Foods

---

## 🚀 Key Architectural Features

1. **Next.js 15 App Router & React 19 Architecture**:
   - Modern component-driven structure (`components/`, `app/`, `data/`).
   - Clean TypeScript types (`Product`, `ProductSpecs`, `SeasonalityItem`).
   - Dynamic Server Route (`/api/rfq`) for B2B RFQ submissions, ready for seamless database attachment (Prisma / PostgreSQL / MongoDB).

2. **Live Right-to-Left Commodity Ticker**:
   - Continuous 60fps moving marquee displaying live harvesting, extraction campaigns, and container shipments.
   - Smart pause-on-hover allowing buyers to inspect metrics without interruption.

3. **Responsive Industrial Header & Mobile Drawer**:
   - Scaled desktop navigation eliminating overflow or button clipping on laptop screens (1366x768 to 4K).
   - Off-canvas slide-out drawer with backdrop blur on mobile viewports (`<= 1180px`).

4. **Interactive B2B Container Load Calculator & RFQ Form**:
   - Real-time calculation of Net Weight (MT), Gross Weight (MT), Pallet configurations, and 20' FCL dry ocean container requirements.
   - Issues verified tracking reference (`RFQ-RB-2026-XXXXXX`) upon quotation request.

5. **Analytical Spec Sheet Modal & Interactive Lab Tour**:
   - Laboratory parameter breakdown: Brix, Acidity, pH, Bostwick Viscosity, and microbiological clearance (TPC, Yeast & Mould, Coliforms, Pathogens).
   - Embedded HTML5 video switcher for QA/QC Lab and Bertuzzi Processing Hall.

---

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── rfq/
│   │       └── route.ts          # Server API Route for commercial RFQs
│   ├── globals.css               # 2,400+ lines custom industrial CSS design system
│   ├── layout.tsx                # Metadata, OpenGraph & Google Fonts
│   └── page.tsx                  # Main client-side landing page
├── components/
│   ├── TopProcurementBar.tsx     # Continuous moving right-to-left commodity ticker
│   ├── Navbar.tsx                # Responsive header with Company Profile PDF CTA
│   ├── MobileDrawer.tsx          # Off-canvas mobile navigation drawer
│   ├── Hero.tsx                  # Hero section with 3D parallax tilt & metrics
│   ├── ClientMarquee.tsx         # Multinational client trust ticker
│   ├── ProductCatalog.tsx        # Filterable puree catalog with analytical pills
│   ├── ProductModal.tsx          # Comprehensive laboratory spec sheet modal
│   ├── BertuzziTech.tsx          # 6-step Bertuzzi Italian continuous line flow
│   ├── QualityLabTour.tsx        # Video player tab switcher & QA certifications
│   ├── SeasonalityMatrix.tsx     # 12-month harvest calendar & peak indicators
│   ├── PackagingLogistics.tsx    # 215kg aseptic steel drum & 20' FCL freight specs
│   ├── RFQCalculator.tsx         # Interactive volume estimator & RFQ form
│   ├── ChairmanPledge.tsx        # Syed Basit Sultan Bukhari executive pledge
│   ├── Footer.tsx                # Registered plant details & corporate links
│   └── WhatsAppFloating.tsx      # Floating export desk WhatsApp button
├── data/
│   └── products.ts               # Master physicochemical & harvest dataset
├── public/
│   ├── docs/                     # Company Profile PDF
│   ├── images/                   # Industrial photography & product imagery
│   ├── logos/                    # Brand and client partner emblems
│   └── video/                    # Lab and facility MP4 video footage
├── next.config.mjs               # Next.js build configuration
├── package.json                  # Dependencies & scripts
└── tsconfig.json                 # TypeScript configuration
```

---

## 🛠️ Local Development & Production

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm start
```

Runs by default at `http://localhost:3000`.
