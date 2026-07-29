"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PhoneOff, MessageSquareText, CalendarCheck2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "You Miss A Call",
      description: "You are busy on a job site, under a house, or driving. A potential customer calls and goes to voicemail.",
      icon: PhoneOff,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      number: "2",
      title: "System Sends Instant Text",
      description: "Within 3 seconds, our AI texts them: 'Hi, this is [Your Business]. We saw we missed your call. How can we help?'",
      icon: MessageSquareText,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      number: "3",
      title: "Job Booked On Your Phone",
      description: "The AI answers their questions and books the appointment directly onto your calendar. You just get a notification.",
      icon: CalendarCheck2,
      color: "text-green-500",
      bg: "bg-green-500/10",
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Zero-Effort System. <span className="text-accent">100% Automated.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You don&apos;t need to learn a new software or change how you work. We set it up once, and it runs in the background.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background">
                {step.number}
              </div>
              
              <div className={`w-16 h-16 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
