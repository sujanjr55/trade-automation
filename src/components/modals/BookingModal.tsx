"use client";

import * as React from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillLostRevenue?: number;
}

export function BookingModal({ isOpen, onClose, prefillLostRevenue }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      businessName: formData.get("businessName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      tradeType: formData.get("tradeType"),
      estimatedLostRevenue: prefillLostRevenue || 0,
    };

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error("Lead capture failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isSuccess ? "Demo Booked!" : "Book Your 10-Min Demo"}>
      {isSuccess ? (
        <div className="py-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Thank you! Our system will text you in exactly 3 seconds to confirm.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            See our automated Speed-to-Lead engine in action.
            {prefillLostRevenue && prefillLostRevenue > 0 && (
              <span className="block mt-1 font-semibold text-accent">
                Stop losing ${prefillLostRevenue.toLocaleString()}/mo. Claim it back.
              </span>
            )}
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
              <Input id="fullName" name="fullName" required placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="businessName" className="text-sm font-medium">Business Name</label>
              <Input id="businessName" name="businessName" required placeholder="Elite Plumbing" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">Mobile Phone (For Text-Back Demo)</label>
            <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
            <Input id="email" name="email" type="email" required placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label htmlFor="tradeType" className="text-sm font-medium">Trade / Industry</label>
            <select
              id="tradeType"
              name="tradeType"
              className="flex h-12 w-full rounded-md border border-border bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              required
            >
              <option value="" disabled selected>Select your trade</option>
              <option value="HVAC">HVAC</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Roofing">Roofing</option>
              <option value="Electrical">Electrical</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <Button type="submit" className="w-full mt-4" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Booking..." : "Book 10-Min Demo"}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            By submitting, you agree to receive automated SMS response messages. Reply STOP to opt-out.
          </p>
        </form>
      )}
    </Modal>
  );
}
