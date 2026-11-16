/**
 * R&B Foods (Pvt.) Ltd - Master Product Catalog & Laboratory Specifications
 * Standardized B2B Food Processing & Export Specifications
 */

const RB_PRODUCTS = [
  {
    id: "chaunsa-mango",
    name: "Chaunsa Mango Puree (Aseptic & Frozen)",
    botanical: "Mangifera indica L. (cv. Chaunsa)",
    category: "mango",
    badge: "Flagship Export",
    tagline: "The world's most fragrant mango variety, harvested from the fertile heart of Southern Punjab.",
    image: "assets/images/cutted-mango.jpg",
    pulpImage: "assets/images/mango-pulp.jpg",
    overview: "Chaunsa is globally celebrated for its unparalleled aroma, velvety fiberless consistency, and intense natural sweetness. Processed using BERTUZZI Italy cold de-stoning and HTST aseptic sterilization to preserve raw floral notes without artificial additives or preservatives.",
    specs: {
      brix: "14.0° – 16.0° min (Single Strength) | 28.0° – 30.0° (Concentrate)",
      acidity: "0.40% – 0.70% (as citric acid anhydrous)",
      ph: "3.80 – 4.20",
      bostwick: "7.0 – 11.0 cm / 30 sec at 20°C",
      color: "Deep golden saffron-yellow (USDA Grade A equivalent)",
      flavor: "Intensely sweet, authentic Chaunsa muscat aroma, zero scorched notes",
      packaging: "215 kg net in multi-layer aseptic bag in steel drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient (< 25°C) in unopened aseptic drums; 24 months frozen at -18°C",
      season: "June – August (Forward contracts open in March)",
      applications: "Premium Nectars, Juice Blends, Fruit Yogurts, Dairy Ice Creams, Baby Foods, Confectionery Jellies"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent (Salmonella, E. coli, Listeria)"
    }
  },
  {
    id: "sindhri-ratool-mango",
    name: "Anwar Ratool & Sindhri Mango Puree",
    botanical: "Mangifera indica L. (cv. Sindhri / Anwar Ratool)",
    category: "mango",
    badge: "Aromatic Puree",
    tagline: "High-brix, bright canary-yellow mango puree with distinctive floral bouquet.",
    image: "assets/images/mango-pulp-drums.jpg",
    pulpImage: "assets/images/mango-pulp.jpg",
    overview: "Sindhri and Anwar Ratool represent the earliest harvest of Pakistan's mango season. Characterized by high natural sugar-to-acid ratio and clean citrus-floral top notes, ideal for beverage formulations requiring bright natural coloration and lively taste profile.",
    specs: {
      brix: "15.0° – 17.5° (Single Strength)",
      acidity: "0.35% – 0.65% (as citric acid)",
      ph: "3.90 – 4.30",
      bostwick: "8.0 – 12.0 cm / 30 sec at 20°C",
      color: "Bright radiant yellow to deep yellow-amber",
      flavor: "Rich aromatic honeyed floral mango flavor",
      packaging: "215 kg Aseptic Bag in Steel Drum / 18 kg Frozen Pails",
      shelfLife: "24 months aseptic; 24 months frozen (-18°C)",
      season: "May – July",
      applications: "RTD Beverages, Fruit Sauces, Gelato & Sorbets, Fruit Preparations for Bakery"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "pink-white-guava",
    name: "Pink & White Guava Puree (Aseptic)",
    botanical: "Psidium guajava L.",
    category: "guava",
    badge: "High Pectin",
    tagline: "Creamy, nutrient-rich tropical puree boasting natural pectin and high ascorbic acid.",
    image: "assets/images/guava-pulp.jpg",
    pulpImage: "assets/images/fresh-guava.jpg",
    overview: "Harvested from prime orchards in Punjab, our guava puree is refined through double-stage micro-sieves to eliminate grit (stone cells) while preserving the fruit's luxuriant creamy viscosity and intoxicating tropical perfume.",
    specs: {
      brix: "8.5° – 10.5° (Single Strength)",
      acidity: "0.45% – 0.75% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "5.0 – 9.0 cm / 30 sec at 20°C (High natural pectin viscosity)",
      color: "White / Ivory (White Guava) or Soft Salmon-Pink (Pink Guava)",
      flavor: "Characteristic sweet tropical guava fragrance, zero astringency",
      packaging: "215 kg net in Aseptic Drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient in unopened aseptic packaging",
      season: "September – January (Biannual harvest)",
      applications: "Guava Nectars, Tropical Fruit Blends, Smoothie Bases, Jams & Marmalades"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "kinnow-mandarin",
    name: "Pakistani Kinnow Mandarin Puree & Concentrate",
    botanical: "Citrus nobilis x Citrus deliciosa",
    category: "citrus",
    badge: "Citrus Specialty",
    tagline: "World-famous Indus basin mandarin citrus with superior juice yield and aromatic peel oils.",
    image: "assets/images/orange-slice.jpg",
    pulpImage: "assets/images/kinnow-pulp.jpg",
    overview: "Pakistan's Kinnow is globally renowned for its exceptional sweetness, intense orange pigmentation, and complex aroma. Processed with specialized FMC/Bertuzzi citrus extraction that gently separates the bitter limonoids while retaining fresh natural citrus oils.",
    specs: {
      brix: "10.0° – 12.0° (Single Strength) | 60.0° – 65.0° (Concentrate)",
      acidity: "0.85% – 1.35% (as citric acid anhydrous)",
      ph: "3.20 – 3.70",
      ratio: "Brix / Acid Ratio: 10.0 – 14.5",
      color: "Vibrant deep citrus orange (USDA Grade A equivalent)",
      flavor: "Sweet, lively, pleasantly tangy with fresh citrus aroma",
      packaging: "215 kg net in Aseptic Bag in Drum / 250 kg Frozen Drum",
      shelfLife: "18 months frozen at -18°C / 12 months chilled",
      season: "December – March",
      applications: "Carbonated Citrus Drinks, 100% Breakfast Juices, Flavored Beers & Hard Seltzers, Confectionery"
    },
    microbiological: {
      tpc: "< 50 CFU / g",
      yeastMould: "< 20 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "apple-puree",
    name: "Golden & Red Apple Puree (De-seeded)",
    botanical: "Malus domestica Borkh.",
    category: "temperate",
    badge: "Pure Base",
    tagline: "Natural, smooth, unflavored apple puree for multi-fruit juice bases and infant nutrition.",
    image: "assets/images/apple-pulp.jpg",
    pulpImage: "assets/images/fresh-apple.jpg",
    overview: "Formulated from selected mountain-grown Golden Delicious and Kala Kulu apples. Rapid thermal enzymatic deactivation prevents browning, creating an ultra-clean, neutral fruit base favored by multinational juice manufacturers as a natural sweetener.",
    specs: {
      brix: "10.0° – 12.5° (Single Strength)",
      acidity: "0.25% – 0.50% (as malic acid)",
      ph: "3.60 – 4.00",
      bostwick: "6.0 – 10.0 cm / 30 sec at 20°C",
      color: "Uniform creamy pale amber, free of oxidation",
      flavor: "Delicate fresh sweet apple, zero caramelized notes",
      packaging: "215 kg net Aseptic Drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient in unopened aseptic packaging",
      season: "August – October",
      applications: "Infant Purees & Baby Food, Multi-Fruit Juice Blending, Fruit Fillings, Cider Bases"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "strawberry-puree",
    name: "Fresh Strawberry Puree (Seeded & De-seeded)",
    botanical: "Fragaria x ananassa",
    category: "temperate",
    badge: "Vibrant Color",
    tagline: "Deep crimson berry puree with intact natural seeds or micro-filtered for silkiness.",
    image: "assets/images/fresh-strawberry.jpg",
    pulpImage: "assets/images/strawberry-pulp.jpg",
    overview: "Freshly harvested strawberries processed within hours of picking to lock in brilliant anthocyanin red pigments and delicate summer berry top-notes. Available seeded for premium artisan preserves or de-seeded for smooth dairy beverages.",
    specs: {
      brix: "7.0° – 9.5° (Single Strength)",
      acidity: "0.80% – 1.30% (as citric acid)",
      ph: "3.40 – 3.80",
      bostwick: "9.0 – 14.0 cm / 30 sec at 20°C",
      color: "Vivid ruby-red, 100% natural without artificial dye",
      flavor: "Tart, sweet, aromatic fresh garden strawberry",
      packaging: "190 kg Aseptic Drum / 18 kg Frozen Pails",
      shelfLife: "18 months frozen at -18°C / 12 months ambient aseptic",
      season: "February – April",
      applications: "Artisan Dairy Ice Creams, Premium Yogurts, Strawberry Nectars, Cocktails & Syrups"
    },
    microbiological: {
      tpc: "< 20 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "red-carrot-puree",
    name: "Fresh Red Carrot Puree (High Beta-Carotene)",
    botanical: "Daucus carota subsp. sativus",
    category: "vegetable",
    badge: "Functional Base",
    tagline: "Earthy, naturally sweet vegetable puree engineered for functional wellness drinks and soups.",
    image: "assets/images/carrot-pulp.jpg",
    pulpImage: "assets/images/carrot-pulp.jpg",
    overview: "Sourced from fertile Indus alluvium soils, winter carrots are washed, blanched, and micro-milled to release maximum bioavailable carotenoids. Excellent natural color booster and vitamin-rich foundation for wellness beverage blends.",
    specs: {
      brix: "7.0° – 9.0°",
      acidity: "0.15% – 0.35% (as lactic/citric)",
      ph: "5.20 – 5.80",
      bostwick: "6.0 – 9.0 cm / 30 sec at 20°C",
      color: "Intense uniform scarlet-orange",
      flavor: "Clean, naturally sweet, fresh garden carrot",
      packaging: "215 kg Aseptic Drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient aseptic",
      season: "November – February",
      applications: "Vegetable & Fruit Juice Medleys (ABC Juices), Functional Nutrition Drinks, Baby Food, Soups"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  }
];

const RB_SEASONALITY = [
  { crop: "Pakistani Kinnow Mandarin", active: [1, 2, 3, 12], peak: [1, 2], status: "Active Processing Campaign" },
  { crop: "Fresh Strawberry", active: [2, 3, 4], peak: [3], status: "Pre-Harvest Booking" },
  { crop: "Sindhri Mango", active: [5, 6, 7], peak: [6], status: "Forward Contract Booking" },
  { crop: "Chaunsa Mango (Supreme)", active: [6, 7, 8], peak: [7], status: "High Demand / Reserve Early" },
  { crop: "Anwar Ratool Mango", active: [6, 7], peak: [7], status: "Forward Booking" },
  { crop: "Golden & Red Apple", active: [8, 9, 10], peak: [9], status: "Late Summer Harvest" },
  { crop: "White & Pink Guava", active: [9, 10, 11, 12, 1], peak: [10, 11], status: "Biannual Crop" },
  { crop: "Indus Red Carrot", active: [11, 12, 1, 2], peak: [12, 1], status: "Winter Crop" }
];
