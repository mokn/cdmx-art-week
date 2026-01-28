import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CDMX Art Week 2026 | Mexico City Art Events Guide",
  description: "Your complete guide to Art Week Mexico City 2026. Discover gallery openings, exhibitions, parties, performances, and cultural events across CDMX.",
  keywords: ["Art Week", "Mexico City", "CDMX", "art events", "gallery openings", "exhibitions", "2026"],
  openGraph: {
    title: "CDMX Art Week 2026 | Mexico City Art Events Guide",
    description: "Your complete guide to Art Week Mexico City 2026. Discover gallery openings, exhibitions, parties, performances, and cultural events.",
    url: "https://cdmxartweek.com",
    siteName: "CDMX Art Week",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDMX Art Week 2026",
    description: "Your complete guide to Art Week Mexico City 2026",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-gray-900">
              CDMX Art Week
            </a>
            <div className="flex items-center gap-6">
              <a href="/schedule" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Schedule
              </a>
              <a href="/parties" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                Parties
              </a>
              <a href="/submit" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Submit Event
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                About
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-gray-200 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600 text-sm">
            <p>&copy; 2026 CDMX Art Week. The independent guide to Mexico City&apos;s art scene.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
