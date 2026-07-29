"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Zap, Bot, CalendarCheck, TrendingUp, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const services = [
    {
      title: "Ultra-Fast Trade Websites",
      description: "We build sub-2 second, mobile-first websites engineered specifically to rank on Google Local and convert visitors into paid jobs.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      features: ["Guaranteed Google Pagespeed Boost", "100% Mobile & Touch Optimized", "Tap-to-Call & Emergency Forms"]
    },
    {
      title: "Missed Call Text-Back",
      description: "Never lose a lead to voicemail again. When you miss a call on the job, our system instantly texts the customer back in 3 seconds.",
      icon: Bot,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      features: ["3-Second Instant Response", "Stop Leads Calling Competitors", "Fully Automated 24/7"]
    },
    {
      title: "AI Appointment Booking",
      description: "Our AI assistant answers customer questions via SMS or Webchat and books estimates directly into your calendar.",
      icon: CalendarCheck,
      color: "text-green-500",
      bg: "bg-green-500/10",
      features: ["Zero Human Intervention Needed", "Direct Calendar Syncing", "Answers FAQs automatically"]
    },
    {
      title: "Google Review Engine",
      description: "Automatically text customers after a job is completed to request a 5-star Google review, dominating your local market.",
      icon: TrendingUp,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      features: ["Automated SMS Review Requests", "Filters Out Bad Reviews", "Boosts Local SEO Rankings"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-bold uppercase tracking-widest text-sm rounded-full mb-4 border border-accent/20">
            Our Core Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 max-w-3xl leading-tight">
            Everything You Need To <span className="text-accent">Dominate Your Local Market.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t just build pretty websites. We install a complete revenue-generating ecosystem for your trade business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ease: "easeOut" }}
              className="bg-card rounded-3xl p-8 border border-border shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", service.bg, service.color)}>
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="font-semibold text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
