import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rbfoods.com.pk';

export const metadata: Metadata = {
  title: 'Quality Assurance, Testing Laboratory & HACCP Standards | R&B Foods',
  description: 'Photographic tour of R&B Foods’ analytical laboratory at Shorkot: Bostwick flow testing, digital pH electrodes, microbiology cleanrooms (TPC & yeast/mold incubation), acid-base titration, and HACCP & Halal certification standards certifying every export consignment.',
  keywords: [
    'Fruit Puree Laboratory Testing Shorkot',
    'Bostwick Consistometer Viscosity Testing',
    'Food Safety and Halal Policy Pakistan',
    'Microbiology Cleanroom Fruit Processing',
    'HACCP Certified Puree Manufacturer Pakistan',
    'Certificate of Analysis COA Fruit Puree',
    'Industrial Fruit Quality Control Standards'
  ],
  alternates: {
    canonical: '/quality',
  },
  openGraph: {
    title: 'Verified In-House Testing Laboratory & QA Standards | R&B Foods',
    description: 'Direct photographic tour of the R&B Foods analytical testing laboratory in Shorkot, Punjab. Operating microbiological cleanrooms, Bostwick viscometers, and digital colorimeters.',
    url: `${siteUrl}/quality`,
    images: [
      {
        url: '/images/lab/central-qc-hall.jpg',
        width: 1200,
        height: 675,
        alt: 'R&B Foods Central QC Testing Hall Shorkot',
      },
    ],
  },
};

export default function QualityLayout({
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
        name: 'Quality & QA Laboratory',
        item: `${siteUrl}/quality`,
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
