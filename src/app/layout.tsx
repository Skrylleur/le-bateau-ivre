import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Le Bateau Ivre - Brasserie & Restaurant à Cavalaire sur Mer",
    template: "%s | Le Bateau Ivre"
  },
  description: "Découvrez Le Bateau Ivre, brasserie et restaurant située au port de Cavalaire sur Mer. Cuisine traditionnelle française avec une touche méditerranéenne, fruits de mer frais, bières artisanales et vins de Provence. Ouvert 7j/7 de 8h à 22h30.",
  keywords: [
    "brasserie cavalaire sur mer",
    "restaurant cavalaire sur mer",
    "le bateau ivre",
    "fruits de mer cavalaire",
    "bières artisanales cavalaire",
    "vins provence cavalaire",
    "restaurant port cavalaire",
    "terrasse mer cavalaire",
    "cuisine méditerranéenne",
    "restaurant var"
  ],
  authors: [{ name: "Antonin Gourinchas" }],
  creator: "Antonin Gourinchas",
  publisher: "Le Bateau Ivre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lebateauivre.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lebateauivre.fr',
    title: 'Le Bateau Ivre - Brasserie & Restaurant à Cavalaire sur Mer',
    description: 'Découvrez notre brasserie au port de Cavalaire sur Mer. Cuisine traditionnelle française, fruits de mer frais, bières artisanales. Ouvert 7j/7.',
    siteName: 'Le Bateau Ivre',
    images: [
      {
        url: '/2024-11-20.jpg',
        width: 1200,
        height: 630,
        alt: 'Vue sur la mer depuis la brasserie Le Bateau Ivre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Bateau Ivre - Brasserie & Restaurant à Cavalaire sur Mer',
    description: 'Découvrez notre brasserie au port de Cavalaire sur Mer. Cuisine traditionnelle française, fruits de mer frais, bières artisanales.',
    images: ['/2024-11-20.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Schema.org Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Le Bateau Ivre",
              "description": "Brasserie et restaurant située au port de Cavalaire sur Mer",
              "url": "https://lebateauivre.fr",
              "telephone": "+33763859870",
              "email": "contact@lebateauivre.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "42 Nouveau port",
                "addressLocality": "Cavalaire-sur-Mer",
                "postalCode": "83240",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.1747,
                "longitude": 6.5278
              },
              "openingHours": "Mo-Su 08:00-22:30",
              "servesCuisine": ["French", "Mediterranean", "Seafood"],
              "priceRange": "€€",
              "image": [
                "https://lebateauivre.fr/2024-11-20.jpg",
                "https://lebateauivre.fr/2024-11-20-2.jpg",
                "https://lebateauivre.fr/2024-11-20-3.jpg"
              ],
              "sameAs": [
                "https://www.facebook.com/people/Le-Bateau-Ivre-Cavalaire/61567947616719/",
                "https://www.instagram.com/lebateauivrecavalaire/"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
      </body>
    </html>
  );
}
