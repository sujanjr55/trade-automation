"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MonitorSmartphone, Zap, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Import the live demo components
import { TechSaaSDemo } from "@/components/demos/TechSaaSDemo";
import { HealthcareDemo } from "@/components/demos/HealthcareDemo";
import { RealEstateDemo } from "@/components/demos/RealEstateDemo";
import { ConsultingDemo } from "@/components/demos/ConsultingDemo";
import { cn } from "@/lib/utils";

type AgencyIndustryKey = "SaaS" | "Healthcare" | "RealEstate" | "Consulting";

const AGENCY_PORTFOLIOS = {
  SaaS: {
    id: "SaaS",
    tabLabel: "Tech SaaS",
    title: "AI Software & SaaS",
    tagline: "High-Converting Tech Infrastructure",
    description: "A dark-mode, neon-accented architecture designed to convert technical buyers. Built for speed, loaded with interactive micro-animations, and engineered to drive free-trial signups.",
    highlights: ["⚡️ 99/100 PageSpeed", "🎯 4.8% Conv. Rate", "📱 100% Mobile Optimized"],
    features: [
      "Dynamic Pricing Toggles",
      "Interactive Feature Dashboards",
      "Glassmorphic UI Elements",
      "Automated Product Tours"
    ],
    component: TechSaaSDemo,
    color: "indigo"
  },
  Healthcare: {
    id: "Healthcare",
    tabLabel: "Healthcare",
    title: "Modern Healthcare",
    tagline: "Trust-Building Medical Portals",
    description: "A clean, highly accessible interface designed to build immediate trust and streamline patient intake. Optimized for older demographics while maintaining a premium aesthetic.",
    highlights: ["🔒 HIPAA Compliant UI", "📅 Smart Scheduling", "♿️ WCAG AA Accessible"],
    features: [
      "Real-time Appointment Booking",
      "Dynamic Doctor Profiles",
      "Video Testimonial Integrations",
      "Integrated Patient Portals"
    ],
    component: HealthcareDemo,
    color: "teal"
  },
  RealEstate: {
    id: "RealEstate",
    tabLabel: "Real Estate",
    title: "Luxury Real Estate",
    tagline: "Editorial Property Showcases",
    description: "An elegant, minimalist design language that lets high-end properties speak for themselves. Features full-bleed imagery and sophisticated typography for UHNW clientele.",
    highlights: ["📸 4K Image Optimization", "🔍 Interactive Maps", "✨ Premium Aesthetic"],
    features: [
      "Dynamic Property Filters",
      "Immersive Virtual Tours",
      "Private Listing Portals",
      "Lead-Gen Inquiry Forms"
    ],
    component: RealEstateDemo,
    color: "amber"
  },
  Consulting: {
    id: "Consulting",
    tabLabel: "Consulting",
    title: "Executive Consulting",
    tagline: "Authority-Building Corporate Hub",
    description: "A commanding, sharp corporate aesthetic designed to establish absolute authority. Engineered to attract 8-figure founders and enterprise contracts.",
    highlights: ["📊 Live Data Metrics", "🏢 Enterprise Grade", "💼 Authority Focused"],
    features: [
      "Interactive ROI Calculators",
      "Client Logo Tickers",
      "Gated Case Study Assets",
      "Growth Audit Booking"
    ],
    component: ConsultingDemo,
    color: "blue"
  }
} as const;

