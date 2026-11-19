import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rbfoods.com.pk';

export const metadata: Metadata = {
  title: 'BERTUZZI (Milan, Italy) Continuous Processing Plant | Shorkot Facility',
  description: 'Tour R&B Foods’ benchmark fruit processing facility in Shorkot, Punjab. Operating genuine BERTUZZI S.r.l. (Milan, Italy) 10 MT/hour lines: clean water immersion washing, gentle cold de-stoning, vacuum de-aeration, HTST flash sterilization, and cleanroom aseptic drum filling.',
  keywords: [
    'Bertuzzi Italy Fruit Processing Line',
    'Aseptic Processing Plant Pakistan',
    'Shorkot Fruit Processing Facility',
    'Industrial Flash Pasteurization Pakistan',
    'Cleanroom Aseptic Drum Filling Facility',
    'Italian Fruit Pulp Processing Machinery',
    'Agro Food Processing Infrastructure'
  ],
  alternates: {
    canonical: '/facility',
  },
  openGraph: {
    title: 'BERTUZZI (Italy) Continuous Processing Lines | R&B Foods Shorkot',
    description: '10 MT/hour continuous flash pasteurization and aseptic packaging lines engineered by BERTUZZI S.r.l. Milan, Italy.',
    url: `${siteUrl}/facility`,
    images: [
      {
        url: '/images/video-poster-monogram.jpg',
        width: 1280,
        height: 720,
        alt: 'R&B Foods Shorkot Plant Floor Video Tour',
      },
    ],
  },
};

export default function FacilityLayout({
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
        name: 'Industrial Facility',
        item: `${siteUrl}/facility`,
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
