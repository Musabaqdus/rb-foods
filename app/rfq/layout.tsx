import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rbfoods.com.pk';

export const metadata: Metadata = {
  title: 'Request Commercial Export Quote & Sample Batch | B2B Fruit Purees',
  description: 'Submit an industrial Request for Quotation (RFQ) for Chaunsa mango pulp, guava pulp, peach concentrate, or tomato paste. Calculate metric ton volumes, container stuffing (80 drums / FCL), and receive fast-track FOB Karachi or CIF pricing alongside official Certificate of Analysis (COA).',
  keywords: [
    'Request Fruit Puree Quotation',
    'B2B Fruit Pulp Price FOB Karachi',
    'Chaunsa Mango Pulp Sample Request',
    'Tomato Paste Bulk Export Price',
    'Aseptic Drum Container Stuffing Calculator',
    'Fruit Puree Wholesale Procurement',
    'Commercial RFQ Export Desk Pakistan'
  ],
  alternates: {
    canonical: '/rfq',
  },
  openGraph: {
    title: 'Request B2B Export Quote & Commercial Pricing | R&B Foods',
    description: 'Direct procurement channel for multinational beverage formulators, dairy plants, and confectionery manufacturers. Calculate container volumes and request sample batches.',
    url: `${siteUrl}/rfq`,
    images: [
      {
        url: '/images/video-poster-monogram.jpg',
        width: 1280,
        height: 720,
        alt: 'Request Commercial Export Quote',
      },
    ],
  },
};

export default function RFQLayout({
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
        name: 'Request Export Quotation',
        item: `${siteUrl}/rfq`,
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
