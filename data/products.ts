export interface ProductSpecs {
  typicalBrix: string;
  statedBrix: string;
  acidity: string;
  ph: string;
  bostwick?: string;
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
  howardMold?: string;
}

export interface Product {
  id: string;
  name: string;
  botanical: string;
  category: "mango" | "guava" | "tropical" | "tomato" | "concentrate";
  badge: string;
  tagline: string;
  image: string;
  pulpImage: string;
  overview: string;
  specs: ProductSpecs;
  microbiological: MicrobiologicalSpecs;
}

export const RB_PRODUCTS: Product[] = [
  // 1. Chaunsa Mango Pulp
  {
    id: "chaunsa-mango",
    name: "Chaunsa Mango Pulp",
    botanical: "Mangifera indica L. (cv. Chaunsa)",
    category: "mango",
    badge: "Flagship Export Pulp",
    tagline: "Valued for its characteristic sweetness, rich aroma and full-bodied tropical flavour.",
    image: "/images/Mango 800x600.jpg",
    pulpImage: "/images/mango-pulp-machinery.jpg",
    overview: "Chaunsa Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative free made from edible part of ripe, healthy, and clean Chaunsa mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "20° – 26° Brix",
      statedBrix: "20° – 26° Brix",
      acidity: "0.60 – 0.85% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Bright Yellow",
      flavor: "Characteristic of variety (Sweet mango taste)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 ppm",
      packaging: "Filled in 210 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "June – August",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and lassi",
      nonGmo: "100% Fresh Chaunsa Mango, Citric Acid, Ascorbic Acid (minimal quantity to adjust pH). No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 CFU/g",
      yeastMould: "Negative"
    }
  },

  // 2. Desi Mango Pulp
  {
    id: "desi-mango",
    name: "Desi Mango Pulp",
    botanical: "Mangifera indica L. (cv. Desi blend)",
    category: "mango",
    badge: "Beverage Core Pulp",
    tagline: "Characteristic robust flavour profile engineered for juices, fruit drinks and blends.",
    image: "/images/Mango Pulp 1.jpg",
    pulpImage: "/images/mango-pulp-fresh.jpg",
    overview: "Desi Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "14° – 18° Brix",
      statedBrix: "14° – 18° Brix",
      acidity: "0.80 – 1.20% (as citric acid)",
      ph: "3.70 – 4.10",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Bright Yellow",
      flavor: "Characteristic of variety (Sweet mango taste)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 PPM",
      packaging: "Filled in 210 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "May – July",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and lassi",
      nonGmo: "100% Fresh Mango, Citric Acid, Ascorbic Acid (minimal quantity to adjust pH). No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 CFU/g",
      yeastMould: "Negative"
    }
  },

  // 3. Dusehri Mango Pulp
  {
    id: "dusehri-mango",
    name: "Dusehri Mango Pulp",
    botanical: "Mangifera indica L. (cv. Dusehri)",
    category: "mango",
    badge: "Naturally Sweet Pulp",
    tagline: "Single-strength pulp offering naturally sweet and recognisable varietal profile.",
    image: "/images/Cutted Mango.jpg",
    pulpImage: "/images/Mango Pulp 2.jpg",
    overview: "Dusehri Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative free made from edible part of ripe, healthy, and clean Dusehri mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "16° – 19° Brix",
      statedBrix: "16° – 19° Brix",
      acidity: "0.60 – 0.85% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Ocher Yellow",
      flavor: "Characteristic of variety (Sweet mango taste)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 ppm",
      packaging: "Filled in 210 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "June – July",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and lassi",
      nonGmo: "100% Fresh Dusehri Mango, Citric Acid, Ascorbic Acid (minimal quantity to adjust pH). No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 CFU/g",
      yeastMould: "Negative"
    }
  },

  // 4. Langra Mango Pulp
  {
    id: "langra-mango",
    name: "Langra Mango Pulp",
    botanical: "Mangifera indica L. (cv. Langra)",
    category: "mango",
    badge: "Delicate Aroma Pulp",
    tagline: "Recognised for its delicate aroma, sweet pulp, and distinctive light-yellow character.",
    image: "/images/Mango Pulp 2.jpg",
    pulpImage: "/images/pulp-jar.jpg",
    overview: "Langra Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative free made from edible part of ripe, healthy, and clean Langra mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "17° – 22° Brix",
      statedBrix: "17° – 22° Brix",
      acidity: "0.60 – 0.85% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Bright Yellow",
      flavor: "Characteristic of variety (Sweet mango taste)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 ppm",
      packaging: "Filled in 210 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "July – August",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and lassi",
      nonGmo: "100% Fresh Langra Mango, Citric Acid, Ascorbic Acid (minimal quantity to adjust pH). No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 CFU/g",
      yeastMould: "Negative"
    }
  },

  // 5. Anwar Ratool Mango Pulp
  {
    id: "ratool-mango",
    name: "Anwar Ratool Mango Pulp",
    botanical: "Mangifera indica L. (cv. Anwar Ratool)",
    category: "mango",
    badge: "Low-Fibre Aromatic Pulp",
    tagline: "Pleasant distinct aroma and thick, low-fibre pulp offering exceptional mango character.",
    image: "/images/Mango Pulp 3.jpg",
    pulpImage: "/images/mango-pulp-drums.jpg",
    overview: "Ratool Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean Ratool mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "18° – 24° Brix",
      statedBrix: "18° – 24° Brix",
      acidity: "0.60 – 0.85% (as citric acid)",
      ph: "3.80 – 4.20",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Bright Yellow",
      flavor: "Characteristic of variety (Sweet mango taste)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 ppm",
      packaging: "Filled in 210 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "June – August",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and lassi",
      nonGmo: "100% Fresh Ratool Mango, Citric Acid, Ascorbic Acid (minimal quantity to adjust pH). No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 cfu/g",
      yeastMould: "Negative"
    }
  },

  // 6. Sindhri Mango Pulp
  {
    id: "sindhri-mango",
    name: "Sindhri Mango Pulp",
    botanical: "Mangifera indica L. (cv. Sindhri)",
    category: "mango",
    badge: "Aromatic Premium Pulp",
    tagline: "Undiluted, unevaporated, preservative-free made from ripe, clean Sindhri mangoes.",
    image: "/images/Mango Pulp 4.jpg",
    pulpImage: "/images/Cutted Mango.jpg",
    overview: "Sindhri Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean Sindhri mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "Min. 14° Brix",
      statedBrix: "Min. 14° Brix",
      acidity: "0.80 – 1.20% (as citric acid)",
      ph: "3.70 – 4.10",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Bright Yellow",
      flavor: "Characteristic of variety (Sweet mango taste)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 ppm",
      packaging: "Filled in 210 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "May – June",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, mango shake and mango lassi",
      nonGmo: "100% Fresh Sindhri Mango, Citric Acid, Ascorbic Acid (minimal quantity to adjust pH). No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 cfu/g",
      yeastMould: "< 10 cfu/g"
    }
  },

  // 7. Chaunsa Mango Concentrate (28-30° Brix)
  {
    id: "chaunsa-mango-concentrate",
    name: "Chaunsa Mango Concentrate",
    botanical: "Mangifera indica L. (cv. Chaunsa Concentrate)",
    category: "concentrate",
    badge: "28–30° Brix Concentrate",
    tagline: "Vacuum concentrated to 28-30° Brix from ripe, clean Chaunsa mangoes.",
    image: "/images/Mango 800x600.jpg",
    pulpImage: "/images/mango-pulp-machinery.jpg",
    overview: "Chaunsa Mango Concentrate, is made by processing edible part of ripe, healthy, and clean Chaunsa mangoes & then concentrating it to 28-30°Brix by evaporation under vacuum. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "28 – 30° Brix",
      statedBrix: "28 – 30° Brix",
      acidity: "0.70 – 1.30% (as citric acid)",
      ph: "3.50 – 4.20",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Yellow",
      flavor: "Characteristic of variety (Sweet mango taste)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 ppm",
      packaging: "Filled in 220 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "24 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "June – August",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and lassi",
      nonGmo: "100% Fresh Chaunsa Mango, Citric Acid, Ascorbic Acid. No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 CFU/g",
      yeastMould: "Negative"
    }
  },

  // 8. Desi Mango Concentrate (28-30° Brix)
  {
    id: "desi-mango-concentrate",
    name: "Desi Mango Concentrate",
    botanical: "Mangifera indica L. (cv. Desi Concentrate)",
    category: "concentrate",
    badge: "28–30° Brix Concentrate",
    tagline: "Vacuum concentrated to 28-30° Brix from ripe, clean Desi mangoes.",
    image: "/images/Mango Pulp 1.jpg",
    pulpImage: "/images/mango-pulp-fresh.jpg",
    overview: "Desi Mango Concentrate, is made by processing edible part of ripe, healthy, and clean Desi mangoes & then concentrating it to 28-30°Brix by evaporation under vacuum. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "28 – 30° Brix",
      statedBrix: "28 – 30° Brix",
      acidity: "0.70 – 1.30% (as citric acid)",
      ph: "3.50 – 4.20",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Yellow",
      flavor: "Characteristic of variety (Sweet mango taste)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 ppm",
      packaging: "Filled in 220 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "May – July",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, mango shakes and lassi",
      nonGmo: "100% Fresh Desi Mango, Citric Acid, Ascorbic Acid. No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 cfu/g",
      yeastMould: "Negative"
    }
  },

  // 9. Guava Pulp (07°-12° Brix)
  {
    id: "white-guava",
    name: "Guava Pulp",
    botanical: "Psidium guajava L.",
    category: "guava",
    badge: "Aseptic Single-Strength",
    tagline: "Undiluted, unevaporated, preservative-free made by crushing ripe, clean Guavas.",
    image: "/images/Guava 800x600.jpg",
    pulpImage: "/images/guava-pulp.jpg",
    overview: "Guava pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made by crushing ripe, healthy, and clean Guavas. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "07° – 12° Brix",
      statedBrix: "07° – 12° Brix",
      acidity: "0.30 – 0.70% (as citric acid)",
      ph: "3.90 – 4.40",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Creamy White",
      flavor: "Characteristic of variety (Sweet Guava taste)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 200 ppm",
      packaging: "Filled in 200 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "September – January",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, guava shake and guava lassi",
      nonGmo: "100% Fresh Guava, Citric Acid (minimal quantity to adjust pH). No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 CFU/g",
      yeastMould: "Negative"
    }
  },

  // 10. Strawberry Puree Aseptic
  {
    id: "strawberry-puree",
    name: "Strawberry Puree Aseptic",
    botanical: "Fragaria ananassa",
    category: "tropical",
    badge: "Aseptic Single-Strength",
    tagline: "Undiluted, unevaporated, preservative-free made from ripe, clean strawberries.",
    image: "/images/Strawberry.jpg",
    pulpImage: "/images/strawberry-pulp.jpg",
    overview: "Strawberry Puree Aseptic, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean strawberries. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "Min. 6° Brix",
      statedBrix: "Min. 6° Brix",
      acidity: "0.50 – 1.50% (as citric acid)",
      ph: "3.30 – 3.90",
      bostwick: "Smooth pureed texture",
      color: "Dark Red",
      flavor: "Characteristic of variety (Sweet Strawberry Taste)",
      consistency: "Smooth pureed fruit texture",
      ascorbicAcid: "300 – 400 ppm",
      packaging: "Filled in 200 kgs aseptic bags in conical/PPL steel drums having polylinear bags in-between",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "January – March",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk, cheese & yogurt, strawberry shake and strawberry lassi",
      nonGmo: "100% Fresh Strawberries, Ascorbic Acid. No preservatives, colors or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 CFU/g",
      yeastMould: "Negative"
    }
  },

  // 11. Peach Puree Aseptic
  {
    id: "peach-puree",
    name: "Peach Puree Aseptic",
    botanical: "Prunus persica",
    category: "tropical",
    badge: "Aseptic Single-Strength",
    tagline: "Undiluted, unevaporated, preservative-free made from ripe, clean peach fruit.",
    image: "/images/PeACH 800x600.jpg",
    pulpImage: "/images/plant-machinery.jpeg",
    overview: "Peach Puree, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean peach fruit. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "Min. 9° Brix",
      statedBrix: "Min. 9° Brix",
      acidity: "0.40 – 0.75%",
      ph: "3.40 – 3.80",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Bright Brownish-pink",
      flavor: "Characteristic of variety (Sweet Peach Taste)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 300 ppm",
      packaging: "Filled in 210 kgs aseptic bags in conical / PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "May – July",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, peach shake and peach lassi",
      nonGmo: "100% Fresh Peach, Citric Acid, Ascorbic Acid (minimal quantity to adjust pH). No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 cfu/g",
      yeastMould: "< 10 cfu/g"
    }
  },

  // 12. Peach Concentrate (30-32° Brix)
  {
    id: "peach-concentrate",
    name: "Peach Concentrate",
    botanical: "Prunus persica (Concentrate)",
    category: "concentrate",
    badge: "30–32° Brix Concentrate",
    tagline: "Vacuum concentrated to 30-32° Brix from fresh, mature, clean peaches.",
    image: "/images/PeACH 800x600.jpg",
    pulpImage: "/images/plant-machinery.jpeg",
    overview: "Peach Concentrate, is obtained by processing fresh, mature and clean peaches & then concentrating it to 30-32°Brix by evaporation under vacuum. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "30 – 32° Brix",
      statedBrix: "30 – 32° Brix",
      acidity: "Min. 0.50% (as tartaric acid)",
      ph: "3.50 – 4.40",
      bostwick: "5 – 12 cm / 30 sec",
      color: "Dark Yellow",
      flavor: "Characteristic of variety (Typical of Peach)",
      consistency: "Viscous fruit concentrate",
      ascorbicAcid: "Min. 200 ppm",
      packaging: "Filled in 220 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "May – July",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, peach shake",
      nonGmo: "100% Fresh Peaches, Ascorbic Acid. No preservatives, colors or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 50 CFU/g",
      yeastMould: "Negative"
    }
  },

  // 13. Apple Puree (20-24° Brix)
  {
    id: "apple-puree",
    name: "Apple Puree",
    botanical: "Malus domestica",
    category: "tropical",
    badge: "20–24° Brix Puree",
    tagline: "Vacuum concentrated to 20-24° Brix from fresh, mature, clean Apples.",
    image: "/images/Apple Pulp 1.jpg",
    pulpImage: "/images/apple-pulp.jpg",
    overview: "Apple Puree, is obtained by processing fresh, mature and clean Apples & then concentrating it to 20-24°Brix by evaporation under vacuum. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "20 – 24° Brix",
      statedBrix: "20 – 24° Brix",
      acidity: "0.30 – 0.70% (as citric acid)",
      ph: "3.50 – 4.30",
      bostwick: "Smooth strained apple puree",
      color: "Intense Yellow",
      flavor: "Characteristic of variety (Typical of Apple)",
      consistency: "Smooth strained apple puree",
      ascorbicAcid: "Max. 500 ppm",
      packaging: "Filled in 210 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "August – October",
      applications: "Major use in juices and nectars, infant nutritious foods, bakery and dairy applications",
      nonGmo: "100% Fresh Apples, Citric Acid, Ascorbic Acid. No preservatives, colors or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 cfu/g",
      yeastMould: "< 10 cfu/g"
    }
  },

  // 14. Tomato Paste (28-30° Brix)
  {
    id: "tomato-paste",
    name: "Tomato Paste",
    botanical: "Solanum lycopersicum",
    category: "tomato",
    badge: "28–30° Brix Cold Break",
    tagline: "Rich, full-bodied paste concentrated to 28-30° Brix from vine-ripened tomatoes.",
    image: "/images/tomato-paste.jpg",
    pulpImage: "/images/tomato-paste-fresh.jpg",
    overview: "Tomato Paste is made from finest, vine-ripened tomatoes, which are carefully processed to capture the true essence of this beloved fruit then concentrating it to 28-30°Brix by evaporation under vacuum. The result is a rich and full-bodied tomato paste. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "28 – 30° Brix",
      statedBrix: "28 – 30° Brix",
      acidity: "1.50 – 2.50% (as citric acid)",
      ph: "4.10 – 4.40",
      bostwick: "04 – 07 cm / 30 sec at 12° Brix",
      color: "Min. 1.90 (a/b Color Value)",
      flavor: "Characteristic of variety (Typical of Tomatoes)",
      consistency: "Heavy viscous concentrated paste",
      ascorbicAcid: "Naturally occurring",
      packaging: "Filled in 220 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "24 months from date of production",
      storageTemp: "Stored at ambient temperature",
      season: "February – May",
      applications: "Formation of ketchups, gravy recipes, robust tomato sauces, tangy chutneys and dips for snacks and BBQ products",
      nonGmo: "100% Fresh & Ripe Tomato. No preservatives, colors or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 cfu/g",
      yeastMould: "< 10 cfu/g",
      howardMold: "Max. 40%"
    }
  },

  // 15. Aseptic Banana Puree
  {
    id: "banana-puree",
    name: "Aseptic Banana Puree",
    botanical: "Musa acuminata",
    category: "tropical",
    badge: "Natural Sweetener & Infant Food",
    tagline: "Undiluted, unevaporated, preservative-free made from fresh, sound, clean bananas.",
    image: "/images/banana.jpg",
    pulpImage: "/images/banana.jpg",
    overview: "Aseptic Banana Puree is an undiluted, unevaporated, unfermented product, not from concentrate and free from added preservatives. It is manufactured from fresh, ripe, sound, and clean bananas. The product is classified as NON-GMO and is produced under controlled hygienic conditions to maintain its natural quality, flavor, and nutritional properties.",
    specs: {
      typicalBrix: "Min. 16° Brix",
      statedBrix: "Min. 16° Brix",
      acidity: "0.15 – 0.65% (as citric acid)",
      ph: "4.00 – 5.00",
      bostwick: "Thick & viscous liquid of creamy texture",
      color: "Light Beige to Yellow",
      flavor: "Characteristic of variety (Ripe sweet banana)",
      consistency: "Thick & viscous liquid of creamy texture",
      ascorbicAcid: "Min. 500 PPM",
      packaging: "Filled in 210 kgs aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "Year-round availability",
      applications: "Infant nutrition products, dairy formulations, beverages, bakery and confectionery, snacks, nutraceutical preparations and food service",
      nonGmo: "100% Fresh Bananas, Citric Acid, Ascorbic Acid (minimal quantity to adjust pH). No preservatives, colors, or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 cfu/g",
      yeastMould: "< 10 cfu/g"
    }
  },

  // 16. Falsa Puree Aseptic
  {
    id: "falsa-puree",
    name: "Falsa Puree Aseptic",
    botanical: "Grewia asiatica",
    category: "tropical",
    badge: "Traditional Berry Puree",
    tagline: "Undiluted, unevaporated, preservative-free made from ripe, clean Pakistani falsa.",
    image: "/images/banner-falsa.jpg",
    pulpImage: "/images/R&B Foods_Main_Banner 2000x600 Falsa.jpg",
    overview: "Falsa Puree, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean falsa. It is classified as a NON-GMO (genetically modified organism) product.",
    specs: {
      typicalBrix: "Min. 10 ± 1° Brix",
      statedBrix: "Min. 10 ± 1° Brix",
      acidity: "2.00 ± 0.1% (as citric acid)",
      ph: "3.00 ± 0.1",
      bostwick: "Thick & viscous",
      color: "Characteristic of Fruit (Deep Purple-Red)",
      flavor: "Characteristic of Fruit (Sweet Falsa Taste)",
      consistency: "Thick & viscous liquid",
      ascorbicAcid: "Min. 100 ppm",
      packaging: "Filled in 200 kgs (four layer) aseptic bags in conical/PPL steel drums",
      shelfLife: "18 months from date of production",
      storageTemp: "Recommended temperature (4°C – 8°C)",
      season: "May – June",
      applications: "Major use in juices and nectars, ice creams, topping, bakery products, jams, consumer packs, milk cheese yogurt, Falsa shake and Falsa lassi",
      nonGmo: "100% Fresh Falsa, Citric Acid, Ascorbic Acid (minimal quantity to adjust pH). No preservatives, colors or flavors. Classified as NON-GMO."
    },
    microbiological: {
      tpc: "< 10 cfu/g",
      yeastMould: "< 10 cfu/g"
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
  { crop: "Sindhri Mango Pulp", active: [5, 6], peak: [5, 6], status: "Aromatic Crop Harvest" },
  { crop: "Peach Puree & Concentrate", active: [5, 6, 7], peak: [6], status: "Pre-Harvest Booking" },
  { crop: "Falsa Puree (Exotic Berry)", active: [5, 6], peak: [5, 6], status: "Seasonal Harvest Campaign" },
  { crop: "Strawberry Puree", active: [1, 2, 3], peak: [2, 3], status: "Fresh Crop Processing" },
  { crop: "Guava Pulp", active: [9, 10, 11, 12, 1], peak: [10, 11], status: "Aseptic Campaign Active" },
  { crop: "Apple Puree", active: [8, 9, 10], peak: [9], status: "Highland Autumn Intake" },
  { crop: "Tomato Paste (28-30° Brix)", active: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], peak: [2, 3, 4, 5], status: "Year-Round Supply" },
  { crop: "Banana Puree", active: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], peak: [4, 5, 6, 7, 8, 9, 10], status: "Continuous Processing" }
];
