import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rbfoods.com.pk';

export const metadata: Metadata = {
  title: 'Executive Governance, Leadership & Heritage | R&B Foods (Pvt.) Ltd',
  description: 'Operating under the direct stewardship of Chairman Syed Basit Sultan Bukhari and CEO Muhammad Rafique. R&B Foods (Pvt.) Ltd. in Shorkot, Punjab combines imported BERTUZZI Italian engineering, sustainable grower partnerships, and transparent governance for global fruit exports.',
  keywords: [
    'R&B Foods Chairman Syed Basit Sultan Bukhari',
    'Muhammad Rafique CEO R&B Foods',
    'Fruit Processing Shorkot Governance',
    'Agro-Industrial Leadership Pakistan',
    'Fruit Pulp Export Enterprise History',
    'R&B Foods Corporate Governance'
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Leadership Commitment & Corporate Governance | R&B Foods',
    description: 'Executive governance, grower ethics, and Italian engineering rigor guiding Pakistan’s premier fruit processing enterprise.',
    url: `${siteUrl}/about`,
    images: [
      {
        url: '/images/video-poster-monogram.jpg',
        width: 1280,
        height: 720,
        alt: 'R&B Foods Executive Leadership',
      },
    ],
  },
};

export default function AboutLayout({
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
        name: 'About & Governance',
        item: `${siteUrl}/about`,
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
