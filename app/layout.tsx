import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';
import ClientLayout from './components/ClientLayout';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Accodyn Tech - AI-Powered Solutions for Financial Services",
  description: "Transform financial services with our AI-powered platform. Unlock smarter operations with enhanced security, compliance, and efficiency.",
  keywords: ["AI", "financial services", "fintech", "NBFC", "artificial intelligence", "modern finance"],
  authors: [{ name: "Accodyn Tech" }],
  creator: "Accodyn Tech",
  publisher: "Accodyn Tech",
  metadataBase: new URL('https://accodyntech.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Accodyn Tech - Intelligence Engineered for Modern Finance",
    description: "Transform financial services with our AI-powered platform. Unlock smarter operations with enhanced security, compliance, and efficiency.",
    url: 'https://accodyntech.com',
    siteName: 'Accodyn Tech',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Accodyn Tech - Intelligence Engineered for Modern Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Accodyn Tech - Intelligence Engineered for Modern Finance",
    description: "Transform financial services with our AI-powered platform. Unlock smarter operations with enhanced security, compliance, and efficiency.",
    images: ['/opengraph-image.png'],
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
    google: 'your-google-site-verification-code', // Replace with actual verification code when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ClientLayout>
          <div className="min-h-screen bg-black">
            <div className="relative w-full min-h-screen max-w-[1400px] mx-auto rounded-[32px] overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />
              
              {/* Navigation */}
              <Navigation />
              
              {/* Page Content */}
              {children}
              
              {/* Footer */}
              <Footer />
            </div>
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
