"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, Smartphone, Tablet, MessageSquare, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  tradeId: string;
}

type DeviceMode = "desktop" | "tablet" | "mobile";

export function DemoPreviewModal({ isOpen, onClose, tradeId }: DemoPreviewModalProps) {
  const [deviceMode, setDeviceMode] = React.useState<DeviceMode>("desktop");
  const [chatOpen, setChatOpen] = React.useState(false);

  // Handle ESC key to close
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const getDeviceWidth = () => {
    switch (deviceMode) {
      case "mobile": return "max-w-[375px]";
      case "tablet": return "max-w-[768px]";
      case "desktop": return "max-w-full";
      default: return "max-w-full";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="flex flex-col w-full h-full max-w-7xl bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            {/* Top Bar */}
            <div className="h-16 border-b border-border bg-muted/30 flex items-center justify-between px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground mr-4 hidden sm:block">{tradeId} Live Demo</span>
                
                {/* Device Switcher */}
                <div className="flex items-center bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setDeviceMode("desktop")}
                    className={cn("p-2 rounded-md transition-colors", deviceMode === "desktop" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
                    aria-label="Desktop View"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceMode("tablet")}
                    className={cn("p-2 rounded-md transition-colors", deviceMode === "tablet" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
                    aria-label="Tablet View"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceMode("mobile")}
                    className={cn("p-2 rounded-md transition-colors", deviceMode === "mobile" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
                    aria-label="Mobile View"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
                aria-label="Close Demo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Psychological Warning Banner */}
            <div className="bg-destructive/10 border-b border-destructive/20 p-3 sm:p-4 text-center">
              <p className="text-sm sm:text-base font-bold text-destructive flex items-center justify-center gap-2 max-w-3xl mx-auto">
                <Flame className="w-5 h-5 shrink-0" />
                <span><strong className="uppercase">Warning:</strong> This isn&apos;t just a pretty layout. This exact engine recovered $14,200 in missed plumbing calls in Houston, TX last month. Test the live chatbot on the bottom right.</span>
              </p>
            </div>

            {/* Preview Container */}
            <div className="flex-1 bg-slate-900/10 overflow-hidden flex items-center justify-center p-4">
              <div className={cn("relative w-full h-full bg-background transition-all duration-500 ease-in-out mx-auto rounded-lg shadow-xl overflow-hidden border border-border flex flex-col", getDeviceWidth())}>
                
                {/* Dummy Site Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="h-20 bg-primary flex items-center px-6">
                    <span className="text-primary-foreground font-bold text-xl">{tradeId} Pros</span>
                  </div>
                  <div className="p-8 sm:p-12 text-center bg-muted/20 pb-32">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-6">
                      Trusted {tradeId} Experts in Your Area.
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                      Available 24/7 for emergency repairs and standard estimates. Fast, reliable, and guaranteed.
                    </p>
                    <div className="w-full h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse" />
                  </div>
                </div>

                {/* Live Chat Widget Simulator */}
                <div className="absolute bottom-6 right-6 flex flex-col items-end z-50">
                  <AnimatePresence>
                    {chatOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-72 sm:w-80 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
                      >
                        <div className="bg-accent text-accent-foreground p-4">
                          <h4 className="font-bold">AI Booking Agent</h4>
                          <p className="text-xs opacity-90">Usually responds instantly</p>
                        </div>
                        <div className="h-64 p-4 flex flex-col gap-3 overflow-y-auto bg-muted/10">
                          <div className="bg-muted text-foreground p-3 rounded-2xl rounded-tl-none self-start text-sm">
                            Hi there! Do you have a {tradeId} emergency or need a quote?
                          </div>
                          {/* Placeholder for user to feel it's interactive */}
                          <div className="mt-auto text-xs text-center text-muted-foreground">
                            Try typing below to see speed-to-lead in action.
                          </div>
                        </div>
                        <div className="p-3 border-t border-border bg-card">
                          <input 
                            type="text" 
                            placeholder="Type a message..." 
                            className="w-full text-sm bg-muted rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-accent"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setChatOpen(!chatOpen)}
                    className="w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
                    aria-label="Toggle Chat"
                  >
                    {chatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
                  </button>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
