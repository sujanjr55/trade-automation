"use client";

import * as React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";
import { config } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & SEO Prose */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-block">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-accent text-accent-foreground">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TradeAutomation <span className="text-accent">AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              TradeAutomation AI provides the premier <strong className="font-normal text-slate-300">HVAC speed to lead automation software USA</strong> contractors trust. 
              Our industry-leading <strong className="font-normal text-slate-300">plumbing missed call text back system</strong> and 
              <strong className="font-normal text-slate-300"> automated booking engine for trade contractors</strong> ensure you never lose a high-ticket job to a competitor again.
            </p>
            <p className="text-xs text-slate-500 border border-slate-800 p-4 rounded-lg bg-slate-900/50">
              <strong>Compliance Notice:</strong> By submitting any form on this website, you agree to receive automated SMS response messages and marketing communications from us. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt-out. (TCPA & A2P 10DLC Compliant).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-accent transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${config.phone.replace(/[^0-9]/g, '')}`} className="hover:text-accent transition-colors font-bold text-white">
                  {config.phone}
                </a>
              </li>
              <li>support@tradeautomation.ai</li>
              <li>100 Innovation Drive<br/>Austin, TX 78701</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} TradeAutomation AI. All rights reserved.</p>
          <p>Built for US Trade Contractors.</p>
        </div>
      </div>

      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "TradeAutomation AI",
                "operatingSystem": "Web",
                "applicationCategory": "BusinessApplication",
                "description": "Automated Speed-to-Lead Engines, Missed Call Text-Back, and 24/7 AI Booking Systems for US trade contractors.",
                "offers": {
                  "@type": "Offer",
                  "price": "297.00",
                  "priceCurrency": "USD"
                }
              },
              {
                "@type": "LocalBusiness",
                "name": "TradeAutomation AI",
                "telephone": config.phone,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "100 Innovation Drive",
                  "addressLocality": "Austin",
                  "addressRegion": "TX",
                  "postalCode": "78701",
                  "addressCountry": "US"
                },
                "url": "https://tradeautomation.ai"
              }
            ]
          })
        }}
      />
    </footer>
  );
}
