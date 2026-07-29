import { Wrench, Droplet, Home, Zap } from "lucide-react";

export type TradeKey = "Plumbing" | "HVAC" | "Roofing" | "Electrical";

export const TRADE_PORTFOLIOS = {
  Plumbing: {
    id: "Plumbing",
    icon: Droplet,
    tabLabel: "🔧 Plumbing Money Engine",
    title: "The Ultimate Plumbing Growth Engine",
    description: "Designed specifically for plumbers to capture emergency leaks and standard estimates instantly.",
    previewUrl: "https://example.com/plumbing-demo", // Placeholder for iframe
    stats: {
      conversion: "3.5x Higher Conversion",
      mobile: "100% Mobile Ready",
    },
    chatbotName: "PlumbingAI",
  },
  HVAC: {
    id: "HVAC",
    icon: Wrench,
    tabLabel: "❄️ HVAC Revenue System",
    title: "The Ultimate HVAC Growth Engine",
    description: "Engineered to book AC repairs and seasonal tune-ups automatically, 24/7.",
    previewUrl: "https://example.com/hvac-demo",
    stats: {
      conversion: "3.8x Higher Conversion",
      mobile: "100% Mobile Ready",
    },
    chatbotName: "HVAC AI Assistant",
  },
  Roofing: {
    id: "Roofing",
    icon: Home,
    tabLabel: "🏠 Roofing Client Magnet",
    title: "The Ultimate Roofing Growth Engine",
    description: "Capture post-storm leads instantly and schedule free roof inspections on autopilot.",
    previewUrl: "https://example.com/roofing-demo",
    stats: {
      conversion: "3.2x Higher Conversion",
      mobile: "100% Mobile Ready",
    },
    chatbotName: "Roofing Bot",
  },
  Electrical: {
    id: "Electrical",
    icon: Zap,
    tabLabel: "⚡ Electrician Booking Hub",
    title: "The Ultimate Electrical Growth Engine",
    description: "Turn power outage panics into booked emergency calls with zero human intervention.",
    previewUrl: "https://example.com/electrical-demo",
    stats: {
      conversion: "3.6x Higher Conversion",
      mobile: "100% Mobile Ready",
    },
    chatbotName: "Volt Electric AI",
  },
} as const;
