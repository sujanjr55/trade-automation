"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MonitorSmartphone, Target, ArrowRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Import Trade Components
import { TRADE_PORTFOLIOS, TradeKey } from "@/lib/constants";
import { PlumbingPreview } from "@/components/demos/PlumbingPreview";
import { HvacPreview } from "@/components/demos/HvacPreview";
import { RoofingPreview } from "@/components/demos/RoofingPreview";
import { ElectricianPreview } from "@/components/demos/ElectricianPreview";

import { cn } from "@/lib/utils";

// Map the constant keys to the new React components
const PORTFOLIO_COMPONENTS: Record<TradeKey, React.ElementType> = {
  Plumbing: PlumbingPreview,
  HVAC: HvacPreview,
  Roofing: RoofingPreview,
  Electrical: ElectricianPreview,
};

// Map trade keys to specific glow colors for ambient effects
const TRADE_COLORS: Record<TradeKey, string> = {
  Plumbing: "blue",
  HVAC: "cyan",
  Roofing: "orange",
  Electrical: "yellow"
};

export function InteractivePortfolio() {
  const [activeTab, setActiveTab] = React.useState<TradeKey>("Plumbing");
  const activeData = TRADE_PORTFOLIOS[activeTab];
  const ActiveComponent = PORTFOLIO_COMPONENTS[activeTab];
  const activeColor = TRADE_COLORS[activeTab];

  return (
    <section id="work" className="py-24 bg-[#0B0F19] overflow-hidden relative">
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-900 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <MonitorSmartphone className="w-4 h-4" /> Live Interactive Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Stop Losing Jobs To <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Ugly Websites.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Test drive our ultra-fast, high-converting trade funnels below. Scroll, tap, and interact to see exactly why these out-convert standard templates by 300%.
          </p>
        </div>

        {/* Interactive Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-white/5 p-2 rounded-2xl max-w-fit mx-auto border border-white/10 backdrop-blur-md">
          {(Object.keys(TRADE_PORTFOLIOS) as TradeKey[]).map((key) => {
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
                    layoutId="activeTabTrade"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl -z-10 shadow-lg backdrop-blur-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {TRADE_PORTFOLIOS[key].tabLabel}
              </button>
            );
          })}
        </div>

        {/* 2-Column Showcase Grid */}
        <div className="grid lg:grid-cols-[450px_1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Ultra-Luxurious iPhone 17 Pro Max Frame */}
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
                  activeColor === "blue" && "bg-blue-500/20",
                  activeColor === "cyan" && "bg-cyan-500/20",
                  activeColor === "orange" && "bg-orange-500/20",
                  activeColor === "yellow" && "bg-yellow-500/20"
                )}
              />
            </AnimatePresence>

            {/* IPHONE 17 PRO MAX CHASSIS */}
            <div className="w-[340px] aspect-[9/19.5] bg-slate-900 p-[6px] rounded-[50px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/15 relative overflow-hidden shrink-0 group">
              
              {/* Dynamic Island */}
              <div className="w-[88px] h-[22px] bg-black rounded-full z-40 absolute top-3 left-1/2 -translate-x-1/2 flex items-center justify-between px-2 shadow-[inset_0_-2px_10px_rgba(255,255,255,0.05)] border border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
                <div className="w-2 h-2 rounded-full bg-indigo-500/50 blur-[1px]"></div>
              </div>

              {/* Glass Reflection Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-[50px] pointer-events-none z-30 mix-blend-overlay" />
              
              {/* Side Buttons (Volume / Power) */}
              <div className="absolute top-[120px] -left-[1px] w-[2px] h-[25px] bg-slate-700 rounded-l-md" />
              <div className="absolute top-[160px] -left-[1px] w-[2px] h-[45px] bg-slate-700 rounded-l-md" />
              <div className="absolute top-[220px] -left-[1px] w-[2px] h-[45px] bg-slate-700 rounded-l-md" />
              <div className="absolute top-[180px] -right-[1px] w-[2px] h-[65px] bg-slate-700 rounded-r-md" />

              {/* Scrollable Screen Content Container */}
              <div className="w-full h-full bg-slate-950 rounded-[44px] overflow-hidden relative z-20">
                <div className="w-full h-full overflow-y-auto scrollbar-none scroll-smooth">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="min-h-full"
                    >
                      <ActiveComponent />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Hover Full-Screen Expansion Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 flex items-center justify-center">
                  <button className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Expand className="w-4 h-4" /> Tap to Expand Full Screen
                  </button>
                </div>
              </div>
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
                transition={{ duration: 0.3 }}
                className="max-w-xl"
              >
                
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
                  {activeData.title}
                </h3>
                
                <p className="text-slate-400 text-base leading-relaxed mb-8 font-medium">
                  {activeData.description}
                </p>

                {/* Conversion Stats */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-green-400 font-black">↑ {activeData.stats.conversion.split(' ')[0]}</span> Conversion Lift
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold text-white flex items-center gap-2">
                    📱 {activeData.stats.mobile}
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                  <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-slate-400" /> System Features:
                  </h5>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                      <span className="text-slate-300 font-medium text-sm leading-snug">Speed-to-Lead Automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                      <span className="text-slate-300 font-medium text-sm leading-snug">24/7 AI Chatbot ({activeData.chatbotName})</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                      <span className="text-slate-300 font-medium text-sm leading-snug">Sub-1 Second Load Times</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                      <span className="text-slate-300 font-medium text-sm leading-snug">Local SEO Optimized Structure</span>
                    </li>
                  </ul>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="w-full sm:w-auto h-14 bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-sm px-8 shadow-xl">
                    Get This System <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 font-bold border-2 text-sm bg-transparent text-white border-white/20 hover:bg-white/10 px-8">
                    View Live Site
                  </Button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
      
      {/* Utility CSS for hiding scrollbar inside the iPhone */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
