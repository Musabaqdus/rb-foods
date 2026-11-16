import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'R&B Foods (Pvt.) Ltd | Industrial Fruit Purees & Aseptic Concentrates',
  description: 'Pakistan’s premier agro-industrial fruit processing facility in Shorkot, Punjab. Operating genuine BERTUZZI (Milan, Italy) continuous aseptic lines for Chaunsa mango, guava, peach, and tropical purees for global B2B beverage & dairy manufacturers.',
  keywords: [
    'Chaunsa Mango Puree',
    'Aseptic Mango Pulp Pakistan',
    'Guava Puree Supplier',
    'Mango Concentrate 28-30 Brix',
    'Bertuzzi Italy Line',
    'FSSC 22000 Puree Exporter',
    'R&B Foods Shorkot',
    'Industrial Fruit Puree 210kg Drum'
  ],
  authors: [{ name: 'R&B Foods (Pvt.) Ltd' }],
  icons: {
    icon: '/logos/rb-logo.jpg'
  },
  openGraph: {
    title: 'R&B Foods (Pvt.) Ltd | Industrial Fruit Purees & Aseptic Concentrates',
    description: 'Genuine BERTUZZI (Italy) aseptic processing line in Shorkot, Punjab. World-class Chaunsa mango, guava, peach, and tropical purees for global procurement.',
    type: 'website',
    locale: 'en_US',
    siteName: 'R&B Foods'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A2E20'
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
      </head>
      <body>{children}</body>
    </html>
  );
}
