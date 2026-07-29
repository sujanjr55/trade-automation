"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to set up?",
    answer: "We handle the entire setup for you within 48 hours. You just need to provide your business details, and we build your fast landing page, connect your phone numbers, and train the AI on your specific trade.",
  },
  {
    question: "Do I need to change my current phone number?",
    answer: "No. We can either integrate with your existing VOIP system or provide a dedicated tracking number that forwards directly to your cell phone while automatically handling the missed call text-backs.",
  },
  {
    question: "How does the AI know how to answer trade-specific questions?",
    answer: "We train the AI using industry-standard prompts for HVAC, Plumbing, Roofing, or Electrical. It knows how to ask about the severity of the issue, gather address details, and schedule an inspection or repair based on your calendar availability.",
  },
  {
    question: "What happens if the AI can't answer a customer's question?",
    answer: "If the AI encounters a complex question, it politely informs the customer that a human technician will review the details and call them back shortly, ensuring a positive customer experience.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the system.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-foreground hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.question}
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? "rotate-180 text-accent" : "text-muted-foreground"}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 py-4 border-t border-border bg-background/50"
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
