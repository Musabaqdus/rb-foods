import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rbfoods.com.pk';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'R&B Foods (Pvt.) Ltd | Industrial Fruit Purees & Aseptic Concentrates',
    template: '%s | R&B Foods (Pvt.) Ltd'
  },
  description: 'Pakistan’s benchmark agro-industrial fruit processing enterprise in Shorkot, Punjab. Operating genuine BERTUZZI (Milan, Italy) continuous aseptic lines for Chaunsa mango pulp, guava pulp, peach, and tomato paste in 200kg, 210kg & 220kg steel drums for multinational B2B beverage & food manufacturers.',
  keywords: [
    'Chaunsa Mango Pulp Exporter Pakistan',
    'Aseptic Mango Puree Supplier',
    'Industrial Fruit Processing Facility Shorkot',
    'Guava Pulp Aseptic 200kg Drum',
    'Tomato Paste 28-30 Brix Cold Break',
    'Peach Concentrate 30-32 Brix Bulk',
    'Sindhri Mango Puree Bulk Exporter',
    'Bertuzzi Italy Line Pakistan',
    'HACCP Halal Certified Fruit Pulp',
    'B2B Beverage Ingredients Pakistan',
    'Fruit Puree 210kg Aseptic Steel Drum',
    'Pakistan Fruit Harvest Calendar',
    'FOB Karachi Fruit Pulp Exporter'
  ],
  authors: [{ name: 'R&B Foods (Pvt.) Ltd', url: siteUrl }],
  creator: 'R&B Foods (Pvt.) Ltd',
  publisher: 'R&B Foods (Pvt.) Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'R&B Foods (Pvt.) Ltd | Industrial Fruit Purees & Aseptic Concentrates',
    description: 'Genuine BERTUZZI (Milan, Italy) continuous aseptic lines in Shorkot, Punjab. Exporting premium Chaunsa mango pulp, guava pulp, peach, and tomato concentrates in 210kg, 200kg & 220kg steel drums to global beverage manufacturers.',
    url: siteUrl,
    siteName: 'R&B Foods (Pvt.) Ltd',
    images: [
      {
        url: '/images/video-poster-monogram.jpg',
        width: 1280,
        height: 720,
        alt: 'R&B Foods (Pvt.) Ltd - Shorkot Aseptic Processing Facility & Bertuzzi Lines',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R&B Foods (Pvt.) Ltd | Industrial Fruit Purees & Concentrates',
    description: 'Pakistan’s benchmark industrial fruit processor. Operating Italian Bertuzzi continuous lines in Shorkot for aseptic Chaunsa mango, guava, and tomato concentrates.',
    images: ['/images/video-poster-monogram.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#071911',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'R&B Foods (Pvt.) Ltd.',
  legalName: 'R&B Foods Private Limited',
  url: siteUrl,
  logo: `${siteUrl}/logos/rb-foods-logo.jpg`,
  description: 'Pakistan’s benchmark agro-industrial fruit processing facility located in Shorkot, Punjab. Operating genuine BERTUZZI S.r.l. (Milan, Italy) continuous aseptic lines producing Chaunsa mango pulp, guava pulp, peach, and tomato concentrates in steel drums for global B2B procurement.',
  telephone: '+92-334-3734786',
  email: 'exports@rbfoods.com.pk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8-Km Jhang Road',
    addressLocality: 'Shorkot City',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  founder: [
    {
      '@type': 'Person',
      name: 'Syed Basit Sultan Bukhari',
      jobTitle: 'Chairman',
    },
    {
      '@type': 'Person',
      name: 'Muhammad Rafique',
      jobTitle: 'Chief Executive Officer',
    },
  ],
  knowsAbout: [
    'Aseptic Fruit Purees',
    'Chaunsa Mango Pulp',
    'Guava Pulp Aseptic',
    'Tomato Paste 28-30 Brix',
    'Peach Concentrate',
    'BERTUZZI Italy Processing Lines',
    '210kg Aseptic Steel Drum Export Packaging',
  ],
  award: [
    'HACCP Certified Food Processing Facility',
    'Halal Certified Industrial Puree Plant',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'R&B Foods',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/purees?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
