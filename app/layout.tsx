import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FinaticLabs - AI-Powered Financial Suite for NBFCs",
  description: "Transform your NBFC operations with our comprehensive software suite. Enhanced security, compliance, and efficiency—all in one platform.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-black">
          <div className="relative w-full min-h-screen max-w-[1400px] mx-auto rounded-[32px] overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />
            
            {/* Navigation */}
            <Navigation />
            
            {/* Page Content */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
