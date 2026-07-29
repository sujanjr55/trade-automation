"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Miller",
    company: "Miller HVAC Solutions",
    quote: "Since installing TradeAutomation, we've booked an extra $12k in revenue just from calls we missed while on other jobs. It's paid for itself 10x over.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    company: "Jenkins Plumbing",
    quote: "The 3-second text back is a game changer. By the time I finish my current job and check my phone, the next one is already booked on my calendar.",
    rating: 5,
  },
  {
    name: "Mike Thompson",
    company: "Apex Electrical",
    quote: "Our website is blazing fast now, and the chat widget actually converts visitors into booked appointments without me doing anything.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Trusted By Top US Contractors
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it. See the real revenue results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 text-lg italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-accent font-medium">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
