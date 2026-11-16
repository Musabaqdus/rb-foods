export interface ProductSpecs {
  typicalBrix: string;
  statedBrix: string;
  acidity: string;
  ph: string;
  bostwick: string;
  color: string;
  flavor: string;
  packaging: string;
  shelfLife: string;
  season: string;
  applications: string;
  ratio?: string;
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
  category: "mango" | "guava" | "tomato" | "other";
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
    image: "/images/mango-pulp-fresh.jpg",
    pulpImage: "/images/mango-pulp-machinery.jpg",
    overview: "Produced from mature Pakistani Chaunsa mangoes, this pulp is valued for its characteristic sweetness, rich aroma and full-bodied tropical flavour. Its distinctive sensory profile makes it suitable for beverages, nectars, desserts, ice cream, bakery fillings and other fruit-based formulations. The stated Brix range is 20–27 °Brix.",
    specs: {
      typicalBrix: "20–25 °Brix",
      statedBrix: "20–27 °Brix",
      acidity: "0.45% – 0.75% (as citric acid anhydrous)",
      ph: "3.80 – 4.20",
      bostwick: "7.0 – 11.0 cm / 30 sec at 20°C",
      color: "Deep golden saffron-yellow (USDA Grade A equivalent)",
      flavor: "Intensely sweet, authentic Chaunsa muscat aroma, zero scorched notes",
      packaging: "215 kg net in multi-layer aseptic bag in steel drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient (< 25°C) in unopened aseptic drums; 24 months frozen at -18°C",
      season: "June – August",
      applications: "Beverages, nectars, desserts, ice cream, bakery fillings, and fruit-based formulations"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
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
    image: "/images/mango-pulp.jpg",
    pulpImage: "/images/mango-pulp-drums.jpg",
    overview: "Desi Mango Pulp is prepared from a blend of Desi mango varieties, creating a characteristic flavour profile for use in juices, fruit drinks and blended products. Its versatility makes it a useful ingredient for manufacturers developing mango-based beverages and food products. The stated Brix range is 14–19 °Brix.",
    specs: {
      typicalBrix: "14–18 °Brix",
      statedBrix: "14–19 °Brix",
      acidity: "0.50% – 0.85% (as citric acid)",
      ph: "3.70 – 4.10",
      bostwick: "8.0 – 12.0 cm / 30 sec at 20°C",
      color: "Rich golden yellow",
      flavor: "Bold, tangy-sweet authentic mango profile",
      packaging: "215 kg net in multi-layer aseptic bag in steel drum",
      shelfLife: "24 months ambient in unopened aseptic packaging",
      season: "May – July",
      applications: "Juices, fruit drinks, blended beverages, and industrial nectar formulation"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "anwar-ratool-mango",
    name: "Anwar Ratool Mango Pulp",
    botanical: "Mangifera indica L. (cv. Anwar Ratool)",
    category: "mango",
    badge: "Aromatic Puree",
    tagline: "Pleasant distinct aroma and thick, low-fibre pulp offering exceptional varietal character.",
    image: "/images/mango-pulp-drums.jpg",
    pulpImage: "/images/cutted-mango.jpg",
    overview: "Anwar Ratool mango is known for its pleasant aroma and thick, low-fibre pulp. The resulting pulp offers a distinctive mango character for beverage and food applications. The fruit is typically available during the June–August season. The stated Brix range is 18–24 °Brix.",
    specs: {
      typicalBrix: "18–24 °Brix",
      statedBrix: "18–24 °Brix",
      acidity: "0.35% – 0.65% (as citric acid)",
      ph: "3.90 – 4.30",
      bostwick: "8.0 – 12.0 cm / 30 sec at 20°C",
      color: "Bright radiant yellow to golden amber",
      flavor: "Rich aromatic honeyed floral mango bouquet",
      packaging: "215 kg Aseptic Bag in Steel Drum / 18 kg Frozen Pails",
      shelfLife: "24 months ambient aseptic; 24 months frozen (-18°C)",
      season: "June – August",
      applications: "Premium nectars, shakes, lassi, gelato, sorbets, and dairy-based desserts"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "dussehri-mango",
    name: "Dussehri Mango Pulp",
    botanical: "Mangifera indica L. (cv. Dussehri)",
    category: "mango",
    badge: "Naturally Sweet",
    tagline: "Naturally sweet and recognisable varietal profile from mature, naturally ripened fruit.",
    image: "/images/pulp-in-can.jpg",
    pulpImage: "/images/mango-pulp.jpg",
    overview: "Prepared from mature, naturally ripened Pakistani Dussehri mangoes, this single-strength pulp offers a naturally sweet and recognisable varietal profile. It can be used on its own or as a component in blends, beverages and other food formulations. The stated Brix range is 16–22 °Brix.",
    specs: {
      typicalBrix: "16–22 °Brix",
      statedBrix: "16–22 °Brix",
      acidity: "0.40% – 0.65% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "7.5 – 11.0 cm / 30 sec at 20°C",
      color: "Deep warm yellow",
      flavor: "Delicate, sweet, lingering varietal Dussehri taste",
      packaging: "215 kg net in Aseptic Drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient in unopened aseptic packaging",
      season: "June – July",
      applications: "Single-strength juices, components in blends, dessert fillings, and preserves"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "langra-mango",
    name: "Langra Mango Pulp",
    botanical: "Mangifera indica L. (cv. Langra)",
    category: "mango",
    badge: "Unique Varietal",
    tagline: "Delicate aroma, sweet pulp, and characteristic light-yellow pulp profile.",
    image: "/images/pulp-jar.jpg",
    pulpImage: "/images/cutted-mango.jpg",
    overview: "Langra mangoes are recognised for their green skin, delicate aroma and sweet pulp. Langra Mango Pulp provides a varietal ingredient for manufacturers seeking a distinctive mango flavour and light-yellow pulp character. The stated Brix range is 17–22 °Brix.",
    specs: {
      typicalBrix: "17–22 °Brix",
      statedBrix: "17–22 °Brix",
      acidity: "0.45% – 0.70% (as citric acid)",
      ph: "3.85 – 4.25",
      bostwick: "8.0 – 12.0 cm / 30 sec at 20°C",
      color: "Light creamy yellow to soft golden",
      flavor: "Fresh, vibrant, delicate sweet aromatic profile",
      packaging: "215 kg net in Aseptic Drum",
      shelfLife: "24 months ambient in unopened aseptic packaging",
      season: "July – August",
      applications: "Distinctive varietal beverages, confectionery, ice cream, and bakery preparations"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
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
    tagline: "Creamy-white sterilised puree with sweet flavour and natural vitamin C.",
    image: "/images/guava-pulp.jpg",
    pulpImage: "/images/fresh-guava.jpg",
    overview: "White Guava Pulp is produced from mature, clean and ripe white guavas. The creamy-white puree is sterilised and packed in aseptic bags. Its sweet flavour and naturally occurring vitamin C make it suitable for juices, fruit drinks and strained-fruit applications. The stated Brix range is 7–13 °Brix.",
    specs: {
      typicalBrix: "7–13 °Brix",
      statedBrix: "7–13 °Brix",
      acidity: "0.45% – 0.75% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "5.0 – 9.0 cm / 30 sec at 20°C (Natural pectin viscosity)",
      color: "Creamy white to light ivory",
      flavor: "Characteristic sweet tropical guava fragrance, zero astringency",
      packaging: "215 kg net in Aseptic Drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient in unopened aseptic packaging",
      season: "September – January",
      applications: "Juices, fruit drinks, nectars, strained-fruit applications, jams, and dairy desserts"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
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
      typicalBrix: "28–30 °Brix (Cold Break / Hot Break)",
      statedBrix: "28–36 °Brix",
      acidity: "1.50% – 2.50% (as citric acid)",
      ph: "4.00 – 4.40",
      bostwick: "4.0 – 8.0 cm / 30 sec at 20°C",
      color: "Rich deep scarlet red (USDA Grade A equivalent)",
      flavor: "Clean, savory, concentrated tomato flavor without burnt or off notes",
      packaging: "215 kg Aseptic Bag in Steel Drum / 20 kg Bag-in-Box",
      shelfLife: "24 months ambient in unopened aseptic packaging",
      season: "Year-Round Supply",
      applications: "Industrial sauces, ketchup, canned preparations, soups, and ready-to-eat foods"
    },
    microbiological: {
      tpc: "< 10 CFU / g",
      yeastMould: "< 10 CFU / g",
      coliforms: "Negative / g",
      pathogens: "Absent"
    }
  },
  {
    id: "other-fruits",
    name: "Other Fruit Pulp Range (Peach, Falsa & Strawberry)",
    botanical: "Prunus persica / Grewia asiatica / Fragaria × ananassa",
    category: "other",
    badge: "Seasonal Processing",
    tagline: "Identified in company profile; technical specifications furnished upon commercial inquiry.",
    image: "/images/fruit-pulp-portfolio-banner.jpg",
    pulpImage: "/images/strawberry-splash-banner.jpg",
    overview: "The company profile also identifies peach, falsa and strawberry among its fruit processing and product range. Detailed product specifications and descriptions for these products are furnished with approved technical specifications upon commercial contract agreement.",
    specs: {
      typicalBrix: "Varietal Standard (8° – 14° °Bx)",
      statedBrix: "Per Approved Technical Data Sheet",
      acidity: "Per varietal specification",
      ph: "3.40 – 3.90",
      bostwick: "6.0 – 12.0 cm / 30 sec",
      color: "Characteristic natural fruit coloration",
      flavor: "Fresh, unadulterated fruit profile without synthetic additives",
      packaging: "215 kg Aseptic Drum / 18 kg Frozen Pails",
      shelfLife: "24 months ambient (aseptic) / 24 months frozen (-18°C)",
      season: "Seasonal Harvest Windows (Pre-Order)",
      applications: "Beverages, artisan ice creams, fruit preparations, preserves, and confectionery"
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
  { crop: "Desi Mango Pulp", active: [5, 6, 7], peak: [6], status: "Active Harvest Campaign" },
  { crop: "Dussehri Mango Pulp", active: [6, 7], peak: [6, 7], status: "Peak Allocation Booking" },
  { crop: "Anwar Ratool Mango Pulp", active: [6, 7, 8], peak: [7], status: "Forward Contract Booking" },
  { crop: "Chaunsa Mango Pulp (Flagship)", active: [6, 7, 8], peak: [7, 8], status: "High Demand / Reserve Early" },
  { crop: "Langra Mango Pulp", active: [7, 8], peak: [7], status: "Varietal Allocation" },
  { crop: "White Guava Pulp", active: [9, 10, 11, 12, 1], peak: [10, 11], status: "Aseptic Campaign Active" },
  { crop: "Tomato Paste (Concentrate)", active: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], peak: [2, 3, 4], status: "Year-Round Supply" },
  { crop: "Other Fruit Range (Peach, Falsa, Strawberry)", active: [2, 3, 4, 5], peak: [3, 4], status: "Pre-Harvest Booking" }
];
