import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rbfoods.com.pk';

export const metadata: Metadata = {
  title: 'Pakistani Fruit Harvest Calendar & Crop Allocation Matrix | R&B Foods',
  description: 'Plan annual beverage, dairy, and confectionery blending schedules. Detailed 12-month harvest matrix for Chaunsa mango (June–August), Guava pulp (Sept–Jan), Summer peach (May–July), Strawberry (Feb–April), and year-round Tomato Paste processing at Shorkot.',
  keywords: [
    'Pakistan Fruit Harvest Calendar',
    'Chaunsa Mango Harvest Season Punjab',
    'Guava Crop Campaign Pakistan',
    'Summer Peach Processing Calendar',
    'Strawberry Puree Harvest Season',
    'B2B Fruit Puree Contract Allocation',
    'Pakistani Horticultural Processing Windows'
  ],
  alternates: {
    canonical: '/harvest',
  },
  openGraph: {
    title: 'Pakistani Horticultural Harvest Matrix | Supply Chain Planning',
    description: '12-Month continuous crop harvest schedule and forward contract allocation matrix for multinational beverage and dairy formulators.',
    url: `${siteUrl}/harvest`,
    images: [
      {
        url: '/images/banner-fruit-portfolio.jpg',
        width: 1200,
        height: 600,
        alt: 'Pakistani Fruit Harvest Calendar',
      },
    ],
  },
};

export default function HarvestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        name: 'Harvest & Seasonal Matrix',
        item: `${siteUrl}/harvest`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
