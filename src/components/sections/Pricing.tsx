"use client";

import * as React from "react";
import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { config } from "@/lib/config";

export function Pricing() {
  const tiers = [
    {
      name: "Core Automation",
      setup: "$500 Setup",
      monthly: "$297",
      description: "Stop missing jobs with instant text-back and automated reputation management.",
      features: [
        "Ultra-Fast Landing Page",
        "Missed Call Text-Back (3s response)",
        "Automated Google Reviews Request",
        "Basic CRM Pipeline",
        "Email & SMS Support"
      ],
      link: config.stripe.tier1,
      featured: false,
    },
    {
      name: "Growth Engine",
      setup: "$1,000 Setup",
      monthly: "$497",
      description: "Everything in Core, plus intelligent chat booking and full calendar sync.",
      features: [
        "Everything in Core Automation",
        "AI Website Webchat Widget",
        "2-Way Calendar Sync",
        "Jobber / ServiceTitan Integration",
        "Automated Appointment Reminders",
        "Priority Support"
      ],
      link: config.stripe.tier2,
      featured: true,
    },
    {
      name: "Enterprise AI",
      setup: "$1,500 Setup",
      monthly: "$997",
      description: "The ultimate 24/7 autonomous booking machine for high-volume contractors.",
      features: [
        "Everything in Growth Engine",
        "24/7 AI Voice Phone Agent",
        "Advanced Database Reactivation",
        "Custom Workflow Automations",
        "Dedicated Account Manager",
        "Monthly Strategy Calls"
      ],
      link: config.stripe.tier3,
      featured: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Transparent Pricing. No Surprises.
          </h2>
          <p className="text-lg text-muted-foreground">
            A single booked job pays for the entire year.
          </p>
        </div>

        {/* Guarantee Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-slate-900 text-white rounded-2xl p-8 shadow-2xl mb-16 flex flex-col md:flex-row items-center gap-6 border border-slate-700">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shrink-0 shadow-lg">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">30-DAY RISK-FREE GUARANTEE</h3>
            <p className="text-slate-300">
              If our system doesn&apos;t capture at least 3 missed jobs in your first 30 days, we refund 100% of your setup fee. No questions asked.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative bg-card rounded-3xl p-8 border ${
                tier.featured ? 'border-accent shadow-2xl shadow-accent/20 scale-105 z-10' : 'border-border shadow-lg'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm font-bold shadow-lg border-none hover:bg-accent">
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 h-10">{tier.description}</p>
                <div className="text-muted-foreground font-semibold mb-2">{tier.setup} +</div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-foreground">{tier.monthly}</span>
                  <span className="text-muted-foreground font-medium">/mo</span>
                </div>
              </div>

              <a href={tier.link} target="_blank" rel="noopener noreferrer" className="block w-full mb-8">
                <Button 
                  variant={tier.featured ? "default" : "outline"} 
                  size="lg" 
                  className={`w-full ${tier.featured ? 'shadow-lg shadow-accent/20' : ''}`}
                >
                  Get Started Now
                </Button>
              </a>

              <ul className="space-y-4">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.featured ? 'text-accent' : 'text-green-500'}`} />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
