"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarClock } from "lucide-react";
import { Button } from "./Button";
import { BookingModal } from "@/components/modals/BookingModal";

export function StickyCTA() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling past 400px (typically past the hero)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/90 backdrop-blur-xl border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.1)] lg:hidden flex gap-3 justify-center items-center"
          >
            <Button size="lg" className="flex-1 text-sm gap-2" onClick={() => setIsModalOpen(true)}>
              <CalendarClock className="w-4 h-4" />
              Book Live Demo
            </Button>
            <Button variant="outline" size="lg" className="flex-none px-4" aria-label="Call Now">
              <Phone className="w-5 h-5 text-accent" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
