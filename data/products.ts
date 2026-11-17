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


export interface SpecParameterRow {
  param: string;
  standard: string;
  remarks: string;
}

export interface OfficialSpecSheet {
  docTitle: string;
  description: string;
  ingredients: string;
  additives: string;
  table: SpecParameterRow[];
  packaging: string;
  storage: string;
  intendedUse: string;
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
  specSheet: OfficialSpecSheet;
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Chaunsa Mango Pulp)",
          "description": "Chaunsa Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative free made from edible part of ripe, healthy, and clean Chaunsa mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Chaunsa Mango, Citric Acid, Ascorbic Acid.",
          "additives": "The pulp does not contain any preservatives, colors or flavors. Citric acid and Ascorbic acid are added in a minimal allowable quantity in order to adjust pH of the pulp.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "20°- 26° Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.80 – 4.20",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.60 – 0.85%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Sweet mango taste"
                },
                {
                      "param": "Color",
                      "standard": "Bright Yellow",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "-",
                      "remarks": "Thick & viscous liquid of creamy texture"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 CFU/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "Negative",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 200 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Chaunsa Mango pulp is filled in 210kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Chaunsa Mango Pulp is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened or single strength pulp in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in mango shake and mango lassi, which is a popular drink all over the world."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Desi Mango Pulp)",
          "description": "Desi Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Mango, Citric Acid, Ascorbic Acid.",
          "additives": "The pulp does not contain any preservatives, colors or flavors. Citric acid and Ascorbic acid are added in a minimal allowable quantity in order to adjust pH of the pulp.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "14°-18° Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.70 – 4.10",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.80 – 1.20%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Sweet mango taste"
                },
                {
                      "param": "Color",
                      "standard": "Bright Yellow",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "-",
                      "remarks": "Thick & viscous liquid of creamy texture"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 CFU/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "Negative",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 200PPM",
                      "remarks": ""
                }
          ],
          "packaging": "Desi Mango pulp is filled in 210kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Desi Mango Pulp is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened or single strength pulp in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in mango shake and mango lassi, which is a popular drink all over the world."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Dusehri Mango Pulp)",
          "description": "Dusehri Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative free made from edible part of ripe, healthy, and clean Dusehri mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Dusehri Mango, Citric Acid, Ascorbic Acid.",
          "additives": "The pulp does not contain any preservatives, colors or flavors. Citric acid and Ascorbic acid are added in a minimal allowable quantity in order to adjust pH of the pulp.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "16°-19° Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.8-4.2",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.6-0.85%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Sweet mango taste"
                },
                {
                      "param": "Color",
                      "standard": "Ocher Yellow",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "-",
                      "remarks": "Thick & viscous liquid of creamy texture"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 CFU/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "Negative",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 200 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Dusehri Mango pulp is filled in 210kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Dusehri Mango Pulp is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened or single strength pulp in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in mango shake and mango lassi, which is a popular drink all over the world."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Langra Mango Pulp)",
          "description": "Langra Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative free made from edible part of ripe, healthy, and clean Langra mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Langra Mango, Citric Acid, Ascorbic Acid.",
          "additives": "The pulp does not contain any preservatives, colors or flavors. Citric acid and Ascorbic acid are added in a minimal allowable quantity in order to adjust pH of the pulp.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "17°-22°Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.80 – 4.20",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.60 – 0.85%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Sweet mango taste"
                },
                {
                      "param": "Color",
                      "standard": "Bright Yellow",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "-",
                      "remarks": "Thick & viscous liquid of creamy texture"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 CFU/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "Negative",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 200 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Langra Mango pulp is filled in 210kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Langra Mango Pulp is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened or single strength pulp in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in mango shake and mango lassi, which is a popular drink all over the world."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Anwar Ratool Mango Pulp)",
          "description": "Ratool Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean Ratool mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Ratool Mango, Citric Acid, Ascorbic Acid.",
          "additives": "The pulp does not contain any preservatives, colors or flavors. Citric acid and Ascorbic acid are added in a minimal allowable quantity in order to adjust pH of the pulp.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "18°-24° Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.80 – 4.20",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.60 – 0.85%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Sweet mango taste"
                },
                {
                      "param": "Color",
                      "standard": "Bright Yellow",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "-",
                      "remarks": "Thick & viscous liquid of creamy texture"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 CFU/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "Negative",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 200 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Ratool Mango pulp is filled in 210kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Ratool Mango Pulp is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened or single strength pulp in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in mango shake and mango lassi, which is a popular drink all over the world."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Sindhri Mango Pulp)",
          "description": "Sindhri Mango pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean Sindhri mangoes. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Sindhri Mango, Citric Acid, Ascorbic Acid.",
          "additives": "The pulp does not contain any preservatives, colors or flavors. Citric acid and Ascorbic acid are added in a minimal allowable quantity in order to adjust pH of the pulp.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "Min. 14°Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.70 – 4.10",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.80 – 1.20%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Sweet mango taste"
                },
                {
                      "param": "Color",
                      "standard": "Bright Yellow",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "-",
                      "remarks": "Thick & viscous liquid of creamy texture"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 200 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Sindhri Mango pulp is filled in 210kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Sindhri Mango Pulp is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened or single strength pulp in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in mango shake and mango lassi, which is a popular drink all over the world."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Chaunsa Mango Concentrate)",
          "description": "Chaunsa Mango Concentrate, is made by processing edible part of ripe, healthy, and clean Chaunsa mangoes & then concentrating it to 28-30°Brix by evaporation under vacuum. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Chaunsa Mango, Citric Acid, Ascorbic Acid.",
          "additives": "The Concentrate does not contain any preservatives, colors or flavors. Citric acid and Ascorbic acid are added in a minimal allowable quantity in order to adjust pH of the pulp.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "28-30°Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.50 – 4.20",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.70 – 1.30%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Sweet mango taste"
                },
                {
                      "param": "Color",
                      "standard": "Yellow",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "-",
                      "remarks": "Thick & viscous liquid of creamy texture"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 CFU/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "Negative",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 200 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Chaunsa Mango concentrate is filled in 220kgs aseptic bags in conical/PPL steel drums.",
          "storage": "24 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Chaunsa Mango concentrate is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened concentrate in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in mango shake and mango lassi, which is a popular drink all over the world."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Desi Mango Concentrate)",
          "description": "Desi Mango Concentrate, is made by processing edible part of ripe, healthy, and clean Desi mangoes & then concentrating it to 28-30°Brix by evaporation under vacuum. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Desi Mango, Citric Acid, Ascorbic Acid.",
          "additives": "The Concentrate does not contain any preservatives, colors or flavors. Citric acid and Ascorbic acid are added in a minimal allowable quantity in order to adjust pH of the pulp.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "28-30°Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.50 – 4.20",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.70 – 1.30%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Sweet mango taste"
                },
                {
                      "param": "Color",
                      "standard": "Yellow",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "-",
                      "remarks": "Thick & viscous liquid of creamy texture"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "Negative",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 200 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Desi Mango concentrate is filled in 220kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Desi Mango concentrate is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened concentrate in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in mango shake and mango lassi, which is a popular drink all over the world."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Guava Pulp)",
          "description": "Guava pulp, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made by crushing ripe, healthy, and clean Guavas. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Guava, Citric Acid.",
          "additives": "The pulp does not contain any preservatives, colors or flavors. Citric acid is added in a minimal allowable quantity in order to adjust pH of the pulp.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "07°-12° Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.90 – 4.40",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.30 – 0.70%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Sweet Guava Taste"
                },
                {
                      "param": "Color",
                      "standard": "Creamy White",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "-",
                      "remarks": "Thick & viscous liquid of creamy texture"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 CFU/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "Negative",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 200 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Guava pulp is filled in 200kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Guava Pulp is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened or single strength pulp in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in guava shake and guava lassi, which is a popular drink all over the world."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Strawberry Puree Aseptic)",
          "description": "Strawberry Puree Aseptic, undiluted, unevaporated , unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean strawberries. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Strawberries, Ascorbic Acid.",
          "additives": "The puree does not contain any preservatives, colors or flavors.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "Min. 6°Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.30 – 3.90",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.50 – 1.50%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Typical of strawberry"
                },
                {
                      "param": "Color",
                      "standard": "Dark Red",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "Smooth pureed fruit",
                      "remarks": ""
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "< 10 CFU/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "Negative",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "300-400 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Strawberry Puree is filled in 200kgs aseptic bags in conical/PPL steel drums having polylinear bags in-between.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Strawberry Puree is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened or single strength pulp in smaller consumer packs and can be consumed as it is or mixed with milk, cheese & yogurt. It can also be used in strawberry shake and strawberry lassi , which is a popular drink all over the world."
    }
  },

  // 12. Peach Concentrate (30-32° Brix)
  {
    id: "peach-concentrate",
    name: "Peach Concentrate",
    botanical: "Prunus persica (Concentrate)",
    category: "concentrate",
    badge: "30–32° Brix Industrial Concentrate",
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Peach Concentrate)",
          "description": "Peach Concentrate, is obtained by processing fresh, mature and clean peaches & then concentrating it to 30-32°Brix by evaporation under vacuum. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Peaches, Ascorbic Acid.",
          "additives": "The concentrate does not contain any preservatives, colors or flavors.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "30-32°Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.50 – 4.40",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "Min. 0.50%",
                      "remarks": "As per tartaric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Typical of Peach"
                },
                {
                      "param": "Color",
                      "standard": "Dark Yellow",
                      "remarks": ""
                },
                {
                      "param": "Consistency (Bostwick)",
                      "standard": "5-12 cm/30 sec",
                      "remarks": ""
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<50 CFU/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "Negative",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 200 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Peach Concentrate is filled in 220kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Peach concentrate is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened concentrate in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in Peach shake which is a popular drink all over the world."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Apple Puree)",
          "description": "Apple Puree, is obtained by processing fresh, mature and clean Apples & then concentrating it to 20-24°Brix by evaporation under vacuum. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Apples, Citric Acid, Ascorbic Acid.",
          "additives": "The product does not contain any preservatives, colors or flavors.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "20-24°Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.50 – 4.30",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.30-0.70%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Typical of Apple"
                },
                {
                      "param": "Color",
                      "standard": "Intense Yellow",
                      "remarks": ""
                },
                {
                      "param": "Consistency",
                      "standard": "Smooth strained apple puree",
                      "remarks": ""
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Max. 500 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Apple Puree is filled in 210kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Apple Puree is in the production of juices and nectars. It is also used for the production of infants nutritious foods."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Tomato Paste)",
          "description": "Tomato Paste is made from finest, vine-ripened tomatoes, which are carefully processed to capture the true essence of this beloved fruit then concentrating it to 28-30°Brix by evaporation under vacuum. The result is a rich and full-bodied tomato paste. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% fresh & ripe Tomato.",
          "additives": "The paste does not contain any preservatives, colors or flavors.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "28-30°Brix",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "1.50-2.50%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "pH",
                      "standard": "4.10 – 4.40",
                      "remarks": ""
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of ripe tomato",
                      "remarks": "Free from off-flavors & scorched taste"
                },
                {
                      "param": "Color",
                      "standard": "Min. 1.90",
                      "remarks": "a/b Hunter scale @ 12° Brix"
                },
                {
                      "param": "Consistency (Bostwick)",
                      "standard": "04-07 cm/30s",
                      "remarks": "At 12° Brix @ 20°C"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Howard Mold Count",
                      "standard": "Max. 40%",
                      "remarks": "Positive fields"
                }
          ],
          "packaging": "Tomato Paste is filled in 220kgs aseptic bags in conical/PPL steel drums.",
          "storage": "24 months from the date of production stored at ambient temperature.",
          "intendedUse": "The major use of Tomato paste is in the formation of ketchups. It's used in certain gravy recipes to add a robust tomato flavor and achieve the desired consistency. It is also used to create tangy and flavorful chutneys and dips to accompany various snacks, kebabs, and BBQ products. In any dish where you want to infuse a burst of tomato goodness without the extra liquid content, a small amount of tomato paste can be added to elevate the flavor."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Aseptic Banana Puree)",
          "description": "Aseptic Banana Puree is an undiluted, unevaporated , unfermented product, not from concentrate and free from added preservatives. It is manufactured from fresh, ripe, sound, and clean bananas. The product is classified as NON-GMO and is produced under controlled hygienic conditions to maintain its natural quality, flavor, and nutritional properties.",
          "ingredients": "100% Fresh Bananas, Citric Acid, Ascorbic Acid.",
          "additives": "The puree does not contain any preservatives, colors or flavors.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "Min. 16°Brix",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "4.00 – 5.00",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "0.15 – 0.65%",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of variety",
                      "remarks": "Sweet, ripe banana flavor"
                },
                {
                      "param": "Color",
                      "standard": "Light Beige to Yellow",
                      "remarks": "Typical of processed ripe bananas"
                },
                {
                      "param": "Consistency",
                      "standard": "-",
                      "remarks": "Smooth, uniform, free-flowing puree"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 500PPM",
                      "remarks": ""
                }
          ],
          "packaging": "Banana Puree is filled in 210kgs aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "Ideal for beverages, nectars, smoothies, dairy products, bakery fillings, and baby foods."
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
    },
    specSheet: {
          "docTitle": "Specifications Sheet (Falsa Puree Aseptic)",
          "description": "Falsa Puree, undiluted, unevaporated, unfermented, not from concentrate, preservative-free made from edible part of ripe, healthy, and clean falsa. It is classified as a NON-GMO (genetically modified organism) product.",
          "ingredients": "100% Fresh Falsa, Citric Acid, Ascorbic Acid.",
          "additives": "The pulp does not contain any preservatives, colors or flavors. Citric acid and Ascorbic acid are added in a minimal allowable quantity in order to adjust pH of the pulp.",
          "table": [
                {
                      "param": "Brix",
                      "standard": "Min. 10 ± 1",
                      "remarks": ""
                },
                {
                      "param": "pH",
                      "standard": "3.00 ± 0.1",
                      "remarks": ""
                },
                {
                      "param": "Acidity",
                      "standard": "2.00 ± 0.1",
                      "remarks": "As per citric acid"
                },
                {
                      "param": "Flavor & Taste",
                      "standard": "Characteristic of Fruit",
                      "remarks": "Sweet Falsa Taste"
                },
                {
                      "param": "Color",
                      "standard": "Characteristic of Fruit",
                      "remarks": ""
                },
                {
                      "param": "Consistency (Bostwick)",
                      "standard": "-",
                      "remarks": "Thick & viscous"
                },
                {
                      "param": "Total Aerobic Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Yeast & mold Count/g",
                      "standard": "<10 cfu/g",
                      "remarks": ""
                },
                {
                      "param": "Ascorbic Acid",
                      "standard": "Min. 100 ppm",
                      "remarks": ""
                }
          ],
          "packaging": "Falsa Puree is filled in 200 kgs (four layer) aseptic bags in conical/PPL steel drums.",
          "storage": "18 months from the date of production stored at recommended temperature (4°C - 8°C).",
          "intendedUse": "The major use of Falsa Puree is in the production of juices and nectars. It is also used for the production of ice creams, topping, bakery products and jams. It can be repacked as sweetened or single strength Puree in smaller consumer packs and can be consumed as it is or mixed with milk cheese yogurt. It can also be used in Falsa shake and Falsa lassi, which is a popular drink all over the world."
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
