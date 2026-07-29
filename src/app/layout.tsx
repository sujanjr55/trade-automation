import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StickyCTA } from "@/components/ui/StickyCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0f172a", // slate-900
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tradeautomation.example.com"),
  title: "TradeAutomation AI | Stop Losing $1,000+ Jobs To Missed Calls",
  description: "Automated Speed-to-Lead Engines, Missed Call Text-Back, and 24/7 AI Booking Systems that capture lost contractor revenue for Plumbers, HVAC, and Roofers.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tradeautomation.example.com",
    title: "TradeAutomation AI | The Ultimate Contractor Growth Engine",
    description: "Replace your leaky website with a high-speed AI engine that texts back missed callers in 3 seconds and books jobs 24/7.",
    siteName: "TradeAutomation AI",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image later
        width: 1200,
        height: 630,
        alt: "TradeAutomation AI Engine",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeAutomation AI | Missed Call Text-Back",
    description: "Automated Speed-to-Lead Engines for US Home Services.",
    images: ["/og-image.jpg"],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TradeAutomation AI",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "497.00",
    "priceCurrency": "USD"
  },
  "description": "24/7 AI Missed-Call Booking System for Home Service Contractors.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "128"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <StickyCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
