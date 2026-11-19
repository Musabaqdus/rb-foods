import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rbfoods.com.pk';

export const metadata: Metadata = {
  title: '210kg, 200kg & 220kg Aseptic Steel Drum Packaging | Global Logistics',
  description: 'Industrial export packaging specifications for R&B Foods: 210kg drums for single-strength purees, 200kg drums for guava pulp & strawberry, and 220kg drums for concentrates & tomato paste. Food-grade 4-layer aseptic barrier bags, 80 drums per 20ft FCL container (16.0–17.6 MT Net), 4°C–8°C cold-chain.',
  keywords: [
    '210kg Aseptic Steel Drum Packaging',
    '200kg Guava Pulp Drum Packaging',
    '220kg Tomato Paste Drum Packaging',
    '20ft FCL Fruit Puree Container Stuffing',
    'Aseptic Barrier Bag Export Packaging',
    'Karachi Port Fruit Puree Export Logistics',
    'Industrial Cold-Chain Puree Storage 4C-8C'
  ],
  alternates: {
    canonical: '/packaging',
  },
  openGraph: {
    title: 'Aseptic Steel Drum Export Packaging & Global Logistics | R&B Foods',
    description: 'Engineered for cold-chain transit from Karachi Port to major global destinations: Jebel Ali, Rotterdam, Hamburg, Qingdao, and UK.',
    url: `${siteUrl}/packaging`,
    images: [
      {
        url: '/images/video-poster-monogram.jpg',
        width: 1280,
        height: 720,
        alt: 'Aseptic Steel Drum Packaging Standards',
      },
    ],
  },
};

export default function PackagingLayout({
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
        name: 'Export Packaging & Logistics',
        item: `${siteUrl}/packaging`,
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