export function InteractivePortfolio() {
  const [activeTab, setActiveTab] = React.useState<AgencyIndustryKey>("SaaS");
  const activeData = AGENCY_PORTFOLIOS[activeTab];

  return (
    <section id="work" className="py-24 bg-[#0B0F19] overflow-hidden relative">
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <MonitorSmartphone className="w-4 h-4" /> Live Interactive Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            We Build Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Masterpieces.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Experience our premium, industry-specific architectures in real-time. Scroll, interact, and feel the difference of a truly elite digital presence.
          </p>
        </div>

        {/* Interactive Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-white/5 p-2 rounded-2xl max-w-fit mx-auto border border-white/10 backdrop-blur-md">
          {(Object.keys(AGENCY_PORTFOLIOS) as AgencyIndustryKey[]).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "relative px-6 py-2.5 rounded-xl text-sm font-bold transition-colors z-10",
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabAgency"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl -z-10 shadow-lg backdrop-blur-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {AGENCY_PORTFOLIOS[key].tabLabel}
              </button>
            );
          })}
        </div>

        {/* 2-Column Showcase Grid */}
        <div className="grid lg:grid-cols-[450px_1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Interactive iPhone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Ambient Background Glow behind phone */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] rounded-full blur-[100px] pointer-events-none -z-10",
                  activeData.color === "indigo" && "bg-indigo-500/20",
                  activeData.color === "teal" && "bg-teal-500/20",
                  activeData.color === "amber" && "bg-amber-500/20",
                  activeData.color === "blue" && "bg-blue-500/20"
                )}
              />
            </AnimatePresence>

            {/* 3D iPhone 15 Pro Frame */}
            <div className="w-[320px] h-[650px] bg-black rounded-[3.5rem] p-3.5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative ring-1 ring-white/10 flex shrink-0">
              {/* Outer Bevel */}
              <div className="absolute inset-0 border-[4px] border-slate-800/80 rounded-[3.5rem] pointer-events-none z-20" />
              
              {/* Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[95px] h-[28px] bg-black rounded-full z-40 shadow-[inset_0_-2px_10px_rgba(255,255,255,0.05)] flex items-center justify-between px-2.5 py-1">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800/80"></div>
                <div className="w-2 h-2 rounded-full bg-indigo-500/50"></div>
              </div>

              {/* Scrollable Viewport Content */}
              <div className="w-full h-full bg-slate-950 rounded-[2.75rem] overflow-hidden relative border border-slate-800/80 z-30 flex flex-col">
                <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="min-h-full"
                    >
                      <activeData.component />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Reflection Highlight */}
              <div className="absolute top-0 left-6 w-[2px] h-32 bg-gradient-to-b from-white/30 to-transparent rounded-full z-50 pointer-events-none" />
            </div>
            
            {/* Scroll Indicator Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl flex items-center gap-2 z-50 animate-bounce">
              <Zap className="w-3.5 h-3.5 text-indigo-400" /> Scroll to explore
            </div>
          </div>

          {/* Right Column: Active Demo Info Panel */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-xl"
              >
                <h4 className={cn(
                  "text-sm font-black uppercase tracking-widest mb-3",
                  activeData.color === "indigo" && "text-indigo-400",
                  activeData.color === "teal" && "text-teal-400",
                  activeData.color === "amber" && "text-amber-400",
                  activeData.color === "blue" && "text-blue-400"
                )}>
                  {activeData.tagline}
                </h4>
                
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                  {activeData.title}
                </h3>
                
                <p className="text-slate-400 text-base leading-relaxed mb-8 font-medium">
                  {activeData.description}
                </p>

                {/* UX Highlights Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {activeData.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-2">
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Features Checklist */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                  <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-slate-400" /> Architecture Includes:
                  </h5>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {activeData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={cn(
                          "w-5 h-5 shrink-0 mt-0.5",
                          activeData.color === "indigo" && "text-indigo-500",
                          activeData.color === "teal" && "text-teal-500",
                          activeData.color === "amber" && "text-amber-500",
                          activeData.color === "blue" && "text-blue-500"
                        )} />
                        <span className="text-slate-300 font-medium text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="w-full sm:w-auto h-14 bg-white hover:bg-slate-200 text-slate-900 font-extrabold text-sm px-8 shadow-xl">
                    Launch Full Screen <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 font-bold border-2 text-sm bg-transparent text-white border-white/20 hover:bg-white/10 px-8">
                    Get a Site Like This
                  </Button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
      
      {/* Utility CSS for hiding scrollbar inside the iPhone */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
