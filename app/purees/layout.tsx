import type { Metadata } from 'next';
import { RB_PRODUCTS } from '../../data/products';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rbfoods.com.pk';

export const metadata: Metadata = {
  title: 'Aseptic Fruit Purees & Concentrates Catalog | Chaunsa Mango, Guava, Tomato Paste',
  description: 'Technical specifications, Brix levels, Bostwick viscosity, and COA parameters for 16 industrial fruit purees & concentrates. Packed in 200kg, 210kg & 220kg aseptic steel drums for multinational beverage, dairy, and confectionery manufacturers.',
  keywords: [
    'Chaunsa Mango Pulp Specifications',
    'Aseptic Guava Pulp 200kg Drum',
    'Tomato Paste 28-30 Brix Cold Break',
    'Peach Concentrate 30-32 Brix Technical Sheet',
    'Sindhri Mango Pulp COA',
    'Industrial Fruit Puree Supplier Pakistan',
    'Falsa Puree Bulk Exporter',
    'B2B Fruit Puree Export Catalog'
  ],
  alternates: {
    canonical: '/purees',
  },
  openGraph: {
    title: 'Industrial Fruit Purees & Aseptic Concentrates Portfolio | R&B Foods',
    description: 'Explore technical specifications for 16 export-grade fruit purees and concentrates produced on genuine Bertuzzi (Italy) processing lines at Shorkot, Punjab.',
    url: `${siteUrl}/purees`,
    images: [
      {
        url: '/images/banner-mango.jpg',
        width: 1200,
        height: 600,
        alt: 'Chaunsa Mango Pulp and Industrial Fruit Purees Portfolio',
      },
    ],
  },
};

export default function PureesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Industrial Fruit Purees & Aseptic Concentrates',
    description: 'Portfolio of 16 single-strength and concentrated fruit purees manufactured on imported Bertuzzi (Italy) lines.',
    itemListElement: RB_PRODUCTS.map((prod, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: prod.name,
        image: `${siteUrl}${prod.image}`,
        description: prod.tagline,
        category: prod.category,
        brand: {
          '@type': 'Brand',
          name: 'R&B Foods (Pvt.) Ltd.',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
          price: '0',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            description: 'Custom B2B contract pricing based on volume (MT) and FOB/CIF delivery terms',
          },
        },
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Botanical Name',
            value: prod.botanical,
          },
          {
            '@type': 'PropertyValue',
            name: 'Typical Brix',
            value: prod.specs.typicalBrix,
          },
          {
            '@type': 'PropertyValue',
            name: 'Packaging',
            value: prod.specs.packaging,
          },
          {
            '@type': 'PropertyValue',
            name: 'Shelf Life',
            value: prod.specs.shelfLife,
          },
          {
            '@type': 'PropertyValue',
            name: 'Storage Temperature',
            value: prod.specs.storageTemp,
          },
        ],
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products Portfolio',
        item: `${siteUrl}/purees`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
