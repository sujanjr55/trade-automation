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
      className="relative mx-auto w-[300px] h-[600px] bg-card rounded-[3rem] shadow-2xl border-8 border-slate-800 p-4 transform-gpu"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Phone Screen Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />
      
      {/* Phone Screen Content */}
      <div className="relative w-full h-full bg-background rounded-[2rem] overflow-hidden flex flex-col pt-12 p-4">
        
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex items-center justify-center text-muted-foreground">
              Waiting for calls...
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="call" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col items-center justify-center gap-6">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center animate-pulse">
                <PhoneMissed className="w-10 h-10 text-red-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Incoming Call</h3>
                <p className="text-muted-foreground">(555) 019-2834</p>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white"><PhoneMissed className="w-6 h-6" /></div>
              </div>
            </motion.div>
          )}

          {(step === 2 || step === 3) && (
            <motion.div key="text" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-center text-muted-foreground">Today 2:30 PM</span>
                <div className="bg-accent text-accent-foreground p-3 rounded-2xl rounded-tl-none self-start max-w-[85%]">
                  <p className="text-sm">Hi, this is Elite Plumbing. We saw we just missed your call. How can we help you today?</p>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="bg-muted text-foreground p-3 rounded-2xl rounded-tr-none self-end max-w-[85%] mt-2">
                  <p className="text-sm">My water heater is leaking everywhere!</p>
                </motion.div>
                
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 bg-card border-2 border-green-500 rounded-xl p-4 shadow-lg text-center flex flex-col items-center gap-2">
                    <CalendarCheck className="w-8 h-8 text-green-500" />
                    <h4 className="font-bold text-foreground">Job Booked</h4>
                    <p className="text-xs text-muted-foreground">Emergency Repair - Tom</p>
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
