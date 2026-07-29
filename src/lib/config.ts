export const config = {
  // Agency Phone Number for the US
  phone: "(800) 555-AUTO",

  // GoHighLevel Webhook URLs
  ghlWebhookUrl: process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/.../...",
  
  // Stripe Payment Links
  stripe: {
    tier1: process.env.NEXT_PUBLIC_STRIPE_TIER1 || "https://buy.stripe.com/test_...",
    tier2: process.env.NEXT_PUBLIC_STRIPE_TIER2 || "https://buy.stripe.com/test_...",
    tier3: process.env.NEXT_PUBLIC_STRIPE_TIER3 || "https://buy.stripe.com/test_...",
  },
  
  // Social Links
  social: {
    twitter: "https://twitter.com/tradeautomation",
    linkedin: "https://linkedin.com/company/tradeautomation",
  }
};
