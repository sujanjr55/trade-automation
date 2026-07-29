"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PlayCircle, PhoneMissed, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const handleOpenCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6"
          >
            Never Lose Another <span className="text-accent">$1,000+ Job</span> To A Missed Call.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            We install an automated Speed-to-Lead system for US HVAC, Plumbing & Roofing contractors that texts back missed callers in 3 seconds and books jobs 24/7.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 shadow-xl shadow-accent/20" onClick={handleOpenCalculator}>
              Calculate Your Lost Revenue
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 gap-2">
              <PlayCircle className="w-5 h-5" />
              Watch 60-Sec Demo Video
            </Button>
          </motion.div>
        </div>

        {/* 3D Visual Element */}
        <div className="flex-1 w-full max-w-md lg:max-w-none perspective-1000">
          <SmartphoneAnimation />
        </div>
      </div>
    </section>
  );
}

function SmartphoneAnimation() {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    let isMounted = true;
    const runSequence = async () => {
      while (isMounted) {
        setStep(0);
        await new Promise(r => setTimeout(r, 1000));
        
        // Incoming Call
        setStep(1);
        await new Promise(r => setTimeout(r, 2000));
        
        // Missed Call -> Text Back
        setStep(2);
        await new Promise(r => setTimeout(r, 2000));
        
        // Job Booked
        setStep(3);
        await new Promise(r => setTimeout(r, 4000));
      }
    };
    runSequence();
    return () => { isMounted = false; };
  }, []);

  return (
    <motion.div
      initial={{ rotateX: 10, rotateY: -15 }}
      animate={{ rotateX: 5, rotateY: -10, y: [0, -10, 0] }}
      transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      className="relative mx-auto w-[300px] h-[600px] bg-slate-950 rounded-[3.5rem] shadow-2xl p-3 transform-gpu ring-1 ring-slate-800"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Outer border for the physical phone body */}
      <div className="absolute inset-0 border-4 border-slate-700/50 rounded-[3.5rem] pointer-events-none" />
      
      {/* Dynamic Island */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-30 shadow-[inset_0_-2px_10px_rgba(255,255,255,0.1)] flex items-center justify-between px-2 py-1">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-800/80"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
      </div>
      
      {/* Phone Screen Content */}
      <div className="relative w-full h-full bg-background rounded-[2.75rem] overflow-hidden flex flex-col pt-14 p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] border border-slate-800/50">
        
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex items-center justify-center text-muted-foreground text-sm font-medium">
              Waiting for calls...
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="call" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col items-center justify-center gap-6">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center animate-pulse">
                <PhoneMissed className="w-10 h-10 text-red-500" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">Incoming Call</h3>
                <p className="text-muted-foreground">(555) 019-2834</p>
              </div>
              <div className="flex gap-6 mt-8">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30"><PhoneMissed className="w-7 h-7" /></div>
              </div>
            </motion.div>
          )}

          {(step === 2 || step === 3) && (
            <motion.div key="text" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-center text-muted-foreground">Today 2:30 PM</span>
                <div className="bg-accent text-accent-foreground p-3.5 rounded-2xl rounded-tl-sm self-start max-w-[85%] shadow-sm">
                  <p className="text-sm font-medium leading-snug">Hi, this is Elite Plumbing. We saw we just missed your call. How can we help you today?</p>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="bg-muted border border-border text-foreground p-3.5 rounded-2xl rounded-tr-sm self-end max-w-[85%] mt-1 shadow-sm">
                  <p className="text-sm font-medium leading-snug">My water heater is leaking everywhere!</p>
                </motion.div>
                
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="mt-8 bg-card border border-green-500/30 bg-green-500/5 rounded-2xl p-5 shadow-lg text-center flex flex-col items-center gap-3 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
                    <CalendarCheck className="w-10 h-10 text-green-500" />
                    <div>
                      <h4 className="font-extrabold text-foreground text-lg">Job Booked</h4>
                      <p className="text-sm font-medium text-muted-foreground">Emergency Repair - Tom</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}

// Needed AnimatePresence inside SmartphoneAnimation
import { AnimatePresence } from "framer-motion";
