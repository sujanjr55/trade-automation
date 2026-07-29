"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertTriangle } from "lucide-react";
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
        <div className="bg-card rounded-[2.5rem] shadow-2xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            
            {/* Left Column: Interactive Mobile Device Simulator */}
            <div className="p-8 md:p-12 bg-slate-900/5 dark:bg-slate-900/30 flex items-center justify-center relative overflow-hidden h-full min-h-[650px] lg:border-r border-border perspective-1000">
              
              {/* Floating Psychological Badges */}
              <div className="absolute top-6 left-2 right-2 md:left-6 md:right-6 z-20 flex flex-col gap-3 pointer-events-none">
                <Badge className="self-start bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 px-3 py-2 font-bold shadow-lg backdrop-blur-md text-xs sm:text-sm">
                  ❌ Old Site: 6.8s Load Speed = 53% Visitors Leave
                </Badge>
                <Badge className="self-end bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 px-3 py-2 font-bold shadow-lg backdrop-blur-md text-xs sm:text-sm">
                  ✅ Our Site: 1.2s Load Speed = 4x More Bookings
                </Badge>
              </div>

              {/* Pulsing Bottom Banner */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-[90%] max-w-[300px]">
                <div className="bg-card border border-accent/40 shadow-[0_0_20px_rgba(255,107,0,0.2)] rounded-full px-4 py-3 flex items-center justify-center gap-3 backdrop-blur-xl">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </div>
                  <span className="text-sm font-extrabold text-foreground">💬 AI Catch-Net Active: No Missed Leads</span>
                </div>
              </div>

              {/* 3D iPhone 15 Pro Frame */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
                  animate={{ opacity: 1, rotateY: -10, scale: 1 }}
                  exit={{ opacity: 0, rotateY: -20, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-[280px] h-[580px] bg-slate-950 rounded-[3rem] p-3 shadow-2xl relative transform-gpu hover:rotate-y-0 transition-transform duration-500 mt-10"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 border-4 border-slate-700/50 rounded-[3rem] pointer-events-none" />
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-30" />

                  <div className="w-full h-full bg-background rounded-[2.25rem] overflow-hidden relative shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]">
                    
                    <motion.div 
                      className="absolute inset-x-0 top-0 w-full"
                      animate={{ y: [0, -300, 0] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="h-16 bg-primary flex items-center px-4 sticky top-0 z-20">
                        <span className="text-primary-foreground font-bold text-lg leading-tight">{activeData.tabLabel.replace(/[^a-zA-Z\s]/g, '').trim().split(' ')[0]}<br/>Pros</span>
                      </div>
                      <div className="p-6 pb-20 bg-muted/20">
                        <div className="w-full h-32 bg-slate-200 dark:bg-slate-800 rounded-xl mb-4" />
                        <div className="h-6 w-3/4 bg-slate-300 dark:bg-slate-700 rounded mb-2" />
                        <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded mb-2" />
                        <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded mb-8" />
                        
                        <div className="grid grid-cols-2 gap-2 mb-8">
                          <div className="h-24 bg-slate-200 dark:bg-slate-800 rounded-xl" />
                          <div className="h-24 bg-slate-200 dark:bg-slate-800 rounded-xl" />
                        </div>
                        
                        <div className="h-32 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30">
                          <span className="text-accent font-bold">Book Online</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="absolute bottom-20 right-4 z-40">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(255,107,0,0.4)]">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Pain vs Solution Copy */}
            <div className="p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-black text-foreground mb-10 leading-tight">
                    The Brutal Comparison
                  </h3>

                  {/* Bad Side */}
                  <div className="mb-8 p-6 rounded-2xl bg-destructive/5 border border-destructive/20 relative">
                    <div className="absolute -top-4 left-6 bg-destructive text-destructive-foreground px-3 py-1 font-bold text-sm rounded-md tracking-widest flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> YOUR CURRENT WEBSITE
                    </div>
                    <ul className="space-y-4 mt-2">
                      <li className="flex items-start gap-3">
                        <span className="text-destructive font-bold text-lg leading-none shrink-0 mt-0.5">✖</span>
                        <span className="text-foreground/80 font-medium">Takes 5+ seconds to load (70% of homeowners hit &apos;Back&apos; and call the next guy).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive font-bold text-lg leading-none shrink-0 mt-0.5">✖</span>
                        <span className="text-foreground/80 font-medium">No way to text you—forces busy homeowners to wait for an email reply.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive font-bold text-lg leading-none shrink-0 mt-0.5">✖</span>
                        <span className="text-foreground/80 font-medium">Zero automated follow-up when you miss a call on the job site.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Good Side */}
                  <div className="mb-10 p-6 rounded-2xl bg-primary/5 border border-primary/20 relative shadow-[0_0_30px_rgba(0,0,0,0.02)]">
                    <div className="absolute -top-4 left-6 bg-primary text-primary-foreground px-3 py-1 font-bold text-sm rounded-md tracking-widest flex items-center gap-2">
                      <Zap className="w-4 h-4 fill-current" /> OUR HIGH-SPEED TRADE ENGINE
                    </div>
                    <ul className="space-y-4 mt-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-foreground font-bold">1.2-Second Mobile Load Time <span className="font-normal text-muted-foreground">(Dominates Google Local Rankings).</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-foreground font-bold">&apos;Tap-To-Text&apos; & 3-Second Instant AI Response <span className="font-normal text-muted-foreground">for emergency jobs.</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-foreground font-bold">Automatically turns every finished job <span className="font-normal text-muted-foreground">into a 5-Star Google Review.</span></span>
                      </li>
                    </ul>
                  </div>

                  {/* Aggressive CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Button size="lg" className="flex-1 shadow-[0_0_20px_rgba(255,107,0,0.3)] bg-accent hover:bg-accent/90 text-white font-extrabold text-base" onClick={() => setIsDemoModalOpen(true)}>
                      Test The $10k/Mo Revenue Engine
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1 font-bold border-2 text-base bg-slate-900 text-white hover:bg-slate-800 hover:text-white" onClick={() => setIsBookingModalOpen(true)}>
                      Replace My Leaky Website
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
