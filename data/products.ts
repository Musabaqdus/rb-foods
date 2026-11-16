export interface ProductSpecs {
  typicalBrix: string;
  statedBrix: string;
  acidity: string;
  ph: string;
  bostwick: string;
  color: string;
  flavor: string;
  consistency: string;
  ascorbicAcid: string;
  packaging: string;
  shelfLife: string;
  storageTemp: string;
  season: string;
  applications: string;
  nonGmo: string;
}

export interface MicrobiologicalSpecs {
  tpc: string;
  yeastMould: string;
  coliforms: string;
  pathogens: string;
}

export interface Product {
  id: string;
  name: string;
  botanical: string;
  category: "mango" | "guava" | "tropical" | "tomato";
  badge: string;
  tagline: string;
  image: string;
  pulpImage: string;
  overview: string;
  specs: ProductSpecs;
  microbiological: MicrobiologicalSpecs;
}

export const RB_PRODUCTS: Product[] = [
  {
    id: "chaunsa-mango",
    name: "Chaunsa Mango Pulp",
    botanical: "Mangifera indica L. (cv. Chaunsa)",
    category: "mango",
    badge: "Flagship Export",
    tagline: "Valued for its characteristic sweetness, rich aroma and full-bodied tropical flavour.",
    image: "/images/Mango 800x600.jpg",
    pulpImage: "/images/mango-pulp-machinery.jpg",
    overview: "Chaunsa Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean Chaunsa mangoes. Valued for its characteristic sweetness, rich aroma and full-bodied tropical flavour. Suitable for beverages, nectars, desserts, ice cream, bakery fillings and other fruit-based formulations. Classified as a NON-GMO product.",
    specs: {
      typicalBrix: "20° – 25° Brix",
      statedBrix: "20° – 26° Brix (Stated range: 20° – 27° Brix)",
      acidity: "0.60 – 0.85% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Bright Yellow",
      flavor: "Characteristic sweet Chaunsa mango taste",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 PPM",
      packaging: "210 kg aseptic bags in conical / PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "June – August",
      applications: "Juices, nectars, ice creams, toppings, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and mango lassi",
      nonGmo: "100% Non-GMO, Preservative-Free, No Artificial Colors or Flavors"
    },
    microbiological: {
      tpc: "< 10 CFU / g (Total Aerobic Count)",
      yeastMould: "Negative / g",
      coliforms: "Negative / g",
      pathogens: "Absent (Salmonella, E. coli, Listeria)"
    }
  },
  {
    id: "desi-mango",
    name: "Desi Mango Pulp",
    botanical: "Mangifera indica L. (cv. Desi blend)",
    category: "mango",
    badge: "Beverage Blend Core",
    tagline: "Characteristic robust flavour profile engineered for juices, fruit drinks and blends.",
    image: "/images/Mango Pulp 1.jpg",
    pulpImage: "/images/mango-pulp-fresh.jpg",
    overview: "Desi Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean mangoes. Prepared from a blend of Desi mango varieties, creating a characteristic flavour profile for use in juices, fruit drinks and blended products. Classified as a NON-GMO product.",
    specs: {
      typicalBrix: "14° – 18° Brix",
      statedBrix: "14° – 18° Brix (Stated range: 14° – 19° Brix)",
      acidity: "0.80 – 1.20% (as citric acid)",
      ph: "3.70 – 4.10",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Bright Yellow",
      flavor: "Characteristic sweet mango taste",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 PPM",
      packaging: "210 kg aseptic bags in conical / PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "May – July",
      applications: "Juices, nectars, ice creams, toppings, bakery products, jams, smaller consumer packs, mango shakes and lassi",
      nonGmo: "100% Non-GMO, Preservative-Free, No Artificial Colors or Flavors"
    },
    microbiological: {
      tpc: "< 10 CFU / g (Total Aerobic Count)",
      yeastMould: "Negative / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "dusehri-mango",
    name: "Dusehri Mango Pulp",
    botanical: "Mangifera indica L. (cv. Dusehri / Dussehri)",
    category: "mango",
    badge: "Naturally Sweet",
    tagline: "Single-strength pulp offering naturally sweet and recognisable varietal profile.",
    image: "/images/Cutted Mango.jpg",
    pulpImage: "/images/Mango Pulp 2.jpg",
    overview: "Dusehri Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean Dusehri mangoes. Offers a naturally sweet and recognisable varietal profile. It can be used on its own or as a component in blends, beverages and other food formulations. Classified as a NON-GMO product.",
    specs: {
      typicalBrix: "16° – 19° Brix",
      statedBrix: "16° – 19° Brix (Stated range: 16° – 22° Brix)",
      acidity: "0.60 – 0.85% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Ocher Yellow",
      flavor: "Characteristic sweet mango taste",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 PPM",
      packaging: "210 kg aseptic bags in conical / PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "June – July",
      applications: "Juices, nectars, ice creams, toppings, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and lassi",
      nonGmo: "100% Non-GMO, Preservative-Free, No Artificial Colors or Flavors"
    },
    microbiological: {
      tpc: "< 10 CFU / g (Total Aerobic Count)",
      yeastMould: "Negative / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "langra-mango",
    name: "Langra Mango Pulp",
    botanical: "Mangifera indica L. (cv. Langra)",
    category: "mango",
    badge: "Delicate Aroma",
    tagline: "Recognised for its delicate aroma, sweet pulp, and distinctive light-yellow character.",
    image: "/images/Mango Pulp 2.jpg",
    pulpImage: "/images/pulp-jar.jpg",
    overview: "Langra Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean Langra mangoes. Recognised for its green skin, delicate aroma and sweet pulp, providing a distinctive varietal ingredient for manufacturers. Classified as a NON-GMO product.",
    specs: {
      typicalBrix: "17° – 22° Brix",
      statedBrix: "17° – 22° Brix",
      acidity: "0.60 – 0.85% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Bright Yellow",
      flavor: "Characteristic sweet Langra mango taste",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 PPM",
      packaging: "210 kg aseptic bags in conical / PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "July – August",
      applications: "Juices, nectars, ice creams, toppings, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and lassi",
      nonGmo: "100% Non-GMO, Preservative-Free, No Artificial Colors or Flavors"
    },
    microbiological: {
      tpc: "< 10 CFU / g (Total Aerobic Count)",
      yeastMould: "Negative / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "ratool-mango",
    name: "Anwar Ratool Mango Pulp",
    botanical: "Mangifera indica L. (cv. Anwar Ratool)",
    category: "mango",
    badge: "Low-Fibre Aromatic",
    tagline: "Pleasant distinct aroma and thick, low-fibre pulp offering exceptional mango character.",
    image: "/images/Mango Pulp 3.jpg",
    pulpImage: "/images/mango-pulp-drums.jpg",
    overview: "Ratool Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean Ratool mangoes. Known for its pleasant aroma and thick, low-fibre pulp, offering a distinctive mango character for beverage and food applications. Classified as a NON-GMO product.",
    specs: {
      typicalBrix: "18° – 24° Brix",
      statedBrix: "18° – 24° Brix",
      acidity: "0.60 – 0.85% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Bright Yellow",
      flavor: "Characteristic sweet Anwar Ratool mango taste",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 PPM",
      packaging: "210 kg aseptic bags in conical / PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "June – August",
      applications: "Juices, nectars, ice creams, toppings, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and lassi",
      nonGmo: "100% Non-GMO, Preservative-Free, No Artificial Colors or Flavors"
    },
    microbiological: {
      tpc: "< 10 CFU / g (Total Aerobic Count)",
      yeastMould: "Negative / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "white-guava",
    name: "White Guava Pulp",
    botanical: "Psidium guajava L. (White)",
    category: "guava",
    badge: "Natural Vitamin C",
    tagline: "Produced from mature, clean white guavas; creamy-white sterilised puree with sweet flavour.",
    image: "/images/Guava 800x600.jpg",
    pulpImage: "/images/guava-pulp.jpg",
    overview: "White Guava Pulp is produced from mature, clean and ripe white guavas. The creamy-white puree is sterilised and packed in aseptic bags. Its sweet flavour and naturally occurring vitamin C make it suitable for juices, fruit drinks and strained-fruit applications. The stated Brix range is 7–13 °Brix.",
    specs: {
      typicalBrix: "7° – 13° Brix",
      statedBrix: "7° – 13° Brix",
      acidity: "0.45% – 0.75% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "5.0 – 9.0 cm / 30 sec at 20°C (Natural pectin viscosity)",
      color: "Creamy white to light ivory",
      flavor: "Characteristic sweet tropical guava fragrance, zero astringency",
      consistency: "Creamy, smooth strained puree",
      ascorbicAcid: "High Natural Ascorbic Acid",
      packaging: "210 kg net in Aseptic Drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient in unopened aseptic packaging",
      storageTemp: "Ambient / Cool dry storage (< 25°C)",
      season: "September – January",
      applications: "Juices, fruit drinks, strained-fruit applications, nectars, jams, yoghurt and dairy desserts",
      nonGmo: "100% Natural, Preservative-Free"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "peach-pulp",
    name: "Peach Pulp",
    botanical: "Prunus persica",
    category: "tropical",
    badge: "Luscious & Aromatic",
    tagline: "Velvety golden-orange peach pulp with delicate floral perfume and natural fruit sugars.",
    image: "/images/PeACH 800x600.jpg",
    pulpImage: "/images/R&B Foods_Main_Banner 2000x600 Peach.jpg",
    overview: "R&B Foods processes selected orchard-fresh peaches under gentle thermal treatment to retain their delicate summer floral bouquet, velvety golden-orange color, and natural fruit sugars. Ideal for premium juices, baby foods, nectars, and fruit preparations.",
    specs: {
      typicalBrix: "10° – 14° Brix",
      statedBrix: "10° – 14° Brix (Single Strength)",
      acidity: "0.50% – 0.90% (as malic/citric acid)",
      ph: "3.60 – 4.00",
      bostwick: "6.0 – 10.0 cm / 30 sec at 20°C",
      color: "Rich golden orange",
      flavor: "Sweet, authentic ripe summer peach flavour",
      consistency: "Smooth, velvety fruit puree",
      ascorbicAcid: "Min. 150 PPM",
      packaging: "210 kg Aseptic Bag in Steel Drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient aseptic",
      storageTemp: "Cool dry warehouse (< 25°C)",
      season: "May – July",
      applications: "Juices, fruit nectars, infant nutrition, peach iced teas, yoghurts, jams, and bakery fillings",
      nonGmo: "100% Non-GMO, Preservative-Free"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "strawberry-pulp",
    name: "Strawberry Pulp",
    botanical: "Fragaria × ananassa",
    category: "tropical",
    badge: "Brilliant Ruby Red",
    tagline: "Vivid crimson summer strawberry pulp preserving natural anthocyanins and aromatic top-notes.",
    image: "/images/Strawberry 800x600.jpg",
    pulpImage: "/images/strawberry-splash-banner.jpg",
    overview: "Fresh strawberries processed within hours of harvesting to preserve brilliant natural red pigmentation, delicate volatile esters, and natural vitamin C. Available seeded or micro-screened for silkiness in dairy, beverage, and dessert applications.",
    specs: {
      typicalBrix: "7° – 10° Brix",
      statedBrix: "7° – 10° Brix (Single Strength)",
      acidity: "0.80% – 1.30% (as citric acid)",
      ph: "3.40 – 3.80",
      bostwick: "9.0 – 14.0 cm / 30 sec at 20°C",
      color: "Brilliant natural ruby red",
      flavor: "Fresh, vibrant, pleasantly tart sweet strawberry",
      consistency: "Smooth seedless or artisan seeded puree",
      ascorbicAcid: "Min. 200 PPM",
      packaging: "210 kg Aseptic Bag in Steel Drum / 18 kg Frozen Pails",
      shelfLife: "18 months frozen (-18°C) / 12 months ambient",
      storageTemp: "Frozen (-18°C) or Ambient Aseptic (< 20°C)",
      season: "February – April",
      applications: "Dairy ice creams, smoothies, artisan yoghurts, strawberry nectars, cocktails, fruit syrups and preserves",
      nonGmo: "100% Non-GMO, Preservative-Free"
    },
    microbiological: {
      tpc: "< 20 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "falsa-pulp",
    name: "Falsa Pulp",
    botanical: "Grewia asiatica",
    category: "tropical",
    badge: "Exotic Superfruit",
    tagline: "Unique sweet-and-tart exotic berry puree rich in natural purple anthocyanin antioxidants.",
    image: "/images/Falsa 800x600.jpg",
    pulpImage: "/images/R&B Foods_Main_Banner 2000x600 Falsa.jpg",
    overview: "Pakistan’s indigenous Falsa berry (Grewia asiatica) is world-renowned for its refreshing sweet-and-sour astringency and deep royal purple hue. R&B Foods pulps fresh falsa to provide international beverage innovators with a distinctive exotic botanical ingredient.",
    specs: {
      typicalBrix: "8° – 12° Brix",
      statedBrix: "8° – 12° Brix (Single Strength)",
      acidity: "1.20% – 2.00% (as citric acid)",
      ph: "3.10 – 3.60",
      bostwick: "10.0 – 15.0 cm / 30 sec at 20°C",
      color: "Deep royal purple / violet",
      flavor: "Tart, sweet, highly refreshing distinctive berry profile",
      consistency: "Smooth micro-refined purple fruit pulp",
      ascorbicAcid: "Min. 150 PPM",
      packaging: "210 kg Aseptic Bag in Steel Drum / 18 kg Frozen Pails",
      shelfLife: "18 months frozen (-18°C) / 12 months ambient",
      storageTemp: "Frozen (-18°C) or Cold Storage (< 15°C)",
      season: "May – June",
      applications: "Exotic fruit beverages, carbonated craft sodas, wellness shots, sorbets, nectars, and functional syrups",
      nonGmo: "100% Non-GMO, Preservative-Free"
    },
    microbiological: {
      tpc: "< 20 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "tomato-paste",
    name: "Tomato Paste",
    botanical: "Solanum lycopersicum",
    category: "tomato",
    badge: "Industrial Base",
    tagline: "Concentrated tomato ingredient engineered for sauces, ketchup, soups and food manufacturing.",
    image: "/images/tomato-paste-fresh.jpg",
    pulpImage: "/images/tomato-splash-banner.jpg",
    overview: "R&B Foods also includes tomato paste in its product portfolio. Tomato paste is a concentrated tomato ingredient used by food manufacturers in products such as sauces, ketchup, soups and other tomato-based preparations. It provides a convenient tomato base for industrial food formulations.",
    specs: {
      typicalBrix: "28° – 30° Brix (Cold Break / Hot Break)",
      statedBrix: "28° – 36° Brix",
      acidity: "1.50% – 2.50% (as citric acid)",
      ph: "4.00 – 4.40",
      bostwick: "4.0 – 8.0 cm / 30 sec at 20°C",
      color: "Rich deep scarlet red (USDA Grade A equivalent)",
      flavor: "Clean, savory, concentrated tomato flavor without burnt or off notes",
      consistency: "Dense, homogeneous concentrated paste",
      ascorbicAcid: "Natural lycopene rich",
      packaging: "210 kg Aseptic Bag in Steel Drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient in unopened aseptic packaging",
      storageTemp: "Ambient / Cool dry storage (< 25°C)",
      season: "Year-Round Supply",
      applications: "Industrial sauces, ketchup, canned preparations, soups, pizza toppings, and ready-to-eat food bases",
      nonGmo: "100% Non-GMO, Preservative-Free"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  }
];

export interface SeasonalityItem {
  crop: string;
  active: number[];
  peak: number[];
  status: string;
}

export const RB_SEASONALITY: SeasonalityItem[] = [
  { crop: "Desi Mango Pulp", active: [5, 6, 7], peak: [5, 6], status: "Active Harvest Campaign" },
  { crop: "Dusehri Mango Pulp", active: [6, 7], peak: [6], status: "Peak Allocation Booking" },
  { crop: "Anwar Ratool Mango Pulp", active: [6, 7, 8], peak: [6, 7], status: "Forward Contract Booking" },
  { crop: "Chaunsa Mango Pulp (Flagship)", active: [6, 7, 8], peak: [7, 8], status: "High Demand / Reserve Early" },
  { crop: "Langra Mango Pulp", active: [7, 8], peak: [7], status: "Varietal Allocation" },
  { crop: "Peach Pulp", active: [5, 6, 7], peak: [6], status: "Pre-Harvest Booking" },
  { crop: "Falsa Pulp (Exotic Berry)", active: [5, 6], peak: [5, 6], status: "Seasonal Harvest Campaign" },
  { crop: "Strawberry Pulp", active: [2, 3, 4], peak: [3], status: "Fresh Crop Processing" },
  { crop: "White Guava Pulp", active: [9, 10, 11, 12, 1], peak: [10, 11], status: "Aseptic Campaign Active" },
  { crop: "Tomato Paste (Concentrate)", active: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], peak: [2, 3, 4], status: "Year-Round Supply" }
];
