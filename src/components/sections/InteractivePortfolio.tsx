"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DemoPreviewModal } from "@/components/modals/DemoPreviewModal";
import { BookingModal } from "@/components/modals/BookingModal";
import { TRADE_PORTFOLIOS, TradeKey } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function InteractivePortfolio() {
  const [activeTab, setActiveTab] = React.useState<TradeKey>("Plumbing");
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);

  const activeData = TRADE_PORTFOLIOS[activeTab];

  return (
    <section id="demos" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Psychological Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <Badge className="mb-6 bg-slate-900 text-red-500 border border-red-500/50 px-5 py-2 text-sm font-extrabold shadow-[0_0_20px_rgba(239,68,68,0.4)] tracking-wider">
            ⚠️ THE COLD HARD TRUTH
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 max-w-4xl leading-tight">
            Why Your Current Website Is <span className="text-destructive">Secretly Bleeding Your Business Dry.</span>
          </h2>
          <p className="text-xl font-medium text-muted-foreground max-w-3xl">
            An outdated, slow website isn&apos;t just ugly—it handed at least <span className="text-foreground font-bold border-b-2 border-red-500">$5,000 in local jobs</span> to your competitors last month. Here is the exact system that stops the leak.
          </p>
        </div>

        {/* Interactive Niche Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-muted/50 p-2 rounded-2xl max-w-fit mx-auto border border-border">
          {(Object.keys(TRADE_PORTFOLIOS) as TradeKey[]).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "relative px-6 py-3 rounded-xl text-sm font-bold transition-colors z-10",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {TRADE_PORTFOLIOS[key].tabLabel}
              </button>
            );
          })}
        </div>

        {/* Dynamic Demo Display (2-Column Grid) */}
        <div className="bg-card rounded-[2.5rem] shadow-2xl border border-border overflow-hidden ring-1 ring-slate-900/5">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            
            {/* Left Column: High-Contrast Visual Showcase */}
            <div className="p-8 md:p-12 bg-slate-900 relative overflow-hidden flex items-center justify-center min-h-[650px] perspective-1000">
              
              {/* Premium Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
              
              {/* Floating Psychological Badges (Glassmorphic) */}
              <div className="absolute top-8 left-4 right-4 md:left-8 md:right-8 z-20 flex flex-col gap-4 pointer-events-none">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="self-start bg-red-500/10 backdrop-blur-xl border border-red-500/30 text-red-100 px-4 py-2.5 rounded-2xl font-bold shadow-2xl text-xs sm:text-sm flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/20 text-red-400">✖</span>
                  Old Site: 6.8s Load = 53% Bounce
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/30 text-emerald-100 px-4 py-2.5 rounded-2xl font-bold shadow-2xl text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Our Site: 1.2s Load = 4x Bookings
                </motion.div>
              </div>

              {/* Pulsing Bottom Banner */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full max-w-[320px]">
                <div className="bg-white/10 border border-white/20 shadow-2xl rounded-full px-5 py-3.5 flex items-center justify-center gap-3 backdrop-blur-xl">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </div>
                  <span className="text-sm font-bold text-white tracking-wide">AI Catch-Net Active: No Missed Leads</span>
                </div>
              </div>

              {/* 3D iPhone 15 Pro Frame */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                  animate={{ opacity: 1, rotateY: -5, scale: 1 }}
                  exit={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  className="w-[280px] h-[580px] bg-black rounded-[3.5rem] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative transform-gpu hover:rotate-y-0 hover:scale-105 transition-all duration-700 mt-10 ring-1 ring-white/10 z-10"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 border-[5px] border-slate-800/80 rounded-[3.5rem] pointer-events-none" />
                  
                  {/* Dynamic Island */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-30 shadow-[inset_0_-2px_10px_rgba(255,255,255,0.05)] flex items-center justify-between px-2 py-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800/80"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>

                  {/* Screen Content */}
                  <div className="w-full h-full bg-slate-50 rounded-[2.75rem] overflow-hidden relative border border-slate-800/50">
                    <motion.div 
                      className="absolute inset-x-0 top-0 w-full"
                      animate={{ y: [0, -300, 0] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="h-16 bg-accent flex items-center px-5 sticky top-0 z-20 shadow-sm">
                        <span className="text-white font-black text-lg leading-tight uppercase tracking-wide">{activeData.tabLabel.replace(/[^a-zA-Z\s]/g, '').trim().split(' ')[0]}<br/>Pros</span>
                      </div>
                      <div className="p-5 pb-20">
                        <div className="w-full h-36 bg-slate-200 rounded-2xl mb-5" />
                        <div className="h-7 w-3/4 bg-slate-300 rounded-lg mb-3" />
                        <div className="h-4 w-full bg-slate-200 rounded-md mb-2" />
                        <div className="h-4 w-5/6 bg-slate-200 rounded-md mb-6" />
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="h-28 bg-slate-200 rounded-2xl" />
                          <div className="h-28 bg-slate-200 rounded-2xl" />
                        </div>
                        
                        <div className="h-14 bg-accent rounded-xl flex items-center justify-center shadow-md shadow-accent/20">
                          <span className="text-white font-bold">Book Online</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Floating Chat Widget */}
                    <div className="absolute bottom-20 right-4 z-40">
                      <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center shadow-xl ring-2 ring-white">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Premium Pain vs Solution Copy */}
            <div className="p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center bg-white dark:bg-slate-950 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-xl"
                >
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
                    The Brutal Comparison
                  </h3>

                  {/* Bad Side (Visually Recessive & Clinical) */}
                  <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 relative">
                    <div className="absolute -top-3.5 left-6 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-4 py-1 font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-2 shadow-sm">
                      <AlertTriangle className="w-3.5 h-3.5" /> Your Current Website
                    </div>
                    <ul className="space-y-4 mt-2">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-red-600 dark:text-red-400 font-bold text-xs">✖</span>
                        </div>
                        <span className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Takes 5+ seconds to load (70% of homeowners hit &apos;Back&apos; and call the next guy).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-red-600 dark:text-red-400 font-bold text-xs">✖</span>
                        </div>
                        <span className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">No way to text you—forces busy homeowners to wait for an email reply.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-red-600 dark:text-red-400 font-bold text-xs">✖</span>
                        </div>
                        <span className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Zero automated follow-up when you miss a call on the job site.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Good Side (Visually Prominent & Premium) */}
                  <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-accent/5 border border-accent/20 relative shadow-[0_0_40px_rgba(255,107,0,0.05)]">
                    <div className="absolute -top-3.5 left-6 bg-accent text-white px-4 py-1 font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-2 shadow-md">
                      <Zap className="w-3.5 h-3.5 fill-current" /> Our High-Speed Engine
                    </div>
                    <ul className="space-y-4 mt-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                        <span className="text-slate-900 dark:text-white font-bold leading-relaxed">1.2-Second Mobile Load Time <span className="font-medium text-slate-500 dark:text-slate-400">(Dominates Google Local Rankings).</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                        <span className="text-slate-900 dark:text-white font-bold leading-relaxed">&apos;Tap-To-Text&apos; & 3-Second AI Response <span className="font-medium text-slate-500 dark:text-slate-400">for emergency jobs.</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                        <span className="text-slate-900 dark:text-white font-bold leading-relaxed">Automatically turns every finished job <span className="font-medium text-slate-500 dark:text-slate-400">into a 5-Star Google Review.</span></span>
                      </li>
                    </ul>
                  </div>

                  {/* Premium CTAs */}
                  <div className="flex flex-col xl:flex-row gap-4 w-full">
                    <Button size="lg" className="w-full xl:flex-1 h-14 bg-accent hover:bg-accent/90 text-white font-extrabold text-sm sm:text-base px-6 shadow-xl shadow-accent/20" onClick={() => setIsDemoModalOpen(true)}>
                      Test Live Revenue Engine
                    </Button>
                    <Button variant="outline" size="lg" className="w-full xl:flex-1 h-14 font-bold border-2 text-sm sm:text-base bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 px-6" onClick={() => setIsBookingModalOpen(true)}>
                      Replace My Website
                    </Button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      <DemoPreviewModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
        tradeId={activeData.id} 
      />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
}
