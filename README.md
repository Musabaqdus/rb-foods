# R&B Foods (Pvt.) Ltd — Official B2B Landing Page Demo

> **Pakistan's Benchmark Manufacturer & Exporter of Certified Aseptic Fruit Purees & Concentrates**  
> Continuous Processing Plant Engineered by **BERTUZZI Food Processing (Milan, Italy)** &bull; Shorkot, Punjab, Pakistan.

---

## 🌟 Overview

This repository contains the enterprise B2B landing page for **R&B Foods (Pvt.) Ltd**. Built from the ground up to showcase authentic agro-industrial credentials to global and regional beverage, dairy, and food processing procurement directors.

### Target Client Partners
- **Beverage Brands**: PepsiCo, The Coca-Cola Company, Tropicana, Maaza, Rubicon Exotic, Tops, SixB Foods
- **Dairy & Food Ingredients**: Döhler Egypt, Engro Foods, Shezan International, Mitchell's Fruit Farms, Dalda Foods

---

## 🚀 Key Features

1. **Adaptive & Responsive Navigation**:
   - Compact desktop layout with proportional link padding, guaranteed zero cutoff across all display resolutions.
   - Slide-over drawer navigation for tablets and mobile viewports with blur backdrop.

2. **Scroll Reveal & Motion Engine (60fps)**:
   - IntersectionObserver-based animations for cards, headers, and specifications.
   - Dynamic animated metric counters counting up to `35,000 MT`, `215 KG`, `100% Zero Defect`, and `14+ Countries`.
   - Subtle ambient glow orbs and 3D mouse parallax on the flagship Chaunsa hero card.

3. **Interactive Industrial Product Catalog**:
   - Filter by *Mango Specialties (Chaunsa, Sindhri, Anwar Ratool)*, *Pink & White Guava*, *Indus Kinnow Mandarin*, *Apple & Berries*, and *Vegetables*.
   - **Interactive Technical Spec Sheet Modal**: Detailed physico-chemical, organoleptic, and microbiological standards (TPC, Yeast & Mould, Coliforms, Pathogens) with a **"Print / Save Spec Sheet"** action.

4. **Interactive Crop Harvest & Seasonality Matrix**:
   - Visual 12-month calendar mapping Pakistani fruit harvest and peak processing campaigns for international supply chain planners.

5. **Live B2B Quotation & Sample Request Calculator**:
   - Allows procurement managers to pick volume in Metric Tons (1 to 500 MT), packaging format (215kg Aseptic Steel Drum, 20kg Bag-in-Box, 18kg Frozen Pail), and destination port (*Karachi FOB, Jebel Ali CIF, Rotterdam CIF, Qingdao, London, New York*).
   - Dynamically calculates: Net Weight, Drum Count, 20' FCL Containers required, and Gross Transit Weight.
   - Generates an instant **1-Click WhatsApp RFQ** and formal commercial submission.

6. **Interactive Facility & Laboratory Tour**:
   - Embedded HTML5 video player toggling between the **In-House Quality Assurance Laboratory** and the **Bertuzzi Continuous Processing Line**.

---

## 📁 Project Structure

```
d:/rb foods/
├── index.html                   # Main landing page
├── server.js                    # Zero-dependency local Node.js demo server
├── README.md                    # Project documentation
├── .gitignore                   # Git ignore rules
└── assets/
    ├── css/
    │   └── styles.css           # Complete responsive & animated design system
    ├── js/
    │   ├── products-data.js     # Laboratory specifications & harvest datasets
    │   └── main.js              # Motion engine, counters, drawer, & RFQ calculator
    ├── docs/
    │   └── company-profile.pdf  # Downloadable corporate profile PDF
    ├── images/                  # High-resolution product & facility photography
    ├── logos/                   # R&B Foods brand & client partner logos
    └── video/                   # Plant processing & laboratory MP4 tours
```

---

## 💻 Local Preview & Setup

No dependencies or build steps required.

### Option 1: Direct File
Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

### Option 2: Local Demo Server
Run using Node.js:
```bash
node server.js
```
Then navigate to: **[http://localhost:3000](http://localhost:3000)**

---

&copy; 2026 R&B Foods (Pvt.) Ltd. All rights reserved.
