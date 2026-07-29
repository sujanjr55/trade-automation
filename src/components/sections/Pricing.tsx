"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Zap, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BookingModal } from "@/components/modals/BookingModal";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);
  const [billingMode, setBillingMode] = React.useState<"upfront" | "monthly">("upfront");
  const [expandedComparison, setExpandedComparison] = React.useState(false);

  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header Copy & Toggle Switch */}
        <div className="text-center mb-16 flex flex-col items-center">
          <Badge className="mb-6 bg-slate-800 text-slate-300 border border-slate-700 px-4 py-1.5 text-sm font-bold tracking-widest uppercase shadow-xl">
            TRANSPARENT PRICING • NO HIDDEN FEES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl leading-tight text-white">
            Choose The Right Engine For Your Trade Business
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mb-10">
            Whether you just need an ultra-fast local website or a full 24/7 AI Missed-Call Booking System—we have you covered.
          </p>

          {/* Interactive Billing Toggle */}
          <div className="flex items-center bg-slate-800/80 p-1.5 rounded-full border border-slate-700 shadow-xl relative z-20">
            <button
              onClick={() => setBillingMode("upfront")}
              className={cn(
                "relative px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-colors z-10 w-48",
                billingMode === "upfront" ? "text-white" : "text-slate-400 hover:text-white"
              )}
            >
              {billingMode === "upfront" && (
                <motion.div
                  layoutId="pricingTabBackground"
                  className="absolute inset-0 bg-slate-700 rounded-full -z-10 shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Pay Upfront / One-Time
            </button>
            <button
              onClick={() => setBillingMode("monthly")}
              className={cn(
                "relative px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-colors z-10 w-48",
                billingMode === "monthly" ? "text-white" : "text-slate-400 hover:text-white"
              )}
            >
              {billingMode === "monthly" && (
                <motion.div
                  layoutId="pricingTabBackground"
                  className="absolute inset-0 bg-slate-700 rounded-full -z-10 shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Monthly Retainer
            </button>
          </div>
        </div>

        {/* Side-by-Side Service Cards (2-Column Grid) */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-stretch">
          
          {/* CARD 1: HIGH-SPEED TRADE WEBSITE ONLY */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col shadow-2xl backdrop-blur-sm"
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md mb-4 border border-slate-700">
                Standard Web Presence
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight">
                HIGH-SPEED TRADE WEBSITE ONLY
              </h3>
              <p className="text-slate-400 font-medium">
                For contractors who just want an ultra-fast, modern website that dominates local competitors.
              </p>
            </div>

            <div className="mb-8 pb-8 border-b border-slate-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={billingMode}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {billingMode === "upfront" ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">$497</span>
                      <span className="text-slate-400 font-bold">One-Time Setup</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">$97</span>
                      <span className="text-slate-400 font-bold">/month (12mo contract)</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <ul className="space-y-5 mb-10 flex-1">
              {[
                { text: "Sub-2 Second Mobile Load Speed (Google Rank Ready)", included: true },
                { text: "100% Mobile & Touch-Optimized Layout", included: true },
                { text: "Custom Trade Design (Plumbing/HVAC/Roofing)", included: true },
                { text: "Tap-To-Call & Fast Estimate Request Forms", included: true },
                { text: "SSL, Hosting Setup & Basic Local SEO Schema", included: true },
                { text: "Does NOT include Automated Text-Back or AI Booking", included: false },
              ].map((feature, i) => (
                <li key={i} className={cn("flex items-start gap-3", !feature.included && "opacity-60")}>
                  {feature.included ? (
                    <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  )}
                  <span className={cn("font-medium", feature.included ? "text-slate-200" : "text-slate-400 line-through")}>{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant="outline" 
              size="lg" 
              className="w-full font-bold text-base bg-transparent border-2 border-slate-700 hover:bg-slate-800 text-white h-14"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Get Fast Website Only
            </Button>
          </motion.div>

          {/* CARD 2: WEBSITE + SPEED-TO-LEAD AUTOMATION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-900 border-2 border-accent rounded-3xl p-8 sm:p-10 flex flex-col shadow-[0_0_40px_rgba(255,107,0,0.2)] relative overflow-hidden"
          >
            {/* Top glowing edge */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
            
            <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1.5 font-black text-xs uppercase tracking-widest rounded-bl-xl z-10 shadow-lg flex items-center gap-1">
              <Zap className="w-3 h-3 fill-current" /> MOST POPULAR - 10X ROI
            </div>

            <div className="mb-6 pt-2">
              <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider rounded-md mb-4 border border-accent/30">
                Complete Revenue Engine
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight">
                WEBSITE + SPEED-TO-LEAD AUTOMATION
              </h3>
              <p className="text-slate-300 font-medium">
                For contractors who want to capture lost missed calls and automatically book jobs 24/7.
              </p>
            </div>

            <div className="mb-8 pb-8 border-b border-slate-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={billingMode}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {billingMode === "upfront" ? (
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-5xl font-black text-white">$797</span>
                        <span className="text-slate-300 font-bold">Setup</span>
                      </div>
                      <div className="text-accent font-bold">+ $297/mo Software & Maintenance</div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-5xl font-black text-white">$497</span>
                        <span className="text-slate-300 font-bold">/mo all-inclusive</span>
                      </div>
                      <div className="text-accent font-bold">No Setup Fee (12mo contract)</div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                { text: "EVERYTHING in the High-Speed Website Pack", icon: <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" /> },
                { text: "15-Second Missed Call Text-Back (Captures lost leads instantly)", icon: <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" /> },
                { text: "24/7 AI Assistant (Answers customer FAQs via SMS & Chat)", icon: <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> },
                { text: "Direct Calendar Sync & Automated Appointment Booking", icon: <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> },
                { text: "Automated Google Review Engine (Turns finished jobs into 5-star reviews)", icon: <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> },
                { text: "Mobile CRM App Access (Manage leads on your phone)", icon: <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> },
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  {feature.icon}
                  <span className="font-bold text-slate-100">{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 mb-8 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-green-500 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-green-400">30-Day Money-Back Guarantee (If we don&apos;t save you at least 3 missed jobs)</span>
            </div>

            <Button 
              size="lg" 
              className="w-full font-black text-base bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(255,107,0,0.4)] h-14 uppercase tracking-wide"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Claim Website + AI Automation Engine
            </Button>
          </motion.div>

        </div>

        {/* Comparison Accordion / Checklist */}
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setExpandedComparison(!expandedComparison)}
            className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex items-center justify-between transition-colors shadow-lg"
          >
            <div className="text-left">
              <h4 className="text-xl font-bold text-white mb-1">Which service is right for me?</h4>
              <p className="text-slate-400 text-sm">See the exact difference between Website Only vs Website + Automation.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
              <motion.div animate={{ rotate: expandedComparison ? 180 : 0 }}>
                <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
          </button>

          <AnimatePresence>
            {expandedComparison && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl mt-4 p-6 sm:p-8 backdrop-blur-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr>
                          <th className="pb-4 border-b border-slate-800 text-slate-400 font-medium w-1/2">Feature</th>
                          <th className="pb-4 border-b border-slate-800 text-center text-slate-300 font-bold w-1/4">Website Only</th>
                          <th className="pb-4 border-b border-slate-800 text-center text-accent font-black w-1/4">Website + Automation</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm sm:text-base divide-y divide-slate-800/50">
                        {[
                          { label: "High-Speed Mobile Design", web: true, auto: true },
                          { label: "Premium Trade Customization", web: true, auto: true },
                          { label: "On-Page SEO Optimization", web: true, auto: true },
                          { label: "Secure Hosting & SSL", web: true, auto: true },
                          { label: "Missed Call Text-Back System", web: false, auto: true },
                          { label: "24/7 AI Chat & SMS Booking", web: false, auto: true },
                          { label: "Automated Review Requests", web: false, auto: true },
                          { label: "Mobile CRM App Included", web: false, auto: true },
                          { label: "30-Day Money-Back Guarantee", web: false, auto: true },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-slate-900/50 transition-colors">
                            <td className="py-4 font-medium text-slate-200">{row.label}</td>
                            <td className="py-4 text-center">
                              {row.web ? <CheckCircle2 className="w-5 h-5 text-slate-500 mx-auto" /> : <span className="text-slate-700 font-bold">-</span>}
                            </td>
                            <td className="py-4 text-center bg-accent/5">
                              {row.auto ? <CheckCircle2 className="w-5 h-5 text-accent mx-auto" /> : <span className="text-slate-700 font-bold">-</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
}
