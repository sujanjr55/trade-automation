"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
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
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <Badge className="mb-6 bg-slate-900 text-accent border border-accent/20 px-4 py-1.5 text-sm font-bold shadow-[0_0_15px_rgba(255,107,0,0.3)]">
            PROVEN TEMPLATES & LIVE DEMOS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 max-w-4xl leading-tight">
            Websites Built For One Thing: <span className="text-accent">Turning Visitors Into Paid Jobs.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our ultra-fast, mobile-optimized trade site engines with built-in Speed-to-Lead chat & automated booking.
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
            <div className="p-8 md:p-16 bg-slate-900/5 dark:bg-slate-900/30 flex items-center justify-center relative overflow-hidden h-full min-h-[600px] lg:border-r border-border perspective-1000">
              
              {/* Overlaid Badges */}
              <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-3 pointer-events-none">
                <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 px-3 py-1 font-bold shadow-lg backdrop-blur-md">
                  <Zap className="w-3 h-3 mr-1 inline" /> 1.2s Load Speed
                </Badge>
                <div className="bg-card border border-border shadow-lg rounded-full px-4 py-2 flex items-center gap-2 backdrop-blur-md">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </div>
                  <span className="text-xs font-bold text-foreground">AI Speed-to-Lead Active</span>
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
                  className="w-[280px] h-[580px] bg-slate-950 rounded-[3rem] p-3 shadow-2xl relative transform-gpu hover:rotate-y-0 transition-transform duration-500"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Outer Frame Edge */}
                  <div className="absolute inset-0 border-4 border-slate-700/50 rounded-[3rem] pointer-events-none" />
                  
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-30" />

                  {/* Inner Screen */}
                  <div className="w-full h-full bg-background rounded-[2.25rem] overflow-hidden relative shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]">
                    
                    {/* Simulated Site Auto-Scrolling */}
                    <motion.div 
                      className="absolute inset-x-0 top-0 w-full"
                      animate={{ y: [0, -300, 0] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="h-16 bg-primary flex items-center px-4 sticky top-0 z-20">
                        <span className="text-primary-foreground font-bold text-lg leading-tight">{activeData.tabLabel.split(' ')[1]}<br/>Pros</span>
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
                    
                    {/* Live Chat Mockup (Sticky) */}
                    <div className="absolute bottom-4 right-4 z-40">
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

            {/* Right Column: Feature Breakdown */}
            <div className="p-8 md:p-16 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-extrabold text-foreground mb-4">
                    {activeData.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    {activeData.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {[
                      "2-Second Mobile PageSpeed (Guaranteed Google Rank Boost)",
                      "Instant Click-To-Call & Tap-To-Text floating bar for emergency jobs",
                      "Embedded 24/7 AI Booking Calendar & Missed-Call Catch Net",
                      "Automated Google 5-Star Review Collection Engine"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Performance Stat Boxes */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="bg-accent/10 border border-accent/20 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-extrabold text-accent mb-1">{activeData.stats.conversion.split(' ')[0]}</div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wider">{activeData.stats.conversion.substring(activeData.stats.conversion.indexOf(' ')+1)}</div>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-extrabold text-primary mb-1">100%</div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wider">Mobile Ready</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex-1 shadow-lg shadow-accent/20" onClick={() => setIsDemoModalOpen(true)}>
                      Test Live Interactive Demo
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1" onClick={() => setIsBookingModalOpen(true)}>
                      Claim This Site For My Business
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
