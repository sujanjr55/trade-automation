"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/Slider";
import { Button } from "@/components/ui/Button";
import { BookingModal } from "@/components/modals/BookingModal";
import { Calculator } from "lucide-react";

export function RoiCalculator() {
  const [missedCalls, setMissedCalls] = React.useState(5);
  const [jobValue, setJobValue] = React.useState(1200);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Monthly Lost Revenue = (Missed Calls Per Week * 4.33) * Average Job Value * 0.60
  const monthlyLostRevenue = Math.round((missedCalls * 4.33) * jobValue * 0.60);

  return (
    <section id="calculator" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 flex items-center justify-center gap-3">
            <Calculator className="w-8 h-8 text-accent" />
            Calculate Your Lost Revenue
          </h2>
          <p className="text-lg text-muted-foreground">
            See exactly how much money is slipping through the cracks every month.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl shadow-xl p-6 md:p-10 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Controls */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="font-semibold text-foreground">How many calls do you miss per week?</label>
                  <span className="text-2xl font-bold text-accent">{missedCalls}</span>
                </div>
                <Slider 
                  min={1} 
                  max={25} 
                  value={missedCalls} 
                  onValueChange={setMissedCalls} 
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>25+</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="font-semibold text-foreground">What is your average job value?</label>
                  <span className="text-2xl font-bold text-accent">${jobValue.toLocaleString()}</span>
                </div>
                <Slider 
                  min={300} 
                  max={10000} 
                  step={100}
                  value={jobValue} 
                  onValueChange={setJobValue} 
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$300</span>
                  <span>$10k+</span>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground">
                * Calculation assumes a conservative 60% close rate on captured missed leads.
              </p>
            </div>

            {/* Output Display */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-6 text-center">
                <h3 className="text-red-600 font-bold mb-2">Estimated Monthly Money Lost:</h3>
                <p className="text-4xl font-extrabold text-red-600">
                  ${monthlyLostRevenue.toLocaleString()}
                </p>
              </div>

              <div className="bg-green-500/10 border-2 border-green-500/50 rounded-xl p-6 text-center">
                <h3 className="text-green-600 font-bold mb-2">Your Estimated ROI With Our System:</h3>
                <p className="text-2xl font-extrabold text-green-600">
                  8x - 12x Return
                </p>
              </div>

              <Button size="lg" className="w-full text-lg shadow-lg" onClick={() => setIsModalOpen(true)}>
                Claim This Lost Revenue Now
              </Button>
            </div>

          </div>
        </motion.div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        prefillLostRevenue={monthlyLostRevenue} 
      />
    </section>
  );
}
